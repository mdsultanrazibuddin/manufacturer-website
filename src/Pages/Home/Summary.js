import React from 'react';
import { BsFlag} from 'react-icons/bs';
import {VscFeedback} from 'react-icons/vsc';
import { BsFillPeopleFill} from 'react-icons/bs';
import { AiOutlineFundProjectionScreen} from 'react-icons/ai';


const Summary = () => {
    return (
        <div className='text-center '>
            <h1 className='text-5xl font-bold text-secondary'>Millions Business Trust Us</h1>
            <p className='text-2xl font-bold my-3'>TRY TO UNDERSTAND USER EXPACTATION</p>

            <div class="stats stats-vertical lg:stats-horizontal shadow text-2xl text-center my-5 ">
  
      <div class="stat">
          <div className='p-5 text-primary'>
            <BsFlag/>
          </div>
        
          <div class="stat-value">85</div>
          <div class="stat-title text-base text-primary">Countries</div>
        
        
      </div>
  
    <div class="stat">
        <div className='p-5 text-primary'>
        <AiOutlineFundProjectionScreen/>
        </div>
    
        <div class="stat-value">999+</div>
        <div class="stat-title text-base text-primary">Complete Projects</div>
        
    
    </div>
  
    <div class="stat">
      <div className='p-5 text-primary'>
      <BsFillPeopleFill/>
      </div>
        
        <div class="stat-value">10k+</div>
        <div class="stat-title text-base text-primary">Happy Clients</div>
      
      
    </div>
      <div class="stat">
        <div className='p-5 text-primary'>
        <VscFeedback/>
        </div>
          
          <div class="stat-value">5k+</div>
          <div class="stat-title text-base text-primary">Feedbacks</div>
        
        
      </div>
  
</div>
        </div>
    );
};

export default Summary;