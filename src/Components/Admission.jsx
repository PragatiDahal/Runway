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
      <div data-aos= "fade-up" data-duration-aos="2000" className="w-[1502px] h-[756px] relative bg-white pt-7">
        <img
          className="w-[643px] h-[423px] left-[796px] top-[150px] absolute transition ease-in-out delay-150  hover:scale-110  duration-300"
          src={image}
        />
        <div data-aos="zoom-in" data-duration-aos="2000" className="pl-24 relative top-10 ">
          <span className="text-fuchsia-950 text-[40px] font-bold font-poppins underline underline-offset-8">
            ADMISSION  ON RUNWAY 02 </span>
        </div>
    
        <div className="w-[369px] h-[34px] left-[97px] top-[150px] absolute text-justify text-black text-2xl font-bold font-poppins">
          Basic Criteria to join aviation
        </div>
        <div data-aos= "fade-up" data-duration-aos="2000" className="w-[589px] h-[100px] left-[75px] top-[226px] absolute bg-pink-100 rounded-xl">
          <div className="w-[535px] h-[73px] left-[27px] top-[13px] absolute text-justify">
            <span className="text-black text-xl font-bold font-poppins">
              Education:</span><span className="text-black text-xl font-normal font-poppins">
               Completion of the +2 level (or equivalent) with a focus on physics
              and mathematics.
            </span>
          </div>
        </div>
        <div data-aos= "fade-up" data-duration-aos="2000" className="w-[589px] h-[70px] left-[75px] top-[352px] absolute bg-pink-100 rounded-xl">
          <div className="w-[478px] h-[37px] left-[27px] top-[16px] absolute text-justify">
            <span className="text-black text-xl font-bold font-poppins">
              Age:
            </span>
            <span className="text-black text-xl font-normal font-poppins">
              Must be 18 years or older.
            </span>
          </div>
        </div>
        <div data-aos= "fade-up" data-duration-aos="2000" className="w-[589px] h-[70px] left-[75px] top-[448px] absolute bg-pink-100 rounded-xl">
          <div className="w-[438px] h-[33px] left-[22px] top-[18px] absolute text-justify">
            <span className="text-black text-xl font-bold font-poppins">
              Language Proficiency:
              
            </span>
            <span className="text-black text-xl font-normal font-poppins">
              Fluency in English.
            </span>
          </div>
        </div>
        <div data-aos= "fade-up" data-duration-aos="2000" className="w-[589px] h-[105px] left-[75px] top-[560px] absolute bg-pink-100 rounded-xl">
          <div className="w-[527px] h-[87px] left-[22px] top-[9px] absolute text-justify">
            <span className="text-black text-xl font-bold font-poppins">
              Medical Examination:
              
            </span>
            <span className="text-black text-xl font-normal font-poppins">
              Must pass an aviation medical examination conducted by a
              designated aviation medical examiner.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admission;
