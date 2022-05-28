
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
import RequireAdmin from './Pages/About/DashBoard/RequireAdmin';
import Payment from './Pages/About/DashBoard/Payment';





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
        <Route path='payment/:id' element={<Payment></Payment>}></Route>
        
        <Route path='admin' element={ <RequireAdmin><MakeAdmin></MakeAdmin></RequireAdmin>}></Route>
        <Route path='allProduct' element={<RequireAdmin><ManageAllProduct></ManageAllProduct></RequireAdmin>}></Route>
        <Route path='manage' element={<RequireAdmin><ManageProduct></ManageProduct></RequireAdmin>}></Route>
        <Route path='add' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
       


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
