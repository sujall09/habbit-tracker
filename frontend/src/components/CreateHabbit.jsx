import React, { useState, useContext } from 'react'
import DayCheckBox from './DayCheckBox'
import { habbitsContext } from './context/habbit'

function CreateHabbit() {
    const { setHabbit } = useContext(habbitsContext);

    const [formData, setFormData] = useState({
        "name": "",
        "icon": "#000000",
        "start": "",
        "end": "",
        "frequency": { "daily": false, custom: [] },
        "reminder": "",
        "note": ""
    })

    const handleCustomDayToggle = (day) => {
        setFormData((prev) => ({
            ...prev,
            frequency: {
                ...prev.frequency,
                custom: prev.frequency.custom.includes(day)
                    ? prev.frequency.custom.filter((d) => d !== day)
                    : [...prev.frequency.custom, day],
            }
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setHabbit((prev) => [...prev, formData]);
        setFormData({
            "name": "",
            "icon": "#000000",
            "start": "",
            "end": "",
            "frequency": { "daily": false, custom: [] },
            "reminder": "",
            "note": ""
        });
    }

    return (
        <div className='bg-white text- white border border-black h-[50vh] w-1/4 flex flex-col justify-center'>
            <h1 className='text-center font-bold'>Create a Habbit</h1>
            <form onSubmit={handleSubmit} className='m-2'>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" required="true" name="name" id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className='bg-gray-300 p-2 rounded text-black m-2' />
                </div>
                <div>
                    <label htmlFor="icon">Icon: </label>
                    <input type='color' required="true" className='' value={formData.icon} onChange={(e) => setFormData({ ...formData, icon: e.target.value })} />
                </div>
                <div>
                    <label htmlFor="start">Start: </label>
                    <input type='date' required="true" className='' value={formData.start} onChange={(e) => setFormData({ ...formData, start: e.target.value })} />
                </div>
                <div>
                    <label htmlFor="end">End: </label>
                    <input type='date' required="true" className='' value={formData.end} onChange={(e) => setFormData({ ...formData, end: e.target.value })} />
                </div>
                <div>
                    <label htmlFor="frequency">Frequency: </label>
                    <div>
                        <label htmlFor="daily">Daily</label>
                        <input type="checkbox" name="daily" id="daily" checked={formData.frequency.daily} onChange={(e) =>
                            setFormData({
                                ...formData,
                                frequency: {
                                    ...formData.frequency,
                                    daily: e.target.checked,
                                },
                            })
                        } />
                    </div>
                    <div className='flex'>
                        <label htmlFor="custom">Custom</label>
                        {(["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                            <DayCheckBox
                                key={day}
                                day={day}
                                isSelected={formData.frequency.custom.includes(day)}
                                onToggle={handleCustomDayToggle}
                            />
                        )))}
                    </div>
                </div>
                <div>
                    <label htmlFor="reminder">Reminder</label>
                    <input type="time" name="reminder" id="reminder" value={formData.reminder} onChange={(e) => setFormData({ ...formData, reminder: e.target.value })} />
                </div>
                <div>
                    <label htmlFor="note">Note</label>
                    <textarea name="note" id="note" className='border-black border-2 p-2 mx-2' placeholder='type here...' maxLength={100} value={formData.note} onChange={(e) => setFormData({ ...formData, note: e.target.value })}></textarea>
                </div>
                <button type="submit" className='border-black border-2 w-20 bg-cyan-300 rounded-xl'>Submit</button>
            </form>
        </div>
    )
}

export default CreateHabbit
