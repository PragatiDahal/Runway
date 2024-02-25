import React from "react";

const MER = () => {
  return (
    <div className="w-[1436px] h-[1390px] relative bg-white">
      <div className="w-[281px] h-[35px] left-[577px] top-[69px] absolute text-fuchsia-950 text-xl font-bold font-['Poppins']">
        Night Rating(NR)
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
            The Multi-Engine Rating (MER) Program is tailored for pilots seeking
            to advance their skills and qualifications by learning to operate
            aircraft with more than one engine. This program enables pilots to
            handle larger and more complex aircraft configurations, opening
            doors to diverse opportunities in commercial aviation, charter
            operations, and corporate flying.
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
            -Aircraft Systems and Characteristics
            <br />
            -Engine Management
            <br />
            -Emergency Procedures
            <br />
            -Single-Engine Operations
            <br />
            -Flight Training
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
            Upon successful completion of the MER Program, pilots receive the
            Multi-Engine Rating on their pilot certificate. This qualification
            allows them to legally operate aircraft with more than one engine,
            expanding their career prospects and capabilities. Pilots equipped
            with a Multi-Engine Rating are well-positioned for roles in
            commercial aviation, charter services, corporate flying, and other
            sectors requiring proficiency in managing multi-engine aircraft. The
            MER Program represents a crucial step for pilots aspiring to advance
            their careers and gain experience with larger and more complex
            aircraft configurations.
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

export default MER;
