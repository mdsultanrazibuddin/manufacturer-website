import React, { useEffect, useState } from 'react';
import Part from '../Parts/Part';


const Parts = () => {
    const [parts, setParts] = useState([]);
    
    useEffect( () => {
        fetch('Parts.json')
        .then(res => res.json())
        .then(data => setParts(data))

    })
    return (
        <div>
           <h3 className='text-5xl text-secondary text-center mt-10'>Top Parts</h3>  

           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20'>
               {
                   parts.map(part => <Part
                   key={part._id}
                   part ={part}
                   
                   ></Part>)
               }
           </div>
          
        </div>
    );

}
export default Parts;