import React, { useState } from 'react'
import DayCheckBox from './DayCheckBox'

function CreateHabbit() {

    return (
        <div className='bg-white text- white border border-black h-[50vh] w-1/3'>
            <h1 className='text-center font-bold'>Create a Habbit</h1>
            <form action="" className='m-2'>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name" placeholder="" className='bg-gray-300 p-2 rounded text-black m-2' />
                </div>
                <div>
                    <label htmlFor="icon">Icon: </label>
                    <input type='color' className='' />
                </div>
                <div>
                    <label htmlFor="start">Start: </label>
                    <input type='date' className='' />
                </div>
                <div>
                    <label htmlFor="end">End: </label>
                    <input type='date' className='' />
                </div>
                <div>
                    <label htmlFor="frequency">Frequency: </label>
                    <div>
                        <label htmlFor="daily">Daily</label>
                        <input type="checkbox" name="daily" id="daily" />
                    </div>
                    <div className='flex'>
                        <label htmlFor="custom">Custom</label>
                        <DayCheckBox day="S" />
                        <DayCheckBox day="M" />
                        <DayCheckBox day="T" />
                        <DayCheckBox day="W" />
                        <DayCheckBox day="T" />
                        <DayCheckBox day="F" />
                        <DayCheckBox day="S" />
                    </div>
                </div>
                <div>
                    <label htmlFor="reminder">Reminder</label>
                    <input type="time" name="reminder" id="reminder" />
                </div>
                <div>
                    <label htmlFor="note">Note</label>
                    {/* <input type="text" name="note" id="note" className='border-black border-2 p-2 w-48' placeholder='type here...' /> */}
                    <textarea name="note" id="note" className='border-black border-2 p-2 mx-2' placeholder='type here...' maxLength={100}></textarea>
                </div>
                <button type="submit" className='border-black border-2 w-20 bg-cyan-300 rounded-xl'>Submit</button>
            </form>
        </div>
    )
}

export default CreateHabbit
