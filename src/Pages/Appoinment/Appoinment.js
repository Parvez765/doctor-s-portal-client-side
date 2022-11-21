import React, { useState } from 'react';
import chair from "../../assets/images/chair.png"
import { DayPicker } from 'react-day-picker';

import AvailableAppoinments from './AvailableAppoinments/AvailableAppoinments';

const Appoinment = () => {
    const [selectetedDate, setSelectedDate] = useState(new Date())
    return (
        <div>
            <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt="" className="rounded-lg shadow-2xl w-full lg:w-1/2 ml-20" />
            <div>
                <DayPicker
                    mode="single"
                    selected={selectetedDate}
                    onSelect={setSelectedDate}
                ></DayPicker>
            </div>
                    
            </div>
            </div>
           <AvailableAppoinments selectedDate={selectetedDate}></AvailableAppoinments>
        </div>
    );
};

export default Appoinment;