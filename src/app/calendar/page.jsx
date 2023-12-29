"use client";
import React, { useState } from "react";
import { CalendarPicker } from "@/Components/Calendar/Calendar";
import UserTable from "@/Components/UserTable/UserTable";
import CalendarWeekView from "@/Components/Calendar/CalendarWeekView";
import CalendarMonthView from "@/Components/Calendar/CalendarMonthView";
import CalendarYearView from "@/Components/Calendar/CalendarYearView";
import CalendarHeaders from "@/Components/Calendar/CalendarHeaders";

const Calendar = () => {

  const [calendarView, setCalendarView] = useState('MonthView')

  switch (calendarView) {
    case 'WeekView':
      return (
        <>
          <CalendarHeaders setCalendarView={setCalendarView} />
          <div
            // className="grid grid-cols-2 justify-items-center bg-white dark:bg-gray-600"
            className="justify-items-center bg-white w-full p-4 rounded-bl-lg dark:bg-gray-600 dark:text-white"
          // style={{ gridTemplateColumns: "25% 75%" }}
          >
            <CalendarWeekView />
          </div>
        </>)
    case 'MonthView':
      return (
        <>
          <CalendarHeaders setCalendarView={setCalendarView} />

          <div
            // className="grid grid-cols-2 justify-items-center bg-white dark:bg-gray-600"
            className="justify-items-center bg-white w-full p-4 rounded-bl-lg dark:bg-gray-600 dark:text-white"
          // style={{ gridTemplateColumns: "25% 75%" }}
          >
            <CalendarMonthView month={11} year={2023} />

          </div>
        </>)
    default:
      return (
        <>
          <CalendarHeaders setCalendarView={setCalendarView} />
          <div
            // className="grid grid-cols-2 justify-items-center bg-white dark:bg-gray-600"
            className="justify-items-center bg-white w-full p-4 rounded-bl-lg dark:bg-gray-600 dark:text-white"
          // style={{ gridTemplateColumns: "25% 75%" }}
          >
            <CalendarYearView year={2023} />
          </div>
        </>)
  }
};

export default Calendar;
