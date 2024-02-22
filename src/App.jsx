
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './Components/Navbar'
import Homepage from './Components/Homepage'
import Admission from './Components/Admission'
import Course from './Components/Course'
import Service from './Components/Service'
import Region from './Components/Region'
import About from './Components/About'
import Testimonials from './Components/Testimonials'
import Blog from './Components/Blog'
import Gallery from './Components/Gallery'
import Contact from './Components/Contact'
import Footer from './Components/Footer'




function App() {


  return (
   
    <div className='overflow-hidden'>
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
        </Routes>
      </BrowserRouter>
    </div>
       

    
   
  
    
   
  )
}

export default App
