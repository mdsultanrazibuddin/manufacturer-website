import React from 'react';
import './AboutUs.css'

import picture from '../../Images/istockphoto-1144570833-612x612.jpg'

const AboutUs = () => {
    return (
        <section className='body'>
            <div>
                 <img className='picture' src= {picture} alt="" srcset="" />
            </div>
            <div className='text-format'>
                <h5 className='text-center'>A Few Words About Us</h5>
                <h2> A Book Store for Good People</h2>
                <p>We are strong community 0f 10k customers and 200+ sellers who inspire to be good ,good and goodness. our service is best.</p>
                <p></p>
            </div>
        </section>
    );
};

export default AboutUs;