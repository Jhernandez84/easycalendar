import React from 'react'
import CalendarMonthView from './CalendarMonthView';

const CalendarYearView = ({ year }) => {
    return (
        <>
            <div className='grid grid-rows-3 p-6'>
                <div className='grid grid-cols-4 p-4'>
                    <CalendarMonthView month={0} year={2023} />
                    <CalendarMonthView month={1} year={2023} />
                    <CalendarMonthView month={2} year={2023} />
                    <CalendarMonthView month={3} year={2023} />
                </div>
                <div className='grid grid-cols-4 p-4'>
                    <CalendarMonthView month={4} year={2023} />
                    <CalendarMonthView month={5} year={2023} />
                    <CalendarMonthView month={6} year={2023} />
                    <CalendarMonthView month={7} year={2023} />
                </div>
                <div className='grid grid-cols-4 p-4'>
                    <CalendarMonthView month={8} year={2023} />
                    <CalendarMonthView month={9} year={2023} />
                    <CalendarMonthView month={10} year={2023} />
                    <CalendarMonthView month={11} year={2023} />
                </div>
            </div>
        </>
    )
}

export default CalendarYearView;