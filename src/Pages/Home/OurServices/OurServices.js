import React from 'react';
import fluoride from "../../../assets/images/fluoride.png"
import cavity from "../../../assets/images/cavity.png"
import teethCleaning from "../../../assets/images/whitening.png"
const treatements = [
    {
        "name": "Fluoride Treatment",
        "img": fluoride,
        
    },
    {
        "name": "Cavity Filling",
        "img": cavity,
        
    },
    {
        "name": "Teeth Whitening",
        "img": teethCleaning,
        
    }
]


const OurServices = () => {
    return (
        <div className='mt-32 mb-10'>
            <h2 className='text-xl text-primary font-bold'>Our Serivces</h2>
            <h2 className='text-3xl font-bold'>Services We Provide</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto mt-12 gap-4 justify-items-center'>
                {
                    treatements.map(treatment => <>
                        <div className="card w-96 bg-zinc-900 shadow-xl">
                            <div className="card-body">
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <img src={treatment.img} alt="" />
                                    </div>
                                    <div>
                                        <h2 className="text-white text-xl font-bold">{treatment.name}</h2>
                                       
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

export default OurServices;