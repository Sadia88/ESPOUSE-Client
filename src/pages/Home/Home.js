import React from 'react';
import Services from '../Service/Services';
import HomeService from './HomeService/HomeService';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <HomeService></HomeService>
            
        </div>
    );
};

export default Home;