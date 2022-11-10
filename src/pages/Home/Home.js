import React from 'react';
import Services from '../Service/Services';
import AboutMe from './AboutMe/AboutMe';
import HomeService from './HomeService/HomeService';
import Slider from './Slider/Slider';
import WeddServices from './weddingServices/WeddServices';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <HomeService></HomeService>
            <AboutMe></AboutMe>
            <WeddServices></WeddServices>
            
        </div>
    );
};

export default Home;