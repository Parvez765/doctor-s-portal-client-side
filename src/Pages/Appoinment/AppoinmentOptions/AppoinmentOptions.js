import React from 'react';

const AppoinmentOptions = ({ booking, setTreatments }) => {
    const { name, _id, slots } = booking
    // console.log(slots)
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="font-bold text-center text-xl">{name}</h2>
                   <p>{slots?.length > 0 ? slots[0] : "No Slots Avaiable Today"}</p>
                    <p> {slots?.length} {slots.length > 1 ? "Slots" : "Slot"} Avaiable</p>
                    <div className="card-actions justify-center">
                    <label htmlFor="booking-modal" onClick={()=> setTreatments(booking)} className="btn">Book Now</label>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppoinmentOptions;