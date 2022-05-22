import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from './Banner';
import Summary from './Summary';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Summary/>
            <AboutUs/>
        </div>
    );
};

export default Home;