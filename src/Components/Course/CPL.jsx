import React from "react";


const CPL = () => {
  return (
    <div className="w-[1436px] h-[1390px] relative bg-white">
      <div className="w-[450px] h-[35px] left-[577px] top-[69px] absolute text-fuchsia-950 text-xl font-bold font-poppins">
      <h1 className="font-bold text-2xl">Commercial Pilot License</h1>
      </div>
      <img
        className="w-[595px] h-[359px] left-[420px] top-[132px] absolute rounded-[30px]"
        src={image}
      />
      <div className="w-[1135px] h-[121px] left-[125px] top-[551px] absolute">
        <div className="w-[1135px] h-[121px] left-0 top-0 absolute bg-zinc-300 rounded-[30px]" />
        <div className="w-[1074px] left-[42px] top-[15px] absolute text-justify">
          <span className="text-fuchsia-950 text-lg font-bold font-poppins">
            Course Overview: <br />
          </span>
          <span className="text-black text-lg font-normal font-poppins">
            The Commercial Pilot License (CPL) Program is designed for aspiring
            aviators seeking to transition from private to professional flying,
            enabling them to operate aircraft for compensation or hire. This
            comprehensive program encompasses both theoretical knowledge and
            practical flight training, ensuring candidates meet the stringent
            requirements set by aviation authorities.
          </span>
        </div>
      </div>
      <div className="w-[1135px] h-[250px] left-[125px] top-[713px] absolute">
        <div className="w-[1135px] h-[250px] left-0 top-0 absolute bg-zinc-300 rounded-[30px]" />
        <div className="w-[1074px] left-[42px] top-[15px] absolute text-justify">
          <span className="text-fuchsia-950 text-lg font-bold font-poppins">
            Course Modules: <br />
          </span>
          <span className="text-black text-lg font-normal font-poppins">
            -Eligibility Criteria
            <br />
            -Flight Hour Requirements
            <br />
            -Structured Training Program
            <br />
            -Advanced Maneuvers
            <br />
            -Written Examinations
            <br />
            -Checkrides
          </span>
        </div>
      </div>
      <div className="w-[1135px] h-[125px] left-[125px] top-[1021px] absolute">
        <div className="w-[1135px] h-[125px] left-0 top-0 absolute bg-zinc-300 rounded-[30px]" />
        <div className="w-[1074px] h-[105px] left-[37px] top-[10px] absolute text-justify">
          <span className="text-fuchsia-950 text-lg font-bold font-poppins">
            Course Outcome: <br />
          </span>
          <span className="text-black text-lg font-normal font-poppins">
            Upon successful completion of the CPL Program, candidates are
            awarded the Commercial Pilot License. This qualification opens doors
            to various career opportunities in aviation, including roles as
            flight instructors, charter pilots, airline pilots, aerial
            photographers, and more. The CPL Program is a pivotal step for
            individuals aspiring to turn their passion for flying into a
            professional and rewarding career in the aviation industry.
            <br />
          </span>
        </div>
      </div>
      <div className="w-[279px] h-[68px] left-[559px] top-[1238px] absolute">
        <div className="w-[279px] h-[68px] left-0 top-0 absolute bg-fuchsia-950 rounded-[30px]" />
        <div className="w-[145px] h-[29px] left-[59px] top-[19px] absolute text-justify text-white text-lg font-bold font-poppins">
          Join this course
        </div>
      </div>
    </div>
  );
};

export default CPL;
