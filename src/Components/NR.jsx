import React from "react";
import image from "../images/spl.jpg";

const NR = () => {
  return (
    <div className="w-[1436px] h-[1390px] relative bg-white">
      <div className="w-[281px] h-[35px] left-[577px] top-[69px] absolute text-fuchsia-950 text-xl font-bold font-['Poppins'] items-center justify-center">
      <h1 className="font-bold text-2xl">Night Rating</h1>
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
            The Night Rating (NR) Training Program is designed for pilots
            holding a valid Private Pilot License (PPL) or higher certification,
            aiming to enhance their capabilities by allowing them to fly
            aircraft at night under visual flight rules (VFR). This program
            provides comprehensive training in night-specific skills, ensuring
            pilots can safely navigate and operate an aircraft in low-light
            conditions.
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
            -Night Flying Essentials
            <br />
            -Navigation Techniques
            <br />
            -Night Takeoffs and Landings
            <br />
            -Emergency Procedures at Night
            <br />
            -Ground Instructiont
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
            Upon successful completion of the Night Rating training and a
            proficiency checkride, pilots receive the endorsement on their
            license. This endorsement allows them to fly at night within the
            specified limitations by aviation authorities, expanding their
            flying capabilities and providing opportunities for unique and
            enjoyable night flying experiences. The Night Rating is a valuable
            addition for pilots seeking to broaden their aviation expertise and
            versatility.
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

export default NR;
