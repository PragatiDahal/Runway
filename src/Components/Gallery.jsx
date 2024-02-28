import React from 'react'
import image from '../images/aero.jpg'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Cards({
  className, thumbnailSrc, thumbnailAlt
})
{
return(
  <div className={`rounded-lg p-4 hover:bg-pink-100 duration-500 ease-in-out shadow-sm ${className}`}>
      <div className="overflow-hidden rounded-lg">
        <img
          className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-2xl h-auto" data-aos="fade-down" data-aos-duration="2000"
          src={thumbnailSrc}
          alt={thumbnailAlt}
        />
      </div>
      </div>
)
}
const Gallery = () => {
  useEffect(() => {
    AOS.init();
  }, []);
    return (
      <>
      <div className='flex justify-center items-center py-8'>
        <h1  data-aos="zoom-in" data-aos-duration="2000"className='font-bold text-4xl'>Gallery</h1>
      </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-3 sm:p-8">
      <Cards
        className="bg-zinc-200" 
        thumbnailSrc={"https://images.unsplash.com/photo-1524592714635-d77511a4834d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
      />
      <Cards
        className="bg-zinc-200" 
        thumbnailSrc={"https://images.unsplash.com/photo-1529074963764-98f45c47344b?q=80&w=1786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
      />
      <Cards
        className="bg-zinc-200" 
        thumbnailSrc={"https://images.unsplash.com/photo-1533169859263-38b2c186d219?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
      />
       <Cards
        className="bg-zinc-200" 
        thumbnailSrc={"https://images.unsplash.com/photo-1477541915273-59a4b030923b?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
      />
       <Cards
        className="bg-zinc-200" 
        thumbnailSrc={"https://images.unsplash.com/photo-1541316735011-8f6c9d6c4f30?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
      />
       <Cards
        className="bg-zinc-200" 
        thumbnailSrc={"https://images.unsplash.com/photo-1484299100652-225f64efab39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
      />
    </div>
    </>
    )
}

export default Gallery