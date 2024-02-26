import React from "react";
import image from '../images/spl.jpg'

const IR = () => {
  return (
    <div className="w-[1436px] h-[1390px] relative bg-white">
      <div className="w-[300px] h-[35px] left-[577px] top-[69px] absolute text-fuchsia-950 text-xl font-bold font-['Poppins']">
      <h1 className="font-bold text-2xl">Instrument Rating</h1>
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
            The Instrument Rating (IR) Program is designed for pilots seeking
            advanced qualifications to navigate and operate aircraft solely by
            reference to instruments, without relying on external visual cues.
            This program enhances pilots' abilities to safely fly in various
            weather conditions, including low visibility, clouds, and adverse
            weather.
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
            -Theoretical Knowledge
            <br />
            -Cockpit Instrumentation
            <br />
            -Practical Flight Training
            <br />
            -Simulated Weather Conditions
            <br />
            -Air Traffic Control Interaction
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
            Upon successful completion of both theoretical exams and practical
            flight tests, pilots receive the Instrument Rating, unlocking the
            capability to fly in conditions that would otherwise be unsafe for
            visual flight. This qualification is essential for professional
            pilots operating in diverse weather conditions and private pilots
            aiming to enhance proficiency and safety margins. The IR Program
            represents a significant advancement in flying skills, enabling
            pilots to operate safely and confidently in a broader range of
            challenging conditions.
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

export default IR;
