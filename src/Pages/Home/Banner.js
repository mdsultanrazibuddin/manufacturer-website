import React from 'react';
import image from '../../Images/all parts pic.jpg'
import MainButton from '../Shared/MainButton';

const Banner = () => {
    return (
        <div>
            <div class="hero min-h-screen">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src= {image} 
    class="max-w-sm rounded-lg shadow-2xl pic" alt='' />
    <div className='text-area'>
      <h1 class="text-4xl font-bold text-secondary "> All Computer Parts Are Available Here</h1>
      <p class="py-6">Here are all the basic parts you need to make a PC, workstation or computer. Here you make SSD, HDD, graphics card, motherboard, cooling fan, processor.</p>
      <MainButton>Get Started</MainButton>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;