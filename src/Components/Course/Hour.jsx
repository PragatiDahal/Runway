import React from "react";


const Hour = () => {
  return (
    <div className="w-[1436px] h-[1390px] relative bg-white">
      <div className="w-[281px] h-[35px] left-[577px] top-[69px] absolute text-fuchsia-950 text-xl font-bold font-['Poppins']">
        Hour Building
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
            The Advanced Flight Proficiency - Hour Building Program is tailored
            for pilots seeking to go beyond minimum certification requirements,
            focusing on accumulating valuable flight hours to enhance their
            skills, confidence, and overall airmanship. This program is
            especially beneficial for those aiming for advanced ratings like
            instrument or commercial pilot licenses, as well as individuals
            preparing for employment in various aviation sectors.
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
            -Flight Skill Refinement
            <br />
            -Cross-Country Flying
            <br />
            -Solo and Group Flying
            <br />
            -Maneuver Practice
            <br />
            -Navigation and Communication Mastery
            <br />
            -Decision-Making Scenarios
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
            Upon completion of the program, pilots will have accumulated
            substantial flight hours, showcasing advanced airmanship,
            decision-making prowess, and proficiency. The experience gained
            during hour building is instrumental for pilots aspiring to pursue
            advanced ratings or employment in the aviation industry. This course
            not only serves as a stepping stone towards career goals but also
            offers a rewarding journey of exploration, community engagement, and
            a deeper appreciation for the multifaceted world of aviation.
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

export default Hour;
