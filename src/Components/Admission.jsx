import React from "react";
import image from "../images/aero.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Admission = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      
      <div className="flex justify-center py-5">
        <h1
          className="text-4xl font-bold"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
        Admission on RUNWAY 02
        </h1>
      </div>
      <div className="max-w-[1200px] mx-auto w-[1200px] bg-white rounded-xl py-20 px-5 top-[200px] shadow-md overflow-hidden md:max-w-[1200px]" data-aos="fade-up" data-aos-duration="2000">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-[500px] w-[500px] object-cover md:h-[500px] md:w-[500px] transition hover:scale-100"
              src={
                "https://i.pinimg.com/564x/e7/c4/fe/e7c4fe825aa8ca7cababb2e4956c2b1f.jpg"
              }
              alt=""
            />
          </div>
          <div className="p-8">
            
            <a
              href="#"
              className="block mt-1 text-2xl leading-tight font-bold text-black hover:underline py-5"  data-aos="fade-up" data-aos-duration="2000"
            >
             Basic Criteria to join aviation
            </a>
            <p className="mt-2 text-black"  data-aos="fade-up" data-aos-duration="2000">
             <span className="text-xl font-bold">Education: </span> 
             <span className="text-lg">Completion of the +2 level (or equivalent) with a focus on physics and mathematics.</span>
             <br/>
             <br/>
             <span className="text-xl font-bold"> Age: </span> 
             <span className="text-lg">Must be 18 years or older.</span>
             <br/>
             <br/>
             <span className="text-xl font-bold">Language Proficiency:</span>
             <span className="text-lg"> Fluency in English.</span>
             <br/>
             <br/>
             <span className="text-xl font-bold">Medical Examination:</span>
             <span className="text-lg">Must pass an aviation medical examination conducted by a designated aviation medical examiner.</span>
            </p>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default Admission;
