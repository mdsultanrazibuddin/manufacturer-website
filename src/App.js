
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import Parts from './Pages/Parts/Parts';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import ButtonModal from './Pages/Parts/ButtonModal';
import NotFound from './Pages/Shared/NotFound';
import Portfolio from './Pages/Shared/Portfolio';
import Blogs from './Pages/Shared/Blogs';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashBoard from './Pages/About/DashBoard/DashBoard';
import MyProducts from './Pages/About/DashBoard/MyProducts';
import MyReviews from './Pages/About/DashBoard/MyReviews';

import MyProfile from './Pages/About/DashBoard/MyProfile';
import AddProduct from './Pages/About/DashBoard/AddProduct';
import MakeAdmin from './Pages/About/DashBoard/MakeAdmin';
import ManageAllProduct from './Pages/About/DashBoard/ManageAllProduct';
import ManageProduct from './Pages/About/DashBoard/ManageProduct';

function App() {
  return (
    <div className='px-12' >
    <Navbar/>
     
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="blogs" element={<Blogs/>}/>
      <Route path="parts" element={
          <RequireAuth>
              <Parts/>
          </RequireAuth>
      }/>
      <Route path="buttonModal" element={
          <RequireAuth>
              <ButtonModal/>
          </RequireAuth>
      }/>
      <Route path="dashBoard" element={
          <RequireAuth>
              <DashBoard/>
          </RequireAuth>
      }>
        <Route index element={<MyProducts></MyProducts>}></Route>
        <Route path='review' element={<MyReviews></MyReviews>}></Route>
        <Route path='profile' element={<MyProfile></MyProfile>}></Route>
        <Route path='add' element={<AddProduct></AddProduct>}></Route>
        <Route path='admin' element={<MakeAdmin></MakeAdmin>}></Route>
        <Route path='allProduct' element={<ManageAllProduct></ManageAllProduct>}></Route>
        <Route path='manage' element={<ManageProduct></ManageProduct>}></Route>


      </Route>
      <Route path="login" element={<Login/>}/>
      <Route path="signup" element={<SignUp/>}/>
      <Route path="*" element={<NotFound/>}/>
      <Route path="portfolio" element={<Portfolio/>}/>
       
        
     
    </Routes>
    <ToastContainer/>

    </div>
  );
}

export default App;
