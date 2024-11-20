import React, { useState } from 'react'

function DayCheckBox({ day }) {
    const [selected, setSelected] = useState(false);

    const handleClick = () => {
        setSelected(!selected);
    }
    return (
        <div
            className={`w-5 h-5 mx-1 border-black border-2 rounded-full text-xs cursor-pointer flex justify-center items-center hover:bg-gray-400 hover:border-white hover:transition-transform ${selected ? 'bg-gray-400' : 'bg-white'}`}
            onClick={handleClick}
        >
            {day}
        </div>
    )
}

export default DayCheckBox
