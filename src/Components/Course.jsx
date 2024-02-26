import React from "react";
import image from "../images/license.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Courses = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-[1523px] h-[1768px] relative bg-pink-100">
      <div data-aos="zoom-in-up" data-aos-duration="2000" className="flex items-center justify-center py-8">
       <h1 className="font-bold text-4xl">Courses</h1>
      </div>
      {/* Course1 */}
      <div data-aos="fade-up" data-aos-duration="2000" className="w-[396.02px] h-[447px] left-[98px] top-[205px] absolute ">
        <div className="w-[396.02px] h-[447px] left-0 top-0 absolute bg-zinc-200 rounded-3xl transition hover:bg-purple-200 duration-300 hover:scale-110" />
        <img
          className="w-[395px] h-[234.48px] left-[1.02px] top-5px absolute rounded-2xl"
          src={image}
        />
        <div className="w-[221.54px] h-[27.63px] left-[13.02px] top-[265px] absolute text-black text-base font-bold font-poppins">
          Student Pilot License (SPL)
        </div>
        <div className="w-28 h-[79.34px] left-[13.02px] top-[328px] absolute text-black text-base font-bold font-poppins">
          course time
          <br />
          12 months
        </div>
        
        <div className="w-28 h-[79.34px] left-[143px] top-[330px] absolute text-black text-base font-bold font-poppins">
          Qualification
          <br />
          <div className= "border-l-2 border-solid h-[90px] border-black top-1 "/>
        </div>
        <div className="w-[118.45px] h-[79px] left-[271.02px] top-[330px] absolute text-black text-base font-bold font-poppins">
          Add on course
          <br />
          <div className= "border-l-2 border-solid h-[90px] border-black"/>
        </div>
      </div>

       {/* Course2 */}
      <div data-aos="fade-up" data-aos-duration="2000" className="w-[396.02px] h-[447px] left-[99px] top-[761px] absolute">
        <div className="w-[396.02px] h-[447px] left-0 top-0 absolute bg-zinc-200 rounded-3xl transition hover:bg-purple-200 duration-300 hover:scale-110" />
        <img
          className="w-[395px] h-[234.48px] left-[1.02px] top-0 absolute rounded-2xl"
          src={image}
        />
        <div className="w-[221.54px] h-[27.63px] left-[13.02px] top-[265px] absolute text-black text-base font-bold font-poppins">
          Hour Building
        </div>
        <div className="w-28 h-[79.34px] left-[13.02px] top-[328px] absolute text-black text-base font-bold font-poppins">
          course time
          <br />
        </div>
        <div className="w-28 h-[79.34px] left-[142.02px] top-[330px] absolute text-black text-base font-bold font-poppins">
          Qualification
          <br />
          <div className= "border-l-2 border-solid h-[90px] border-black"/>
        </div>
        <div className="w-[118.45px] h-[79px] left-[271.02px] top-[330px] absolute text-black text-base font-bold font-poppins">
          Add on course
          <br />
          <div className= "border-l-2 border-solid h-[90px] border-black"/>
        </div>
      </div>

       {/* Course3 */}
      <div data-aos="fade-up" data-aos-duration="2000" className="w-[396.02px] h-[447px] left-[577px] top-[761px] absolute">
        <div className="w-[396.02px] h-[447px] left-0 top-0 absolute bg-zinc-200 rounded-3xl transition hover:bg-purple-200 duration-300 hover:scale-110" />
        <img
          className="w-[395px] h-[234.48px] left-[1.02px] top-0 absolute rounded-2xl"
          src={image}
        />
        <div className="w-[221.54px] h-[27.63px] left-[13.02px] top-[265px] absolute text-black text-base font-bold font-poppins">
          Instrument Rating (IR)
        </div>
        <div className="w-28 h-[79.34px] left-[13.02px] top-[328px] absolute text-black text-base font-bold font-poppins">
          course time
          <br />
        </div>
        <div className="w-28 h-[79.34px] left-[142.02px] top-[330px] absolute text-black text-base font-bold font-poppins">
          Qualification
          <br />
          <div className= "border-l-2 border-solid h-[90px] border-black"/>
        </div>
        <div className="w-[118.45px] h-[79px] left-[271.02px] top-[330px] absolute text-black text-base font-bold font-poppins">
          Add on course
          <br />
          <div className= "border-l-2 border-solid h-[90px] border-black"/>
        </div>
      </div>
      {/* Course4 */}
      <div data-aos="fade-up" data-aos-duration="2000"  className="w-[396.02px] h-[447px] left-[577px] top-[1291px] absolute">
        <div className="w-[396.02px] h-[447px] left-0 top-0 absolute bg-zinc-200 rounded-3xl transition hover:bg-purple-200 duration-300 hover:scale-110" />
        <img
          className="w-[395px] h-[234.48px] left-[1.02px] top-0 absolute rounded-2xl"
          src={image}
        />
        <div className="w-[222px] h-[47px] left-[15px] top-[261px] absolute text-black text-base font-bold font-poppins">
          The Airline Transport Pilot License (ATPL)
        </div>
        <div className="w-28 h-[79.34px] left-[13.02px] top-[328px] absolute text-black text-base font-bold font-poppins">
          course time
          <br />
        </div>
        <div className="w-28 h-[79.34px] left-[142.02px] top-[330px] absolute text-black text-base font-bold font-poppins">
          Qualification
          <br />
          <div className= "border-l-2 border-solid h-[90px] border-black"/>
        </div>
        <div className="w-[118.45px] h-[79px] left-[271.02px] top-[330px] absolute text-black text-base font-bold font-poppins">
          Add on course
          <br />
          <div className= "border-l-2 border-solid h-[90px] border-black"/>
        </div>
      </div>
       {/* Course5 */}
      <div data-aos="fade-up" data-aos-duration="2000" className="w-[396.02px] h-[447px] left-[1036px] top-[761px] absolute">
        <div className="w-[396.02px] h-[447px] left-0 top-0 absolute bg-zinc-200 rounded-3xl transition hover:bg-purple-200 duration-300 hover:scale-110" />
        <img
          className="w-[395px] h-[234.48px] left-[1.02px] top-0 absolute rounded-2xl"
          src={image}
        />
        <div className="w-[231px] h-[47px] left-[26px] top-[261px] absolute text-black text-base font-bold font-poppins">
          Commercial Pilot License (CPL)
        </div>
        <div className="w-28 h-[79.34px] left-[13.02px] top-[328px] absolute text-black text-base font-bold font-poppins">
          course time
          <br />
        </div>
        <div className="w-28 h-[79.34px] left-[142.02px] top-[330px] absolute text-black text-base font-bold font-poppins">
          Qualification
          <br />
          <div className= "border-l-2 border-solid h-[90px] border-black"/>
        </div>
        <div className="w-[118.45px] h-[79px] left-[271.02px] top-[330px] absolute text-black text-base font-bold font-poppins">
          Add on course
          <br />
          <div className= "border-l-2 border-solid h-[90px] border-black"/>
        </div>
      </div>
      {/* Course6 */}
      <div data-aos="fade-up" data-aos-duration="2000" className="w-[396.02px] h-[447px] left-[564px] top-[205px] absolute">
        <div className="w-[396.02px] h-[447px] left-0 top-0 absolute bg-zinc-200 rounded-3xl transition hover:bg-purple-200 duration-300 hover:scale-110" />
        <img
          className="w-[395px] h-[234.48px] left-[1.02px] top-0 absolute rounded-2xl"
          src={image}
        />
        <div className="w-[221.54px] h-[27.63px] left-[13.02px] top-[265px] absolute text-black text-base font-bold font-poppins">
          Private Pilot License (PPL)
        </div>
        <div className="w-28 h-[79.34px] left-[13.02px] top-[328px] absolute text-black text-base font-bold font-poppins">
          course time
          <br />
        </div>
        <div className="w-28 h-[79.34px] left-[142.02px] top-[330px] absolute text-black text-base font-bold font-poppins">
          Qualification
          <br />
          <div className= "border-l-2 border-solid h-[90px] border-black"/>
        </div>
        <div className="w-[118.45px] h-[79px] left-[271.02px] top-[330px] absolute text-black text-base font-bold font-poppins">
          Add on course
          <br />
          <div className= "border-l-2 border-solid h-[90px] border-black"/>
        </div>
      </div>
      {/* Course7 */}
      <div data-aos="fade-up" data-aos-duration="2000" className="w-[396.02px] h-[447px] left-[1035px] top-[205px] absolute">
        <div className="w-[396.02px] h-[447px] left-0 top-0 absolute bg-zinc-200 rounded-3xl transition hover:bg-purple-200 duration-300 hover:scale-110" />
        <img
          className="w-[395px] h-[234.48px] left-[1.02px] top-0 absolute rounded-2xl"
          src={image}
        />
        <div className="w-[221.54px] h-[27.63px] left-[13.02px] top-[265px] absolute text-black text-base font-bold font-poppins">
          Night Rating(NR)
        </div>
        <div className="w-28 h-[79.34px] left-[13.02px] top-[328px] absolute text-black text-base font-bold font-poppins">
          course time
          <br />
        </div>
        <div className="w-28 h-[79.34px] left-[142.02px] top-[330px] absolute text-black text-base font-bold font-poppins">
          Qualification
          <br />
          <div className= "border-l-2 border-solid h-[90px] border-black"/>
        </div>
        <div className="w-[118.45px] h-[79px] left-[271.02px] top-[330px] absolute text-black text-base font-bold font-poppins">
          Add on course
          <br />
          <div className= "border-l-2 border-solid h-[90px] border-black"/>
        </div>
      </div>
      <div className="p-0.5 left-[354px] top-[463px] absolute flex-col justify-center items-center gap-2.5 inline-flex">
        <div className="w-[101px] h-[45px] relative">
          {/* button for SPL */}
        <Link to="/SPL">
          <button className="w-[101px] h-[45px] left-0 top-0 absolute bg-fuchsia-950 rounded-[30px] text-white text-[15px] font-bold font-poppins" >
          Open
          </button>
          </Link>
        </div>
      </div>
       {/* button for Hour Building */}
      <div className="p-0.5 left-[356px] top-[1017px] absolute flex-col justify-center items-center gap-2.5 inline-flex">
        <div className="w-[101px] h-[45px] relative">
          <Link to="/Hour">
        <button className="w-[101px] h-[45px] left-0 top-0 absolute bg-fuchsia-950 rounded-[30px] text-white text-[15px] font-bold font-poppins" >
          Open
          </button>
          </Link>
        </div>
      </div>
       {/* button for IR*/}
      <div  className="p-0.5 left-[855px] top-[1015px] absolute flex-col justify-center items-center gap-2.5 inline-flex">
        <div className="w-[101px] h-[45px] relative">
          <Link to="/IR">
        <button className="w-[101px] h-[45px] left-0 top-0 absolute bg-fuchsia-950 rounded-[30px] text-white text-[15px] font-bold font-poppins" >
          Open
          </button>
          </Link>
        </div>
      </div>
       {/* button for ATPL */}
      <div  className="p-0.5 left-[855px] top-[1545px] absolute flex-col justify-center items-center gap-2.5 inline-flex">
        <div className="w-[101px] h-[45px] relative">
          <Link to="/APL">
        <button className="w-[101px] h-[45px] left-0 top-0 absolute bg-fuchsia-950 rounded-[30px] text-white text-[15px] font-bold font-poppins" >
          Open
          </button>
          </Link>
        </div>
      </div>
       {/* button for CPL */}
      <div  className="p-0.5 left-[1318px] top-[1019px] absolute flex-col justify-center items-center gap-2.5 inline-flex">
        <div className="w-[101px] h-[45px] relative">
          <Link to="/CPL">
        <button className="w-[101px] h-[45px] left-0 top-0 absolute bg-fuchsia-950 rounded-[30px] text-white text-[15px] font-bold font-poppins" >
          Open
          </button>
          </Link>
        </div>
      </div>
       {/* button for PPL */}
      <div  className="p-0.5 left-[830px] top-[463px] absolute flex-col justify-center items-center gap-2.5 inline-flex">
        <div className="w-[101px] h-[45px] relative">
          <Link to="/PPL">
        <button className="w-[101px] h-[45px] left-0 top-0 absolute bg-fuchsia-950 rounded-[30px] text-white text-[15px] font-bold font-poppins" >
          Open
          </button>
          </Link>
        </div>
      </div>
       {/* button for NR */}
      <div  className="p-0.5 left-[1318px] top-[463px] absolute flex-col justify-center items-center gap-2.5 inline-flex">
        <div className="w-[101px] h-[45px] relative">
          <Link to="/NR">
        <button className="w-[101px] h-[45px] left-0 top-0 absolute bg-fuchsia-950 rounded-[30px] text-white text-[15px] font-bold font-poppins" >
          Open
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Courses;
