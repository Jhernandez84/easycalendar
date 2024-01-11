import React from 'react'

const CalendarDayView = () => {

    const List = [
        {
            Time: '09:00',
            User: 'Daniela Navarro Quevedo'
        },
        {
            Time: '10:00',
            User: 'Matías Hernández Navarro'
        },
        {
            Time: '11:00',
            User: 'Jonathan Hernández Miranda'
        },
        {
            Time: '12:00',
            User: 'Loreto Miranda'
        },
        {
            Time: '13:00',
            User: 'José Hernández Flores'
        },
        {
            Time: '10:00',
            User: 'Matías Hernández Navarro'
        },
        {
            Time: '11:00',
            User: 'Jonathan Hernández Miranda'
        },
        {
            Time: '12:00',
            User: 'Loreto Miranda'
        },
        {
            Time: '13:00',
            User: 'José Hernández Flores'
        },
        {
            Time: '09:00',
            User: 'Daniela Navarro Quevedo'
        },
        {
            Time: '10:00',
            User: 'Matías Hernández Navarro'
        },
        {
            Time: '11:00',
            User: 'Jonathan Hernández Miranda'
        },
        {
            Time: '12:00',
            User: 'Loreto Miranda'
        },
        {
            Time: '13:00',
            User: 'José Hernández Flores'
        },
        {
            Time: '10:00',
            User: 'Matías Hernández Navarro'
        },
        {
            Time: '11:00',
            User: 'Jonathan Hernández Miranda'
        },
        {
            Time: '12:00',
            User: 'Loreto Miranda'
        },
        {
            Time: '13:00',
            User: 'José Hernández Flores'
        },
    ]

    return (
        <>
            <div className="dark:bg-gray-700 rounded-md shadow-xl w-[700px] h-[312px]">
                <div className="grid grid-rows  flex justify-center content-center p-2">
                    <div className="text-center w-[100] rounded-t-md">
                        {/* <div className="dark:hover:bg-teal-600 dark:hover:cursor-pointer text-center p-1 dark:bg-gray-800 rounded-t-md">
                            Hoy
                        </div> */}
                        <div className="justify-center content-center h-[290px] overflow-auto rounded-t-md">
                            <table>
                                <thead className='sticky top-0 dark:bg-gray-600 h-[40px] text-center text-base dark:bg-gray-800'>
                                    <tr>
                                        <td className='w-[150px]'>Horario</td>
                                        <td className='w-[500px]'>Nombre de la reserva</td>
                                        <td className='w-[700px]'>Opciones</td>
                                    </tr>
                                </thead>
                                <tbody className="overflow-auto">
                                    {List.map((e) => (
                                        <tr key={e.id} className="dark:hover:bg-teal-600 dark:hover:cursor-pointer text-base text-center dark:transition ease-in-out animate-slide-{right}">
                                            <td className="dark:hover:cursor-pointer text-center p-2 rounded-l">
                                                {e.Time}
                                            </td>
                                            <td className="dark:hover:cursor-pointer text-left p-2" onClick={() => alert('Click Cliente')}>
                                                {e.User}
                                            </td>
                                            <td className="dark:hover:cursor-pointer text-center rounded-r">
                                                <div className="grid grid-cols-3 text-center p-2 rounded-r">
                                                    <h1 className="dark:hover:cursor-pointer text-center dark:hover:bg-blue-800 rounded" onClick={() => alert('Recordatorio')}>
                                                        ✉️ Recordar
                                                    </h1>
                                                    <h1 className="dark:hover:cursor-pointer text-center dark:hover:bg-yellow-500 rounded" onClick={() => alert('Editar')}>
                                                        📝 Editar
                                                    </h1>
                                                    <h1 className="dark:hover:cursor-pointer text-center dark:hover:bg-red-800 rounded" onClick={() => alert('Cancelar')}>
                                                        ❌ Cancelar
                                                    </h1>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default CalendarDayView; 
