
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import Parts from './Pages/Parts/Parts';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';

function App() {
  return (
    <div className='px-12' >
    <Navbar/>
     
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="parts" element={<Parts/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="signup" element={<SignUp/>}/>
       
        
     
    </Routes>
   

    </div>
  );
}

export default App;
