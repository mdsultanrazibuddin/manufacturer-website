
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import Parts from './Pages/Parts/Parts';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import ButtonModal from './Pages/Parts/ButtonModal';
import NotFound from './Pages/Shared/NotFound';

function App() {
  return (
    <div className='px-12' >
    <Navbar/>
     
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
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
       
        
     
    </Routes>
   

    </div>
  );
}

export default App;
