
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar'
import Homepage from './Components/Homepage'
import Course from './Components/Course'
import Service from './Components/Service'
import About from './Components/About'
import Blog from './Components/Blog'
import Gallery from './Components/Gallery'
import Contact from './Components/Contact'
import Footer from './Components/Footer/Footer'
import SPL from './Components/Course/SPL'
import PPL from './Components/Course/PPL'
import NR from './Components/Course/NR'
import Hour from './Components/Hour'
import APL from './Components/Course/APL'
import CPL from './Components/Course/CPL';
import IR from './Components/Course/IR';
import MER from './Components/Course/MER'


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
