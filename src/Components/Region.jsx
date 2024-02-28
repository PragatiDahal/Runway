import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import usa from '../images/USA.jpg'
import canada from '../images/canada1.jpg'
import south from '../images/south.png'

function Cards({
  heading,
  description,
  thumbnailSrc,
  thumbnailAlt = "Thumbnail",
  className,
  button,
}) {
  return (
    <div className={`rounded-lg p-6 hover:bg-pink-200 duration-500 ease-in-out shadow-sm ${className}`}>
      <div className="overflow-hidden rounded-lg">
        <img
          className="w-full cursor-pointer transition duration-1000 ease-in-out transform hover:scale-110 rounded-lg h-auto"
          src={thumbnailSrc}
          alt={thumbnailAlt}
        />
      </div>
      <h3 className="pt-5 text-2xl font-bold text-gray-600 block">
        {heading}
      </h3>
      <p className="font-normal text-gray-500 cursor-pointer text-lg duration-300 transition  mt-2">
        {description}
      </p>
      <div className="p-5 pt-5">
    <button
      className="align-left select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 mt-2 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
      type="button">
      Read More
    </button>
  </div>
    </div>
  );
}


const Region = () => {
    useEffect(() => {
      AOS.init();
    }, []);
    return (
      <>
        <div className='flex justify-center items-center py-8'>
          <h1  data-aos="zoom-in" data-aos-duration="2000"className='font-bold text-4xl'>Regions</h1>
        </div>
  
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-3 sm:p-8" data-aos="fade-down" data-aos-duration="2000">
        <Cards
          className="bg-[#fcf4ff]"
          heading="United States of America (USA)"
          description="Studying aviation in the context of the United States offers unparalleled opportunities for aspiring pilots, aviation engineers, and professionals in various aviation-related fields. With a rich aviation history dating back to the Wright brothers' first powered flight in 1903, the U.S. has established itself as a global leader in aviation innovation, education, and training."
          thumbnailSrc={usa}
          
        />
        <Cards
          className="bg-[#fcf4ff]"
          heading="Canada"
          description="Studying aviation in the context of Canada offers a unique opportunity to delve into a rich and diverse aviation ecosystem shaped by the country's vast geographic landscape, strong aerospace industry, and commitment to excellence in aviation education and training."
          thumbnailSrc={canada}
        />
        <Cards
          className="bg-[#fcf4ff]"
          heading="South Africa"
          description="Aviation study in the context of Africa encompasses a multifaceted examination of the continent's unique challenges, opportunities, and aspirations in the realm of air transportation. With a vast and diverse landscape, Africa presents a myriad of complexities, ranging from inadequate infrastructure and regulatory frameworks to socio-economic disparities and geopolitical tensions."
          thumbnailSrc={south}
        />
        </div>
        </>
  )
};

export default Region