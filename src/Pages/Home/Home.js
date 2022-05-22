import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Parts from '../Parts/Parts';
import Banner from './Banner';
import Summary from './Summary';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Parts/>
            <Summary/>
            <AboutUs/>
        </div>
    );
};

export default Home;