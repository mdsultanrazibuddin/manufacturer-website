import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../Hooks/useAdmin';

const DashBoard = () => {
  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user)
    return (
        <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content ">
            <h2 className='text-3xl font-bold text-primary'>Welcome to Your Dashboard</h2>
         <Outlet></Outlet>
         
        
        </div> 
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label> 
          <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
           
            <li><Link to='/dashboard'>My Products</Link></li>
            
            <li><Link to='/dashboard/profile'>My profile</Link></li>
            <li><Link to='/dashboard/review'>My Reviews</Link></li>
            
            
            {
              admin && <>
               <li><Link to='/dashboard/allProduct'>Manage all Product</Link></li>
               <li><Link to='/dashboard/admin'>Make Admin</Link></li>
               <li><Link to='/dashboard/manage'>Manage Product</Link></li>
               <li><Link to='/dashboard/add'>Add Product</Link></li>
               
               
               
              </>
            }
               
              
          </ul>
        
        </div>
      </div>
    );
};

export default DashBoard;