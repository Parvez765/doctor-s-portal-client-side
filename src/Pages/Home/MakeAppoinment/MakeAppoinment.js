import React from 'react';
import doctor from "../../../assets/images/doctor-small.png"

const MakeAppoinment = () => {
    return (
        <div className='mt-32 bg-slate-500 p-10'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Make An Appoinment Today</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web pag</p>
                        <button className='btn  btn-primary'>Book A Doctor</button>
                    </div>
                    <div className="card flex-shrink-0 hidden lg:block w-full lg:w-[550px] shadow-2xl bg-base-100 mr-20 mt-[-60px] sm:mt-0">
                        <img src={doctor} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAppoinment;