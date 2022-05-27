
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

import auth from '../../../firebase.init';

const MyProducts = () => {
    const [products, setProducts] = useState([])
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    
    useEffect(()=>{
        if(user){
            fetch(`http://localhost:5000/booking?client=${user.email}`, {
                method: 'GET',
                headers:{
                    'authorization':`Bearer ${localStorage.getItem('accessToken')}`
                }
            })
        .then(res =>{
         
          if (res.status === 401 || res.status === 403) {
              signOut(auth);
              localStorage.removeItem('accessToken');
              navigate('/');
          }
          return res.json()
      })
      .then(data => {

        setProducts(data);
    });
        }
    },[user])
   
    return (
        <div>
            <h2 className="text-2xl my-5 text-secondary font-bold">My Products: {products.length}</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">
    
    <thead>
      <tr>
        <th>Serial</th>
        <th>Name</th>
        <th>Product</th>
        <th>Email Address</th>
      </tr>
    </thead>
    <tbody>

        {
            products.map((p, index) =>
                <tr>
        <th>{index + 1}</th>
        <td>{p.clientName}</td>
        <td>{p.product}</td>
        <td>{p.client}</td>
      </tr> )
        }
      
      
      
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyProducts;