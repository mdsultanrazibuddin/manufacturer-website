
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from './Loading';



const Navbar = () => {
      const [user, loading] = useAuthState(auth);

      if(loading){
        return <Loading/>
    }

      const logout = () => {
        signOut(auth)
      }

    const menuItems = <>
         <li><Link to ='/'>Home</Link></li>
         <li><Link to ='/parts'>Parts</Link></li>
         <li><Link to ='/blogs'>Blogs</Link></li>
         <li><Link to ='/Portfolio'>My Portfolio</Link></li>
         <li>{ user ? <button onClick={logout} class="btn btn-ghost">Logout</button> : <Link to ='/login'>Login</Link>}</li>
    </>
    return (
        <div>
            <div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuItems }
      </ul>
    </div>
    <h1 class=" normal-case text-2xl font-bold">Daisy UI</h1>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
      {menuItems }
    </ul>
  </div>
 
</div>
        </div>
    );
};

export default Navbar;