import React from "react";
import fb from "../images/facebook-round-color-icon.png"
import insta from "../images/ig-instagram-icon.png"
import twitter from "../images/twitter-color-icon.png"
import youtube from "../images/youtube-color-icon.png"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-[1523px] h-[353px] relative bg-fuchsia-950">
      <div className="w-[258px] h-[52px] left-[101px] top-[65px] absolute justify-start items-center gap-2 inline-flex">
        <div className="w-[241px] h-[38px]">
          <span className="text-white text-xl font-bold font-['Inter'] leading-tight tracking-[10px]">
            RUNWAY 02
            <br />
          </span>
          <span className="text-white text-2xl font-bold font-['Inter'] leading-normal tracking-[12px]">
            
          </span>
        </div>
      </div>
      <img
        className="w-10 h-10 left-[101px] top-[131px] absolute"
        src={fb}
      />
      <img
        className="w-10 h-10 left-[162px] top-[131px] absolute"
        src={insta}
      />
      <img
        className="w-10 h-10 left-[223px] top-[131px] absolute"
        src={twitter}
      />
      <img
        className="w-10 h-10 left-[282px] top-[131px] absolute"
        src={youtube}
      />
      <div className="w-[1366.01px] h-[0px] left-[68px] top-[204px] absolute border-2 border-black"></div>
      <Link to="/Home">
      <button className="w-[94px] h-[27px] left-[128px] top-[224px] absolute text-white text-base font-bold font-poppins leading-none tracking-[8px]">
        Home
      </button>
      </Link>

      <Link to="/Course">
      <button className="w-[121px] h-[27px] left-[282px] top-[224px] absolute text-white text-base font-bold font-poppins leading-none tracking-[8px]">
        Courses
      </button>
      </Link>

      <Link to="/Service">
      <button className="w-32 h-[27px] left-[475px] top-[224px] absolute text-white text-base font-bold font-poppins leading-none tracking-[8px]">
        Services
      </button>
      </Link>

      <Link to="/About">
      <button className="w-[94px] h-[27px] left-[704px] top-[224px] absolute text-white text-base font-bold font-poppins leading-none tracking-[8px]">
        About
      </button>
      </Link>

      <Link to="/Blog">
      <button className="w-[94px] h-[27px] left-[890px] top-[224px] absolute text-white text-base font-bold font-poppins leading-none tracking-[8px]">
        Blog
      </button>
      </Link>

       <Link to="/Gallery">
      <button className="w-[121px] h-[27px] left-[1059px] top-[224px] absolute text-white text-base font-bold font-poppins leading-none tracking-[8px]">
        Gallery
      </button>
      </Link>

      <Link to="/Contact">
      <button className="w-36 h-[27px] left-[1255px] top-[224px] absolute text-white text-base font-bold font-poppins leading-none tracking-[8px]">
        Contact
      </button>
      </Link>

      <div className="w-[449px] h-[129px] left-[861px] top-[38px] absolute">
        <div className="w-[187px] h-[27px] left-[11px] top-0 absolute text-white text-lg font-bold font-poppins leading-[18px] tracking-[9px]">
          Contact US
        </div>
        <div className="w-[345px] left-[11px] top-[72px] absolute text-white text-base font-normal font-poppins leading-none tracking-[8px]">
          Phone no: 9860000000
        </div>
        <div className="w-[408px] left-[11px] top-[113px] absolute text-white text-base font-normal font-poppins leading-none tracking-[8px]">
          Email: runway@gmail.com
        </div>
        <div className="w-[449px] left-[11px] top-[34px] absolute text-white text-base font-normal font-poppins leading-none tracking-[8px]">
          New Baneshwor, Kathmandu
        </div>
      </div>
    </div>
  );
};

export default Footer;
