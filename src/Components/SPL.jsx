import React from "react";
import image from "../images/spl.jpg";
import { Link } from "react-router-dom";
const SPL = () => {
  return (
    <div className="w-[1580px] h-[999px] relative bg-white">
      <div className="w-[340px] h-7 left-[660px] top-[63px] absolute text-black text-2xl font-bold font-['Poppins']">
        Student Pilot License (SPL)
      </div>
      <img
        className="w-[500px] h-[400px] left-[922px] top-[271px] absolute rounded-[30px]"
        src={image}
      />
      <div className="w-[785px] h-[140px] left-[45px] top-[201px] absolute">
        <div className="w-[785px] h-[140px] left-0 top-0 absolute bg-zinc-300 rounded-[30px]" />
        <div className="w-[730.62px] h-[107.78px] left-[28.67px] top-[17.43px] absolute text-justify">
          <span className="text-fuchsia-950 text-lg font-bold font-['Poppins']">
            Course Overview: <br />
          </span>
          <span className="text-black text-base font-normal font-['Poppins']">
            This course is designed for individuals aspiring to pursue a career
            in aviation by obtaining a Student Pilot License (SPL). The
            curriculum covers essential topics to ensure a strong foundation for
            aviation studies and safe flight operations.
          </span>
        </div>
      </div>
      <div className="w-[785px] h-[226px] left-[45px] top-[387px] absolute">
        <div className="w-[785px] h-[226px] left-0 top-0 absolute bg-zinc-300 rounded-[30px]" />
        <div className="w-[743px] h-[194px] left-[29px] top-[14px] absolute text-justify">
          <span className="text-fuchsia-950 text-lg font-bold font-['Poppins']">
            Course Modules: <br />
          </span>
          <span className="text-black text-base font-normal font-['Poppins']">
            -Foundational Education
            <br />
            -Age and Maturity Requirements
            <br />
            -Language Proficiency
            <br />
            -Aviation Medical Examination Preparation
            <br />
            -Safety and Professionalism
            <br />
            -Practical Skills Development
            <br />
            -Preparation for Written Examinations
          </span>
        </div>
      </div>
      <div className="w-[808px] h-[150px] left-[33px] top-[659px] absolute">
        <div className="w-[808px] h-[150px] left-0 top-0 absolute bg-zinc-300 rounded-[30px]" />
        <div className="w-[765px] h-[135px] left-[26px] top-[12px] absolute text-justify">
          <span className="text-fuchsia-950 text-lg font-bold font-['Poppins']">
            Course Outcome: <br />
          </span>
          <span className="text-black text-base font-normal font-['Poppins']">
            Upon successful completion, candidates will be well-prepared to meet
            the stringent requirements for obtaining a Student Pilot License.
            This course serves as a crucial step towards a fulfilling career in
            aviation, laying the groundwork for advanced flight training and
            certification.
            <br />
          </span>
        </div>
      </div>
      <div className="w-[250px] h-[68px] left-[716px] top-[887px] absolute">
        <div className="w-[250px] h-[68px] left-0 top-0 absolute bg-fuchsia-950 rounded-[30px]" />
        <div className="w-[150.04px] h-[29px] left-[54.98px] top-[19px] absolute text-justify text-white text-lg font-bold font-['Poppins']">
          Join this course
        </div>
      </div>
    </div>
  );
};

export default SPL;
