import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Card = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className='flex flex-row gap-4 flex-wrap justify-center items-center'>
      <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96" data-aos="fade-up" data-aos-duration="2000">
  <div 
    className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
    <img
      src="https://i.pinimg.com/564x/f8/2c/df/f82cdf809219fb9aa4c58a2125018706.jpg"
      alt="card-image" />
  </div>
  <div className="p-6">
    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
    Student Pilot License (SPL)
    </h5>
    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
    A Student Pilot License (SPL) is a type of license that enables a student to fly a registered aircraft under the supervision or authority of a licensed instructor or be able to fly solo after receiving an endorsement from a licensed instructor.
    </p>
  </div>
  <div className="p-6 pt-0">
    <button
      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
      type="button">
      Read More
    </button>
  </div>
</div> 

<div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96" data-aos="fade-up" data-aos-duration="2000">
  <div
    className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
    <img
      src="https://i.pinimg.com/564x/24/f1/18/24f118e589d92d02b20528b506837f16.jpg"
      alt="card-image" />
  </div>
  <div className="p-6">
    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
    Priavte Pilot License (PPL)
    </h5>
    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
    The Private Pilot License (PPL) is a significant milestone for individuals aspiring to become licensed pilots. It represents a substantial step beyond the Student Pilot License (SPL) and allows holders to fly aircraft for personal or recreational purposes, with certain limitations.
    </p>
  </div>
  <div className="p-6 pt-0">
    <button
      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
      type="button">
      Read More
    </button>
  </div>
</div> 

<div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96"data-aos="fade-up" data-aos-duration="2000">
  <div
    className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
    <img
      src="https://images.unsplash.com/photo-1598087582627-7e976c49bb03?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="card-image" />
  </div>
  <div className="p-6">
    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
     Night Rating (NR)
    </h5>
    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
    The Night Rating (NR) is an endorsement added to a pilot's license that allows them to fly aircraft at night under visual flight rules (VFR). Obtaining a Night Rating is an important step for pilots looking to expand their flying capabilities and pursue flights after sunset or before sunrise.
    </p>
  </div>
  <div className="p-6 pt-0">
    <button
      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
      type="button">
      Read More
    </button>
  </div>
</div> 

<div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96" data-aos="fade-up" data-aos-duration="2000">
  <div
    className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
    <img
      src="https://images.unsplash.com/photo-1646157312887-a539f9211038?q=80&w=1902&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="card-image" />
  </div>
  <div className="p-6">
    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
    Hour Building
    </h5>
    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
    Hour building refers to the practice of accumulating flight hours as a pilot, typically beyond the minimum requirements for certification, for the purpose of gaining experience and proficiency. 
    </p>
  </div>
  <div className="p-6 pt-0">
    <button
      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
      type="button">
      Read More
    </button>
  </div>
</div> 

<div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96"data-aos="fade-up" data-aos-duration="2000">
  <div
    className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
    <img
      src="https://i.pinimg.com/564x/a0/aa/74/a0aa74f225caae9f3b9496b0573d5957.jpg"
      alt="card-image" />
  </div>
  <div className="p-6">
    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
    Commercial Pilot License (CPL)
    </h5>
    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
    A Commercial Pilot License (CPL) is a qualification that allows pilots to fly aircraft for compensation or hire. It is the next step for many pilots after obtaining their Private Pilot License (PPL) and is often a requirement for those seeking employment as professional pilots.
    </p>
  </div>
  <div className="p-6 pt-0">
    <button
      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
      type="button">
      Read More
    </button>
  </div>
</div> 
<div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96"data-aos="fade-up" data-aos-duration="2000">
  <div
    className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
    <img
      src="https://i.pinimg.com/564x/9b/6c/98/9b6c983582b35890a7db2cceaba39c5d.jpg"
      alt="card-image" />
  </div>
  <div className="p-6">
    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
    Instrument Rating (IR)
    </h5>
    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
    An Instrument Rating (IR) is an advanced qualification that allows a pilot to fly an aircraft solely by reference to the instruments in the cockpit, without relying on external visual cues. It is typically pursued by pilots who want to enhance their skills and abilities to safely navigate through various weather conditions.
    </p>
  </div>
  <div className="p-6 pt-0">
    <button
      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
      type="button">
      Read More
    </button>
  </div>
</div> 
<div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96"data-aos="fade-up" data-aos-duration="2000">
  <div
    className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
    <img
      src="https://i.pinimg.com/564x/47/b1/49/47b149b8e8406f31e729b56372e247c7.jpg"
      alt="card-image" />
  </div>
  <div className="p-6">
    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
    Multi-Engine Rating(MER)
    </h5>
    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
    A Multi-Engine Rating (MER) is an additional qualification that allows pilots to fly aircraft with more than one engine. While many pilots start their training on single-engine aircraft, obtaining a Multi-Engine Rating opens up opportunities to fly larger, more complex aircraft that require the management of multiple engines.
    </p>
  </div>
  <div className="p-6 pt-0">
    <button
      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
      type="button">
      Read More
    </button>
  </div>
</div> 
<div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96"data-aos="fade-up" data-aos-duration="2000">
  <div
    className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
    <img
      src="https://i.pinimg.com/564x/66/7f/b4/667fb4da0bc9240498aa75249a88ddfe.jpg"
      alt="card-image" />
  </div>
  <div className="p-6">
    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
    The Airline Transport Pilot License (ATPL)
    </h5>
    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
    The Airline Transport Pilot License (ATPL) is the highest level of pilot certification, representing the pinnacle of achievement in aviation. It is a rigorous qualification that signifies a pilot's ability to operate as a captain or first officer of large commercial aircraft in complex and demanding flight environments.
    </p>
  </div>
  <div className="p-6 pt-0">
    <button
      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
      type="button">
      Read More
    </button>
  </div>
</div> 
      </div>
    </>
   
  )
}

export default Card