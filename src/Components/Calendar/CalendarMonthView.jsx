// components/Calendar.js
import React from 'react';

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

const CalendarMonthView = ({ month, year }) => {
  const calendar = generateCalendar(month, year);

  return (
    <div>
      <h2>{`${month + 1}/${year}`}</h2>
      <table>
        <thead>
          <tr className="dark:bg-gray-800 h-8">
            <th className="w-8">Nº</th>
            <th className="w-8">Lun</th>
            <th className="w-8">Mar</th>
            <th className="w-8">Mié</th>
            <th className="w-8">Jue</th>
            <th className="w-8">Vie</th>
            <th className="w-8">Sáb</th>
            <th className="w-8">Dom</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 6 }).map((_, weekIndex) => (
            <tr key={weekIndex}>
              {Array.from({ length: 8 }).map((_, dayIndex) => {
                const dataIndex = weekIndex * 7 + dayIndex;
                const dayInfo = calendar[dataIndex];
                if (dayIndex === 0) {
                  return <td key={dayIndex}>{dayInfo ? dayInfo.week : ''}</td>;
                }
                return <td key={dayIndex}>{dayInfo ? dayInfo.day : ''}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CalendarMonthView;

