
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './Components/Navbar'
import Homepage from './Components/Homepage'
import Course from './Components/Course'
import Service from './Components/Service'
import About from './Components/About'
import Blog from './Components/Blog'
import Gallery from './Components/Gallery'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import SPL from './Components/SPL'
import PPL from './Components/PPL'
import NR from './Components/NR'
import Hour from './Components/Hour'
import APL from './Components/APL'
import CPL from './Components/CPL';
import IR from './Components/IR';
import MER from './Components/MER'


function App() {


  return (
   
    <div className='overflow-hidden font-poppins'>
         <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Course" element={<Course />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/About" element={<About />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<Navigate to='/'/>} />
          <Route path="/Blog" element={<Blog/>} />
          <Route path="/SPL" element={<SPL />}/>
          <Route path="/PPL" element={<PPL/>} />
          <Route path="/NR" element={<NR/>} />
          <Route path="/CPL" element={<CPL/>} />
          <Route path="/Hour" element={<Hour/>} />
          <Route path="/IR" element={<IR/>} />
          <Route path="/MER" element={<MER/>} />
          <Route path="/APL" element={<APL/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
       

    
   
  
    
   
  )
}

export default App
