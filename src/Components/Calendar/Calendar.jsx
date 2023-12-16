// DatePicker.js
import React, { useState } from "react";
import { Datepicker } from "flowbite-react";

const CalendarPicker = () => {
  return (
    <div>
      <Datepicker
        language="es-CL"
        labelTodayButton="Hoy"
        labelClearButton="Limpiar"
        weekStart={3}
        inline
      />
    </div>
  );
};

function QuickDatePicker() {
  return (
    <div>
      <Datepicker
        language="es-CL"
        weekStart={3}
        labelTodayButton="Hoy"
        labelClearButton="Limpiar"
        onSelectedDateChanged={()=> alert('hola')}
      />
    </div>
  );
}

export { CalendarPicker, QuickDatePicker };
