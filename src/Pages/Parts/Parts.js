import React, { useEffect, useState } from 'react';
import Part from '../Parts/Part';
import ButtonModal from './ButtonModal';






const Parts = () => {
    const [parts, setParts] = useState([]);
    const [product, setProduct] = useState()
    
    
    
    useEffect( () => {
        fetch('https://mysterious-hamlet-70060.herokuapp.com/part')
        .then(res => res.json())
        .then(data => setParts(data))

    })
    return (
        <div>
          

           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20'>
               {
                   parts.map(part => <Part
                   key={part._id}
                   part ={part}
                   setProduct ={setProduct}
                   
                   ></Part>)
               }
           </div>
           {
               product && <ButtonModal
               
               product={product}
               setProduct={setProduct}
               ></ButtonModal>
           }
          
        </div>
    );

}
export default Parts;