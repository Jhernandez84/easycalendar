// components/Calendar.js
import React from 'react';
import { useState } from 'react';
import MyModal from './CalendarModal';

const daysInMonth = (month, year) => {
  return new Date(year, month + 1, 0).getDate();
};

const getWeek = (date) => {
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const days = Math.floor((date - firstDayOfYear) / (24 * 60 * 60 * 1000));
  return Math.ceil((days + firstDayOfYear.getDay() + 1) / 7);
};

const generateCalendar = (month, year) => {
  const totalDays = daysInMonth(month, year);
  const firstDayOfWeek = new Date(year, month, 1).getDay();

  const calendar = [];

  // Llena los días del mes anterior
  const prevMonthDays = daysInMonth(month - 1 < 0 ? 11 : month - 1, month - 1 < 0 ? year - 1 : year);
  const prevMonthStart = prevMonthDays - firstDayOfWeek + 1;
  for (let i = prevMonthStart; i <= prevMonthDays; i++) {
    calendar.push({
      day: i,
      week: getWeek(new Date(year, month - 1 < 0 ? 11 : month - 1, i)),
      isPrevMonth: true,
    });
  }

  // Llena los días del mes actual
  for (let day = 1; day <= totalDays; day++) {
    calendar.push({
      day,
      week: getWeek(new Date(year, month, day)),
    });
  }

  // Llena los días del mes siguiente
  const daysAfter = 42 - calendar.length;
  for (let i = 1; i <= daysAfter; i++) {
    calendar.push({
      day: i,
      week: getWeek(new Date(year, month + 1 > 11 ? 0 : month + 1, i)),
      isNextMonth: true,
    });
  }

  return calendar;
};

const getMonthName = (monthNumber) => {
  const monthDate = new Date(2023, monthNumber - 1, 1); // Month is zero-based
  return monthDate.toLocaleString('es-CL', { month: 'long' });
};

const CalendarMonthView = ({ month, year, Fscreen }) => {
  const calendar = generateCalendar(month, year);
  const [isModalOpen, setModalOpen] = useState(false);
  const [SelectedDate, setSelectedDate] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const dateHandler = (e) => {
    setSelectedDate(e)
    console.log('clicked' + e)
    openModal()
  }

  return (
    <>
      {isModalOpen && <MyModal onClose={closeModal} SelectedDate={SelectedDate}/>}

      <div className='dark:bg-gray-700 rounded-md shadow-xl w-[330px] h-[290px]'>
        <div className='grid grid-rows flex justify-center content-center p-2'>
          <div className='text-center p-2 dark:bg-gray-800 rounded-t-md'>
            {/* <p>Atr.</p> */}
            <h2 className='text-md'>{`${getMonthName(month + 1)} - ${year}`}</h2>
            {/* <p>Sig.</p> */}
          </div>
          <table className='dark:bg-gray-700 rounded shadow-xl self-center'>
            <thead className=''>
              <tr className="ligth:white dark:gray-800 h-8 text-gray-500 shadow">
                <th className="dark:hover:cursor-default w-12 p-1">Sem</th>
                <th className="dark:hover:cursor-default w-8 p-1">Lun</th>
                <th className="dark:hover:cursor-default w-8 p-1">Mar</th>
                <th className="dark:hover:cursor-default w-8 p-1">Mié</th>
                <th className="dark:hover:cursor-default w-8 p-1">Jue</th>
                <th className="dark:hover:cursor-default w-8 p-1">Vie</th>
                <th className="dark:hover:cursor-default w-8 p-1">Sáb</th>
                <th className="dark:hover:cursor-default w-8 p-1">Dom</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 6 }).map((_, weekIndex) => (
                <tr key={weekIndex} className="text-xs">
                  {Array.from({ length: 8 }).map((_, dayIndex) => {
                    const dataIndex = weekIndex * 7 + dayIndex;
                    const dayInfo = calendar[dataIndex];
                    if (dayIndex === 0) {
                      return <td
                        className='text-xs text-center dark:hover:cursor-default p-2 text-rose-400' key={dayIndex}>{dayInfo ? dayInfo.week : ''}</td>;
                    }
                    return <td
                      onClick={() => dateHandler(dayInfo.day)}
                      className='text-center text-base cursor-pointer dark:hover:bg-teal-600 rounded' key={dayIndex}>{dayInfo ? dayInfo.day : ''}</td>;
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CalendarMonthView;

