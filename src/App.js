
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
      <Route path="login" element={<Login/>}/>
      <Route path="signup" element={<SignUp/>}/>
      <Route path="*" element={<NotFound/>}/>
      <Route path="portfolio" element={<Portfolio/>}/>
       
        
     
    </Routes>
   

    </div>
  );
}

export default App;
