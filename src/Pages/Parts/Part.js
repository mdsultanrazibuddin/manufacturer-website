import React from 'react';
import { Link } from 'react-router-dom';
import MainButton from '../Shared/MainButton';

const Part = ({part}) => {
    const{name,img,description,orderQuantity,availableQuantity,price} = part
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl mt-5 ">
        <div class="card-body">
            <figure className='w-full h-52'><img src={img} alt="Album"/></figure>
          <h2 class="text-2xl font-bold text-secondary text-center mt-10">{name}</h2>
          <p class=""> <span className=' font-bold text-secondary'>Description:</span> {description}</p>
          <p class=""><span className=' font-bold text-secondary'>Order Quantity:</span> {orderQuantity}</p>
          <p class=""><span className=' font-bold text-secondary'>Available Quantity:</span> {availableQuantity}</p>
          <p class=""><span className=' font-bold text-secondary'>Price:</span> ${price}</p>
          
          <div className='text-center my-5'>
             <MainButton>
                  <Link to ="/ButtonModal">Buy Now</Link>
               </MainButton>
          </div>
          
        </div>
        
      </div>
    );
};

export default Part;