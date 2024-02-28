import React from "react";
import { useState } from "react";
import img1 from "../images/gps-icon.png";
import img2 from "../images/phone-icon.png";
import img3 from "../images/envelope-icon.png";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
     <div className='flex justify-center items-center py-6'>
        <h1  data-aos="zoom-in" data-aos-duration="2000"className='font-bold text-4xl'>Contact</h1>
      </div>
      <div className='flex justify-center items-center pl-10 py-5 text-2xl font-bold' data-aos="zoom-in" data-aos-duration="2000">Let's get in touch</div>
    <section className="flex flex-row flex-wrap justify-center ">
      <div className="flex flex-row flex-wrap gap-6 justify-start w-[700px] h-[600px] top-left left-0 relative bg-slate-100 rounded-2xl pl-6 py-5" data-aos="fade-down" data-aos-duration="2000">
      <label className="mb-2 pl-6">
          Full Name
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-md"
            placeholder=""
          />
        </label>

        <label className="mb-2 pl-6">
          Email
          <input
            type="email"
            className="w-full px-3 py-2 border rounded-md"
            placeholder=""
          />
        </label>

        <label className="mb-2 pl-6">
          Subject
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-md"
            placeholder=""
          />
        </label>

        <label className="mb-2 pl-6">
          Phone Number
          <input
            type="tel"
            className="w-full px-3 py-2 border rounded-md"
            placeholder=""
          />
        </label>

        <label className="mb-6 pl-6">
          Message
          <textarea
            rows="6"
            className="w-full px-3 py-2 border rounded-md"
            placeholder=""
          />
        </label>
         
        <div className="w-[211px] h-[54px] pl-6 top-[550px] absolute align-center">
        <button
      className="align-left select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 mt-2 rounded-lg bg-[#64003E] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
      type="button">
      Send Message
    </button>
        </div>
      </div>
      
      </section>
    </>
  );
};

export default Contact;
