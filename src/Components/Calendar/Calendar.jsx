// DatePicker.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import Calendar from 'react-calendar';
import 'react-datepicker/dist/react-datepicker.css';
import 'tailwindcss/tailwind.css'; // Make sure to include your Tailwind CSS file

// const Calendar = () => {
//   const [selectedDate, setSelectedDate] = useState(null);

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   return (
//     <div className="mt-4">
//       <DatePicker
//         selected={selectedDate}
//         onChange={handleDateChange}
//         dateFormat="MMMM d, yyyy"
//         className="border p-2 rounded-md"
//       />
//       {selectedDate && (
//         <p className="mt-2">Selected Date: {selectedDate.toDateString()}</p>
//       )}
//     </div>
//   );
// };

// export default Calendar;

// DatePicker.js
const CalendarPicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // Function to determine if a date is today
  const isToday = (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  // Function to add a class to highlight today's date and the entire week row
  const tileClassName = ({ date, view }) => {
    const classes = [];
    if (view === 'month') {
      if (isToday(date)) {
        classes.push('today');
      }
      // Check if the date is in the same week as the selectedDate
      if (
        date >= new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate() - selectedDate.getDay()) &&
        date <= new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate() - selectedDate.getDay() + 6)
      ) {
        classes.push('selected-week');
      }
    }
    return classes.length > 0 ? classes : null;
  };

  // Function to display days of the selected week
  const displaySelectedWeek = () => {
    const days = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(selectedDate);
      day.setDate(selectedDate.getDate() - selectedDate.getDay() + i);
      days.push(
        <div key={i} className={`border p-2 rounded-md mx-2 ${isToday(day) ? 'today' : ''}`}>
          {day.toLocaleDateString('es-ES', { weekday: 'long' })}
        </div>
      );
    }
    return days;
  };

  return (
    <div className="mt-4 text-black text-center">
      <Calendar
        value={selectedDate}
        onChange={handleDateChange}
        className="border p-2 rounded-md mx-auto"
        tileClassName={tileClassName}
        locale="es-ES"
        formatLongDate={({ date, locale }) =>
          new Intl.DateTimeFormat(locale, {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }).format(date)
        }
      />
      {/* <div className="mt-4 flex justify-center">
        {displaySelectedWeek()}
      </div> */}
      {selectedDate && (
        <p className="mt-2">Fecha seleccionada: {selectedDate.toLocaleDateString('es-ES')}</p>
      )}
      <style jsx>{`
        .today {
          background-color: red;
          color: white;
          border-radius: 50%;
        }
        .selected-week {
          background-color: #edf2f7; /* Cambia el color de fondo para la fila de la semana */
        }
      `}</style>
    </div>
  );
};

export default CalendarPicker;
