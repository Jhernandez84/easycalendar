import React from "react";

import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

import { useState } from "react";

const CalendarWeekView = () => {
  const [openModal, setOpenModal] = useState(false);

  const ShowModal = () => setOpenModal(true);

  return (
    <>
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this product?
            </h3>
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Sign in to our platform
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput id="email" placeholder="name@company.com" required />
            </div>
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Sign in to our platform
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput id="email" placeholder="name@company.com" required />
            </div>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={() => setOpenModal(false)}>
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <div className="dark:bg-gray-700 dark:text-white-400 rounded-lg">
        <div
          class="inline-flex justify-end rounded-md shadow-sm dark:text-gray-400 dark:bg-gray-700 m-2"
          role="group"
        >
          <button
            type="button"
            class="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          >
            Mes
          </button>
          <button
            type="button"
            class="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          >
            Semana
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
                className="border border-gray-800 h-full flex flex-col"
              >
                <div className="border-b border-gray-300 h-[100] dark:bg-gray-800 flex flex-col h-24 justify-center ">
                  <div className="font-bold text-center dark:text-white items-center justify-center pt-3">
                    {day}
                  </div>
                  <div className="flex-grow flex items-center justify-center text-black dark:text-white text-center">
                    {index + 1}
                  </div>
                </div>
                <div className="h-full flex-grow flex items-center justify-center text-black">
                  <div className="w-full text-center">
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
                      <div
                        className="h-14 cursor-pointer bg-transparent hover:bg-gray-500 text-white hover:text-white hover:rounded-lg w-full flex items-center justify-center"
                        key={index}
                        onClick={ShowModal}
                      >
                        {time}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default CalendarWeekView;
