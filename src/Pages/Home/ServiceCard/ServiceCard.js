import React from 'react';
import phone from "../../../assets/icons/phone.svg"
import location from "../../../assets/icons/marker.svg"
import clock from "../../../assets/icons/clock.svg"


const services = [
    {
        "name": "Opening Hour",
        "icon": clock,
        "details" : "We are Open From 9am to 9pm"
    },
    {
        "name": "Visit Our Location",
        "icon": location,
        "details" : "Brooklyn, NY 10036, United State"
    },
    {
        "name": "Contact Us Now",
        "icon": phone,
        "details" : "+000 123 456789"
    },
]

const ServiceCard = () => {
    return (
        <div className='mt-32'>
           
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-4 justify-items-center'>
                {
                    services?.map(service => <>
                        <div className="card w-96 bg-yellow-800 shadow-xl">
                            <div className="card-body">
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <img src={service.icon} alt="" />
                                    </div>
                                    <div>
                                        <h2 className="text-white text-xl font-bold">{service.name}</h2>
                                        <p>{service.details}</p>
                                    </div>
                               </div>
                                
                            </div>
                        </div>
                    </>)
                }
           </div>
        </div>
    );
};

export default ServiceCard;