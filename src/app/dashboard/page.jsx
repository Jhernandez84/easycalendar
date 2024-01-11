// pages/index.js or any other Next.js component file
"use client";

import React from "react";
import CalendarMonthView from "@/Components/Calendar/CalendarMonthView";
import CalendarDayView from "@/Components/Calendar/CalendarDayView";
import DBComponents from "./DBComponents/DBComponents";
import UserTable1 from "@/Components/UserTable/UserTable2";
import DBChart from "./DBComponents/DBChart";

const Dashboard = () => {
  const AppointedDates = [
    { date: "2023-12-01", qty: "1" },
    { date: "2023-12-02", qty: "6" },
    { date: "2023-12-03", qty: "8" },
    { date: "2023-12-04", qty: "7" },
    { date: "2023-12-05", qty: "2" },
    { date: "2023-12-06", qty: "4" },
    { date: "2023-12-07", qty: "9" },
    { date: "2023-12-08", qty: "8" },
    { date: "2023-12-09", qty: "4" },
    { date: "2023-12-10", qty: "1" },
    { date: "2023-12-11", qty: "4" },
    { date: "2023-12-12", qty: "6" },
    { date: "2023-12-13", qty: "4" },
    { date: "2023-12-14", qty: "8" },
    { date: "2023-12-15", qty: "7" },
    { date: "2023-12-16", qty: "1" },
  ];

  return (
    <div
      className="grid grid-rows-2 h-full bg-white text-gray-700 dark:bg-gray-600"
      style={{ gridTemplateRows: "30% 50%" }}
    >
      <div
        className="grid grid-cols-3 justify-items-stretch flex-col mt-2 h-[40%]"
        style={{ gridTemplateColumns: "30% 30% 30%" }}
      >
        <div className="justify-self-center">
          <DBComponents />
          <h1 className="text-white">Tasa de ocupación</h1>
        </div>
        <div className="justify-self-center">
          <DBChart ChartType="line" ChartData={AppointedDates} />
        </div>
        {/* <div className="justify-self-center">
          <DBChart ChartType="line" ChartData={AppointedDates} />
        </div> */}
      </div>
      <div
        className="grid grid-cols-2 bg-white text-gray-700 dark:bg-gray-600"
        style={{ gridTemplateColumns: "30% 70%" }}
      >
        <div className="justify-self-center dark:text-white flex-col mt-2">
          <CalendarMonthView AppointedDates={AppointedDates} />
        </div>
        <div className="justify-self-left flex-col mt-2 pr-12 text-white">
          <div>
            <CalendarDayView />
          </div>
          {/* <h1>Horas disponibles este mes</h1> */}
          {/* <UserTable1 /> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
