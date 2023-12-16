import React from "react";
import { Tooltip } from "flowbite-react";

import { useState } from "react";
import { QuickDatePicker } from "./Calendar";

const CalendarWeekView = () => {
  const [openModal, setOpenModal] = useState(false);
  const ShowModal = () => setOpenModal(true);

  const daysOfWeek = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
  ];

  const timeSlots = [
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
  ];

  // Dummy data for availability (true) or busy (false)
  const availability = [
    {
      time: "9:00",
      occupancy: {
        monday: "true",
        tuesday: "true",
        wednesday: "true",
        thursday: "true",
        fridays: "false",
      },
    },
    {
      time: "10:00",
      occupancy: {
        monday: "true",
        tuesday: "true",
        wednesday: "true",
        thursday: "true",
      },
    },
    {
      time: "11:00",
      occupancy: {
        monday: "true",
        tuesday: "true",
        wednesday: "true",
        thursday: "true",
      },
    },
    {
      time: "12:00",
      occupancy: {
        monday: "true",
        tuesday: "true",
        wednesday: "true",
        thursday: "true",
        friday: "true",
        saturday: "true",
        sunday: "true",
      },
    },
    {
      time: "12:00",
      occupancy: {
        monday: "true",
        tuesday: "true",
        wednesday: "true",
        thursday: "true",
        friday: "true",
        saturday: "true",
        sunday: "true",
      },
    },
    {
      time: "13:00",
      occupancy: {
        monday: "true",
        tuesday: "true",
        wednesday: "true",
        thursday: "true",
        friday: "true",
        saturday: "true",
        sunday: "true",
      },
    },
    {
      time: "15:00",
      occupancy: {
        monday: "true",
        tuesday: "true",
        wednesday: "true",
        thursday: "true",
        friday: "true",
        saturday: "true",
        sunday: "true",
      },
    },
    {
      time: "16:00",
      occupancy: {
        monday: "true",
        tuesday: "true",
        wednesday: "true",
        thursday: "true",
        friday: "true",
        saturday: "true",
        sunday: "true",
      },
    },
    {
      time: "17:00",
      occupancy: {
        monday: "true",
        tuesday: "true",
        wednesday: "true",
        thursday: "true",
        friday: "true",
        saturday: "true",
        sunday: "true",
      },
    },
    {
      time: "18:00",
      occupancy: {
        monday: "true",
        tuesday: "true",
        wednesday: "true",
        thursday: "true",
        friday: "true",
        saturday: "true",
        sunday: "true",
      },
    },
  ];

  return (
    <>
      <div className="text-white dark:bg-gray-600 h-screen">
        <div className="text-white dark:bg-gray-500 h-full w-full rounded-lg p-3">
          <div className="text-white dark:bg-gray-600 h-24 w-[100%] p-2 rounded-t-lg flex items-center">
            <div className="dark:bg-gray-700 dark:text-white-400 rounded-lg w-full">
              <div
                class="inline-flex justify-end rounded-md shadow-sm dark:text-gray-400 dark:bg-gray-700 m-2"
                role="group"
              >
                <button
                  type="button"
                  class="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                >
                  Semana
                </button>
                <button
                  type="button"
                  class="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                >
                  Mes
                </button>
                <button
                  type="button"
                  class="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                >
                  Año
                </button>
              </div>
              <div class="inline-flex justify-end rounded-md shadow-sm dark:text-gray-400 dark:bg-gray-700 m-2">
                <button
                  type="button"
                  class="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                  onClick={() => alert("Ingresar nueva reserva")}
                >
                  + Nueva Reserva
                </button>
              </div>
              <button
                type="button"
                class="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
              >
                Anterior
              </button>
              <div class="inline-flex justify-end rounded-md shadow-sm dark:text-gray-400 dark:bg-gray-700 m-3">
                <QuickDatePicker />
              </div>
              <button
                type="button"
                class="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
              >
                Siguiente
              </button>
            </div>
          </div>
          <div className="text-white dark:bg-gray-500 h-screen w-full rounded-lg">
            <div className="h-16 grid grid-cols-8 gap-4 dark:bg-gray-800 h-14 sticky top-0">
              <div className="w-full flex justify-center text-center items-center">
                Horarios
              </div>
              {daysOfWeek.map((item, index) => {
                return (
                  <div
                    className="w-full cursor-pointer flex justify-center text-center items-center "
                    key={index}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
            <div className="grid grid-rows">
              {availability.map((status, timeIndex) => (
                <div
                  className="h-16 border-b w-full grid grid-cols-8 gap-4 dark:bg-gray-600 justify-self-center text-center items-center"
                  key={timeIndex}
                >
                  <div className="col-span-1">{`${status.time}`}</div>
                  {Object.entries(status.occupancy).map(
                    ([day, availability], dayIndex) => (
                      // <Tooltip content="Existen 2 o más espacios disponibles">
                      <div
                        key={dayIndex}
                        className={
                          availability === "true"
                            ? "cursor-pointer bg-green-500 rounded col-span-1 flex justify-center text-center items-center"
                            : "cursor-not-allowed bg-red-500 rounded col-span-1 flex justify-center text-center items-center"
                        }
                        onClick={() => alert("Disponible")}
                        // onMouseEnter={()=> alert('X Disponibles')}
                      >
                        {availability === "true"
                          ? "Espacios disponibles"
                          : "Sin disponibilidad"}
                      </div>
                      // </Tooltip>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendarWeekView;

// return (
//   <>
//     <Modal
//       show={openModal}
//       size="md"
//       onClose={() => setOpenModal(false)}
//       popup
//     >
//       <Modal.Header />
//       <Modal.Body>
//         <div className="text-center">
//           <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
//           <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
//             Are you sure you want to delete this product?
//           </h3>
//           <h3 className="text-xl font-medium text-gray-900 dark:text-white">
//             Sign in to our platform
//           </h3>
//           <div>
//             <div className="mb-2 block">
//               <Label htmlFor="email" value="Your email" />
//             </div>
//             <TextInput id="email" placeholder="name@company.com" required />
//           </div>
//           <h3 className="text-xl font-medium text-gray-900 dark:text-white">
//             Sign in to our platform
//           </h3>
//           <div>
//             <div className="mb-2 block">
//               <Label htmlFor="email" value="Your email" />
//             </div>
//             <TextInput id="email" placeholder="name@company.com" required />
//           </div>
//           <div className="flex justify-center gap-4">
//             <Button color="failure" onClick={() => setOpenModal(false)}>
//               {"Yes, I'm sure"}
//             </Button>
//             <Button color="gray" onClick={() => setOpenModal(false)}>
//               No, cancel
//             </Button>
//           </div>
//         </div>
//       </Modal.Body>
//     </Modal>

//

//       <div className="grid grid-cols-8 gap-4">
//         {daysOfWeek.map((day, index) => (
//           <div key={index} className="text-center">
//             {day}
//           </div>
//         ))}
//         {timeSlots.map((time, timeIndex) => (
//           <React.Fragment key={timeIndex}>
//             <div className="text-center">{time}</div>
//             {availability.map((row, rowIndex) => (
//               <div
//                 key={rowIndex}
//                 className={`text-center ${
//                   row[timeIndex + 1] ? "bg-green-300" : "bg-red-300"
//                 }`}
//               >
//                 {/* Change the background color based on availability */}
//                 {row[timeIndex + 1] ? "Available" : "Busy"}
//               </div>
//             ))}
//           </React.Fragment>
//         ))}
//       </div>
//     </div>
//   </>
// );
