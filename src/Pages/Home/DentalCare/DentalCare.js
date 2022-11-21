import React from 'react';
import dental from "../../../assets/images/treatment.png"

const DentalCare = () => {
    return (
        <div className='mt-32'>
           <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Exceptional Dental Care,<br/> on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className='btn btn-primary'>Get Appoinment</button>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm sm:block ms-[100px] me-auto justify-center shadow-2xl bg-base-10 mr-20">
                        <img src={dental} alt="" />
                </div>
            </div>
            </div>
        </div>
    );
};

export default DentalCare;