import React from 'react';
import quotes from "../../../assets/icons/quote.svg"
import people1 from "../../../assets/images/people1.png"
import people2 from "../../../assets/images/people2.png"
import people3 from "../../../assets/images/people3.png"

const reviews = [
    {
        "name": "Winson Herry",
        "img": people1,
        "description" : "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
    },
    {
        "name": "Winson Herry",
        "img": people2,
        "description" : "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
    },
    {
        "name": "Winson Herry",
        "img": people3,
        "description" : "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
    }
]

const Testemonial = () => {
    return (
        <div className='mt-24 container mx-auto'>
            <div className='flex items-center justify-between'>
                <div>
                    <h2 className='text-5xl font-bold'>What Our Patient Says</h2>
                </div>
                <div>
                    <img src={quotes} alt=""  className='w-[350px]'/>
                </div>
            </div>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
                {
                    reviews.map(review => <>
                         <div className="card w-96 bg-yellow-800 shadow-xl">
                            <div className="card-body">
                                <div className='flex items-center'>
                                    <div className='mr-12'>
                                        <img src={review.img} alt="" className='w-[440px]'/>
                                    </div>
                                    <div>
                                        <h2 className="text-white text-xl font-bold">{review.name}</h2>
                                        <p>{review.description}</p>
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

export default Testemonial;