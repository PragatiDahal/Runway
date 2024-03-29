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
      <div className="flex justify-center pl-5 sm:pl-3 py-5">
        <h1
          className="text-4xl font-bold"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          Admission on RUNWAY 02
        </h1>
      </div>
      <div
        className="max-w-[1200px] mx-auto bg-white rounded-xl  py-10 px-4 md:px-8 shadow-md overflow-hidden"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="md:flex md:flex-wrap">
          <div className="md:w-1/2">
            <img
              className="w-full object-contain h-48 md:h-auto md:w-full transition hover:scale-100"
              src="https://i.pinimg.com/564x/e7/c4/fe/e7c4fe825aa8ca7cababb2e4956c2b1f.jpg"
              alt=""
            />
          </div>
          <div className="md:w-1/2 p-4">
            <a
              href="#"
              className="block mt-1 text-xl leading-tight font-bold text-black hover:underline py-2"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Basic Criteria to join aviation
            </a>
            <p
              className="mt-2 text-black"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <span className="text-base md:text-lg font-bold">
                Education:{" "}
              </span>
              <span className="text-base md:text-lg">
                Completion of the +2 level (or equivalent) with a focus on
                physics and mathematics.
              </span>
              <br />
              <br />
              <span className="text-base md:text-lg font-bold"> Age: </span>
              <span className="text-base md:text-lg">
                Must be 18 years or older.
              </span>
              <br />
              <br />
              <span className="text-base md:text-lg font-bold">
                Language Proficiency:
              </span>
              <span className="text-base md:text-lg"> Fluency in English.</span>
              <br />
              <br />
              <span className="text-base md:text-lg font-bold">
                Medical Examination:
              </span>
              <span className="text-base md:text-lg">
                Must pass an aviation medical examination conducted by a
                designated aviation medical examiner.
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admission;
