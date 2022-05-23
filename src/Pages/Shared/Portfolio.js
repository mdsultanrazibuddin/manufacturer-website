import React from 'react';
import photo from '../../Images/33522.jpg'
import MainButton from './MainButton';

const Portfolio = () => {
    return (
        <div>
            <h1 className='text-center text-5xl font-bold my-20 text-secondary'>My Portfolio</h1>
            <div class="card lg:card-side bg-base-100 shadow-xl h-auto mb-20">
  <figure>
      
       <img src={photo} alt="" srcset="" />   
  </figure>
  <div class="card-body">
    <h2 class="card-title text-3xl font-bold text-primary">Sultan Razib Uddin</h2>
    <p> <span className='text-1xl font-bold text-secondary'>Email Address:</span> 
    <br /> <span className='text-primary'>mdsultanrazibuddin@gmail.com</span>
    </p>
    <p> <span className='text-1xl font-bold text-secondary'>Educational Qualification:</span> <br />
     <span className='text-primary'>B.A Honur's in English (3rd Year)</span>
     </p>
    <p><span className='text-1xl font-bold text-secondary'>Skill:</span> <br />
     <span className='text-primary'>
         <div className='flex mx-5'>
            <div>
                <li>HTML</li>
                <li>CSS</li>
                
                <li>Bootstap</li>
                <li>Tailwind</li>
                <li>Material UI</li>
                <li>Daisy UI</li>
            </div>
            
            <div className='ml-5'>
                <li>JavaScript</li>
                <li>React</li>
                <li>Fairbase</li>
                <li>Mongodb</li>
                <li>Express JS</li>
                <li>Node JS</li>
            </div>
         </div>

     </span>
     </p>
     <h1 className='text-3xl font-bold text-secondary'>My Project</h1>
     <p><span  className='text-1xl font-bold text-primary'>live website links :</span> <br />
     
         
        <div className='grid grid-cols-1 lg:grid-cols-3 '>
            
            <div className='my-5'>
                <MainButton  >
                    <a href=" https://assignment-number-8.netlify.app/">Boi Ghor</a> 
                </MainButton>
            </div>
            <div className='my-5'>
                <MainButton>
                    <a href="https://warehouse-management-web-c8495.web.app/">Book Store</a> 
                </MainButton>
            </div>
            <div className='my-5'>
                <MainButton>
                    <a href="https://independent-provider-6842f.web.app/">Sultan's Photography</a> 
                </MainButton>
            </div>
        </div>
        
     
     </p>
    
  </div>
</div>
        </div>
    );
};

export default Portfolio;