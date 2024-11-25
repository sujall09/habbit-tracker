import React, { useState, useContext } from 'react'
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { MdOutlineRefresh } from "react-icons/md";
import { habbitsContext } from './context/habbit';
const today = new Date();

function Daily() {
    const [date, setDate] = useState(today.getDate());
    const [day, setDay] = useState(today.getDay());
    const [month, setMonth] = useState(today.getMonth() + 1);
    const [year, setYear] = useState(today.getFullYear());
    const currentDate = date + "/" + month;
    let daysInMonth = new Date(year, month, 0).getDate();

    const nextDays = (increment) => {
        if (date === daysInMonth) {
            if (month + 1 > 12) {
                setYear(year + 1);
                setMonth(1);
            } else {
                setMonth(month + increment);
            }
            setDate(1);
        } else {
            setDate(date + increment);
        }

        day + increment > 6 ? setDay(0) : setDay(day + increment);

    }

    const prevDays = (decrement) => {
        if (date === 1) {
            if (month - 1 === 0) {
                setYear(year - 1);
                setMonth(12);
            } else {
                setMonth(month - decrement);
            }
            setDate(new Date(year, month, 0).getDate());
        } else {
            setDate(date - decrement);
        }

        day - decrement < 0 ? setDay(6) : setDay(day - decrement);
    }

    const refreshDate = () => {
        setDate(today.getDate());
        setDay(today.getDay())
        setMonth(today.getMonth() + 1)
        setYear(today.getFullYear())
    }
    const currentDay = {
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday",
    }

    const { habbit } = useContext(habbitsContext);

    return (
        <div className='bg-white text- white border border-black h-[50vh] w-1/4 flex flex-col justify-center'>
            <h1 className='text-center font-bold m-2'>Daily</h1>
            <div className='flex justify-between p-2'>
                <FaAngleLeft className='cursor-pointer' onClick={() => prevDays(1)} />
                <div>
                    {currentDay[day]}
                    {currentDate}
                    {year}
                </div>
                <FaAngleRight className='cursor-pointer' onClick={() => nextDays(1)} />
                <MdOutlineRefresh className='cursor-pointer' onClick={refreshDate} />
            </div>
            <div>
                <h2>Daily plans</h2>
                <ul>
                    {habbit.map((h, index) => (
                        <li key={index}>{h.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Daily
