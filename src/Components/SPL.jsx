import React from "react";
import image from "../images/spl.jpg"

const SPL = () => {
  return (
    <div className="w-[1436px] h-[1390px] relative bg-white">
      <div className="w-[281px] h-[35px] left-[577px] top-[69px] absolute text-fuchsia-950 text-xl font-bold font-['Poppins']">
        Student Pilot License (SPL)
      </div>
      <img
        className="w-[595px] h-[359px] left-[420px] top-[132px] absolute rounded-[30px]"
        src={image}
      />
      <div className="w-[1135px] h-[121px] left-[125px] top-[551px] absolute">
        <div className="w-[1135px] h-[121px] left-0 top-0 absolute bg-zinc-300 rounded-[30px]" />
        <div className="w-[1074px] left-[42px] top-[15px] absolute text-justify">
          <span className="text-fuchsia-950 text-lg font-bold font-['Poppins']">
            Course Overview: <br />
          </span>
          <span className="text-black text-lg font-normal font-['Poppins']">
            This course is designed for individuals aspiring to pursue a career
            in aviation by obtaining a Student Pilot License (SPL). <br />
            The curriculum covers essential topics to ensure a strong foundation
            for aviation studies and safe flight operations
          </span>
        </div>
      </div>
      <div className="w-[1135px] h-[250px] left-[125px] top-[713px] absolute">
        <div className="w-[1135px] h-[250px] left-0 top-0 absolute bg-zinc-300 rounded-[30px]" />
        <div className="w-[1074px] left-[42px] top-[15px] absolute text-justify">
          <span className="text-fuchsia-950 text-lg font-bold font-['Poppins']">
            Course Modules: <br />
          </span>
          <span className="text-black text-lg font-normal font-['Poppins']">
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
      <div className="w-[1135px] h-[125px] left-[125px] top-[1021px] absolute">
        <div className="w-[1135px] h-[125px] left-0 top-0 absolute bg-zinc-300 rounded-[30px]" />
        <div className="w-[1074px] h-[105px] left-[37px] top-[10px] absolute text-justify">
          <span className="text-fuchsia-950 text-lg font-bold font-['Poppins']">
            Course Outcome: <br />
          </span>
          <span className="text-black text-lg font-normal font-['Poppins']">
            Upon successful completion, candidates will be well-prepared to meet
            the stringent requirements for obtaining a Student Pilot License.
            This course serves as a crucial step towards a fulfilling career in
            aviation, laying the groundwork for advanced flight training and
            certification.
            <br />
          </span>
        </div>
      </div>
      <div className="w-[279px] h-[68px] left-[559px] top-[1238px] absolute">
        <div className="w-[279px] h-[68px] left-0 top-0 absolute bg-fuchsia-950 rounded-[30px]" />
        <div className="w-[161px] h-[29px] left-[59px] top-[19px] absolute text-justify text-white text-lg font-bold font-['Poppins']">
          Join this course
        </div>
      </div>
    </div>
  );
};

export default SPL;
