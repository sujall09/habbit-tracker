import React from 'react'

function DayCheckBox({ day, isSelected, onToggle }) {
    return (
        <div
            className={`w-8 h-6 mx-1 border-black border-2 rounded-full text-xs cursor-pointer flex justify-center items-center ${isSelected ? 'bg-gray-400' : 'bg-white'
                }`}
            onClick={() => onToggle(day)}
        >
            {day}
        </div>
    );
}

export default DayCheckBox
