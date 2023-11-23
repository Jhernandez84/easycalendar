"use client";
import CalendarPicker from "@/Components/Calendar/Calendar";
import React, { useState } from "react";

const Calendar = () => {
  return (
    <div className="flex h-screen">
      {/* Left column (30% width) */}
      <div className="w-[30%] bg-gray-200 h-full p-4 rounded-bl-lg">
        {/* First row (50% height) - Vertical NavBar Icons with Item Count */}
        <div className="flex h-1/2 bg-white p-4 flex-col mb-4">
          <p className="text-black">Calendario</p>
          <CalendarPicker />
          <div className="flex flex-row mb-4">
            {/* Vertical NavBar Icons */}
            <div className="flex mb-2">
              {/* Include your vertical navigation bar icons here */}
              {/* Add more icons as needed */}
            </div>
            {/* Item Count */}
          </div>
        </div>
        {/* Second row (50% height) - Calendar Space */}
        <div className="h-1/2 bg-white p-4 ">
          <p className="text-black">Acá va el equipo o personal</p>
        </div>
      </div>
      {/* Right column (70% width) */}
      <div className="bg-gray-300 h-full p-4">
        <h6>Vista de la semana</h6>
      </div>
      <div className="w-[70%] bg-gray-300 h-full p-4">
        {/* First row (50% height) */}
        <div className="flex mb-4 h-[85%]">
          <div className="w-full bg-white">
            <div className="grid grid-cols-7">
              {[
                "Lunes",
                "Martes",
                "Miércoles",
                "Jueves",
                "Viernes",
                "Sábado",
                "Domingo",
              ].map((day, index) => (
                <>
                  <div
                    key={index}
                    className="p-4 border border-gray-100 h-full flex flex-col"
                  >
                    <div className="border-b border-gray-300 h-[100] flex flex-col pb-4">
                      <div className="font-bold mb-2 text-center text-black">
                        {day}
                      </div>
                      <div className="flex-grow flex  justify-center text-black text-center">
                        {index + 1}
                      </div>
                    </div>
                    <div className="font-bold mb-2 text-center text-black pt-4">
                      <p>Hora 1</p>
                    </div>
                    <div className="flex-grow flex flex-row justify-center text-black text-center">
                      <div>
                        {[
                          "10:00",
                          "11:00",
                          "12:00",
                          "13:00",
                          "14:00",
                          "15:00",
                          "16:00",
                          "17:00",
                          "18:00",
                        ].map((time, index) => (
                          <>
                            <div
                              className="cursor-pointer bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white border border-gray-400 rounded-full py-1 px-5 mb-2"
                              key={index}
                            >
                              {time}
                            </div>
                          </>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
            {/* Content for the first column of the first row */}
          </div>
        </div>

        {/* Second row (50% height) */}
        <div className="flex">
          {/* First column (50% width) */}
          <div className="w-1/2 p-4 bg-white">
            {/* Content for the first column of the second row */}
          </div>
          {/* Second column (50% width) */}
          <div className="w-1/2 p-4 bg-white ml-4">
            {/* Content for the second column of the second row */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
