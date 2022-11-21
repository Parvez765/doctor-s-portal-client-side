import React from 'react';
import chair from "../../../assets/images/chair.png"

const Header = () => {
    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="rounded-lg shadow-2xl w-full lg:w-1/2" alt=""/>
                <div>
                    <h1 className="text-5xl font-bold text-center lg:text-left ">Your New Smile<br/>Starts Here</h1>
                    <p className="py-6 text-center lg:text-left">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary  lg:block lg:items-start">Book An Appoinment</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Header;