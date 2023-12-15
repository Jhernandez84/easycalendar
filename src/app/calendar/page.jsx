"use client";
import CalendarPicker from "@/Components/Calendar/Calendar";
import UserTable from "@/Components/UserTable/UserTable";

import React, { useState } from "react";
import CalendarWeekView from "@/Components/Calendar/CalendarWeekView";

const Calendar = () => {
  return (
    <div
      className="grid grid-cols-2 justify-items-center bg-white dark:bg-gray-600"
      style={{ gridTemplateColumns: "25% 75%" }}
    >
      <div
        className="grid grid-rows-2 justify-items-stretch mt-2"
        style={{ gridTemplateRows: "50% 50%" }}
      >
        <div className="flex flex-row">
          <CalendarPicker />
        </div>
        <div className="flex flex-row">
          <UserTable />
        </div>
      </div>
      <div className="w-full bg-white-200  pt-4 pr-2 rounded-bl-lg dark:bg-gray-600 dark:text-white">
        <CalendarWeekView />
      </div>
    </div>
  );
};

export default Calendar;
