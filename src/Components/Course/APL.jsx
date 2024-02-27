import React from "react";


const APL = () => {
  return (
    <div className="w-[1436px] h-[1390px] relative bg-white">
      <div className="w-[700px] h-[35px] left-[577px] top-[69px] absolute text-fuchsia-950 text-xl font-bold font-['Poppins'] items-center justify-center">
      <h1 className="font-bold text-2xl">The Airline Transport Pilot License (ATPL)</h1>
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
            The Airline Transport Pilot License (ATPL) Program is an advanced
            and comprehensive training course designed for experienced pilots
            aiming to reach the pinnacle of their aviation careers. This program
            prepares candidates to operate as captains or first officers of
            large commercial aircraft, demonstrating mastery in complex and
            demanding flight environments.
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
            -Eligibility Criteria
            <br />
            -Advanced Training Programs
            <br />
            -Theoretical Knowledge Examinations
            <br />
            -Practical Flight Training
            <br />
            -Simulated Flight Scenarios
            <br />
            -Leadership and Teamwork Evaluation
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
            Upon successful completion of the ATPL Program, candidates are
            awarded the prestigious Airline Transport Pilot License. This
            qualification opens doors to diverse career opportunities, including
            roles as airline pilots, corporate pilots, flight instructors, and
            other high-level positions within the aviation industry. The ATPL
            represents the pinnacle of a pilot's journey, signifying mastery,
            professionalism, and the highest level of responsibility in
            aviation.
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

export default APL;
