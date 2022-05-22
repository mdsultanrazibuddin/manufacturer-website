import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Parts from '../Parts/Parts';
import Banner from './Banner';
import Summary from './Summary';

const Home = () => {
    return (
        <div>
            <Banner/>
            <h3 className='text-5xl font-bold text-secondary text-center'>Top Parts</h3>  
            <Parts/>
            <Summary/>
            <AboutUs/>
        </div>
    );
};

export default Home;