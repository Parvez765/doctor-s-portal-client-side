import React from 'react';
import DentalCare from '../DentalCare/DentalCare';
import Header from '../Header/Header';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import OurServices from '../OurServices/OurServices';
import ServiceCard from '../ServiceCard/ServiceCard';
import Testemonial from '../Testemonial/Testemonial';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <ServiceCard></ServiceCard>
            <OurServices></OurServices>
            <DentalCare></DentalCare>
            <MakeAppoinment></MakeAppoinment>
            <Testemonial></Testemonial>
        </div>
    );
};

export default Home;