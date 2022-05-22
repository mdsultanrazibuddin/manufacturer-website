import React from 'react';

const Part = ({part}) => {
    const{name,img,description,orderQuantity,availableQuantity,price} = part
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl text-center">
        <div class="card-body">
        <figure className='w-full h-52'><img src={img} alt="Album"/></figure>
          <h2 class="text-xl font-bold text-secondary">{name}</h2>
          <p class="">Description: {description}</p>
          <p class="">Order Quantity: {orderQuantity}</p>
          <p class="">Available Quantity: {availableQuantity}</p>
          <p class="">Price: {price}</p>
          
         
          <div class="card-actions justify-center">
          
            
          </div>
        </div>
      </div>
    );
};

export default Part;