import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Parts from '../Parts/Parts';
import Banner from './Banner';
import Contact from './Contact';
import Summary from './Summary';
import Footer from './Footer';


const Home = () => {
    return (
        <div>
            <Banner/>
            <h3 className='text-5xl font-bold text-secondary text-center'>Top Parts</h3>  
            <Parts/>
            <AboutUs/>
            
            <Summary/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;