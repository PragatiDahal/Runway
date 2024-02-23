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
      <div className="w-[1200px] h-[550px] mt-10 pl-5 pr-5 items-center flex justify-center bg-gray-100 rounded-xl mx-auto transition ease-in-out delay-300  hover:bg-fuchsia-100 duration-300">
        <div
          data-aos="zoom-in"
          className=" w-[400px] h-[100px] top-[730px] left-[560px] align-text-top absolute text-2xl font-bold inline-block shrink-0 pt-5 text-fuchsia-950 font-poppins z-10"
        >
          <span> ADMISSION</span>
          <span className=" text-black font-poppins"> ON RUNWAY 02</span>
        </div>
        <div
          data-aos="fade-down"
          className="w-[607px] h-[261px] left-[200px] top-[850px] absolute text-justify"
        >
          <span className="text-black text-xl font-bold font-poppins">
            Basic Criteria to join Aviation
          </span>
          <span className="text-black text-xl font-bold font-['Poppins']">
            <br />
            <br />
          </span>
          <span className="text-black text-base font-bold font-poppins">
            Education:
          </span>
          <span className="text-black text-xl font-bold font-['Poppins']">
            {" "}
          </span>
          <span className="text-black text-base font-normal font-poppins">
            Completion of the +2 level (or equivalent) with a focus on physics
            and mathematics.
            <br />
            <br />
          </span>
          <span className="text-black text-base font-bold font-poppins">
            Age:{" "}
          </span>
          <span className="text-black text-base font-normal font-poppins">
            Must be 18 years or older.
            <br />
            <br />
          </span>
          <span className="text-black text-base font-bold font-poppins">
            Language Proficiency:
          </span>
          <span className="text-black text-base font-normal font-poppins">
            {" "}
            Fluency in English
          </span>
          <span className="text-black text-base font-bold font-poppins">
            .<br />
            <br />
            Medical Examination:
          </span>
          <span className="text-black text-base font-normal font-poppins">
            {" "}
            Must pass an aviation medical examination conducted by a designated
            aviation medical examiner.
            <br />
          </span>
        </div>
        <img
          data-aos="fade-up"
          className="w-[500px] h-[403px] left-[830px] top-[790px] absolute rounded-xl transition hover:scale-90"
          src={image}
        />
      </div>
    </>
  );
};

export default Admission;
