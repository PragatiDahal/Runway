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
        thumbnailSrc={image}
      />
      <Cards
        className="bg-zinc-200" 
        thumbnailSrc={image}
      />
      <Cards
        className="bg-zinc-200" 
        thumbnailSrc={image}
      />
       <Cards
        className="bg-zinc-200" 
        thumbnailSrc={image}
      />
       <Cards
        className="bg-zinc-200" 
        thumbnailSrc={image}
      />
       <Cards
        className="bg-zinc-200" 
        thumbnailSrc={image}
      />
    </div>
    </>
    )
}

export default Gallery