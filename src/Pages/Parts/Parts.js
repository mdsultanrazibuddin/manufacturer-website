import React, { useEffect, useState } from 'react';
import Part from '../Parts/Part';


const Parts = () => {
    const [parts, setParts] = useState([]);
    
    useEffect( () => {
        fetch('http://localhost:5000/part')
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
                   
                   ></Part>)
               }
           </div>
          
        </div>
    );

}
export default Parts;