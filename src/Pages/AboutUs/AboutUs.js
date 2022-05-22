import React from 'react';
import './AboutUs.css'

import picture from '../../Images/istockphoto-1144570833-612x612.jpg'
import MainButton from '../Shared/MainButton';

const AboutUs = () => {
    return (
        <section className='body'>
            <div>
                 <img className='picture' src= {picture} alt="" srcset="" />
            </div>
            <div className='text-format'>
                <h5 className='ml-5 text-primary'>A Few Words About Us</h5>
                <h2 className='text-4xl font-bold text-secondary'> A Book Store for Good People</h2>
                <p>We are strong community 0f 85 Countries, 999+ complete project, 10k+ customers, 5k+ Feedbacks and 200+ sellers who inspire to be good ,good and goodness.</p>
                <p></p>
                <div className='mt-3'>
               <MainButton>Read More</MainButton>
            </div>
                
            </div>
            
        </section>
    );
};

export default AboutUs;