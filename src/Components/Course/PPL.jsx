import React from 'react'


const PPL = () => {
  return (
    <div className="w-[1436px] h-[1390px] relative bg-white">
      <div className="w-[400px] h-[35px] left-[577px] top-[69px] absolute text-fuchsia-950 text-xl font-bold font-['Poppins']">
      <h1 className="font-bold text-2xl">Private Pilot License</h1>
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
          The Private Pilot License (PPL) Training Program is designed for individuals with a Student Pilot License (SPL) aspiring to elevate their skills and obtain the PPL, a key milestone in becoming a licensed pilot. This comprehensive program encompasses theoretical and practical aspects of aviation to ensure candidates develop the knowledge and skills necessary for safe and confident flying.
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
            -Flight Training Hours
            <br />
            -Aeronautical Knowledge
            <br />
            -Written Examinations Preparation
            <br />
            -Practical Flight Training
            <br />
            -Skills and Judgment Development
            <br />
            -Regulatory Compliance
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
          Upon successful completion of the program, candidates will have met the requirements for the Private Pilot License. Graduates gain the privilege to serve as pilot-in-command for personal or recreational flights, marking a significant achievement in their aviation journey. This PPL serves as a foundation for advanced certifications, allowing individuals to pursue diverse opportunities in aviation, from leisure flying to potential career paths.
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
  )
}

export default PPL