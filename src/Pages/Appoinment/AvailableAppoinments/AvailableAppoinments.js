import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppoinmentOptions from '../AppoinmentOptions/AppoinmentOptions';
import AppoinmentModal from '../AppoinmentModal/AppoinmentModal';

const AvailableAppoinments = ({ selectedDate, setSelectedDate }) => {

    const [bookings, setBookings] = useState([])
    const [treatments, setTreatments] = useState([])
    console.log(treatments)
    const date = format(selectedDate, "PP")

    useEffect(() => {
        fetch(`http://localhost:5000/appoinment?date=${date}`)
            .then(res => res.json())
            .then(data => setBookings(data))
        
    }, [date])

    
    return (
        <div className='mt-20'>
            <h2 className='text-xl font-bold'>Avaiable Appoinment At {date}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto justify-items-center'>
                {bookings.map(booking =><AppoinmentOptions key={booking._id} booking={booking} setTreatments={setTreatments}></AppoinmentOptions>)}
            </div>
            <AppoinmentModal treatments={treatments} selectedDate={selectedDate}></AppoinmentModal>
        </div>
    );
};

export default AvailableAppoinments;