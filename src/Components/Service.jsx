import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Cards({
  heading,
  description,
  thumbnailSrc,
  thumbnailAlt = "Thumbnail",
  className,
}) {
  return (
    <div className={`rounded-lg p-6 hover:bg-pink-200 duration-500 ease-in-out shadow-sm ${className}`}>
      <div className="overflow-hidden rounded-lg">
        <img
          className="w-full cursor-pointer transition duration-1000 ease-in-out transform hover:scale-110 rounded-lg h-auto"
          src={thumbnailSrc}
          alt={thumbnailAlt}
        />
      </div>
      <h3 className="pt-5 text-2xl font-bold text-gray-600 block">
        {heading}
      </h3>
      <p className="font-normal text-gray-500 cursor-pointer text-lg duration-300 transition  mt-2">
        {description}
      </p>
    </div>
  );
}

const Service = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className='flex justify-center items-center py-8'>
        <h1  data-aos="zoom-in" data-aos-duration="2000"className='font-bold text-4xl'>Services</h1>
      </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-3 sm:p-8" data-aos="fade-down" data-aos-duration="2000">
      <Cards
        className="bg-[#fcf4ff]"
        heading="Admission Assistance"
        description="Experienced counselors assist students in choosing the right aviation programs and universities abroad based on their interests, academic background, and career aspirations. Interaction and Experience Share."
        thumbnailSrc="https://images.unsplash.com/photo-1464490997959-0c65eee1cc26?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Cards
        className="bg-[#fefaf0]"
        heading="Visa Guidance"
        description="Runway 02 Aviation Institute helps students identify suitable universities and aviation schools overseas that offer high-quality education and training programs in aviation-related disciplines"
        thumbnailSrc="https://images.unsplash.com/photo-1454496406107-dc34337da8d6?q=80&w=1900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Cards
        className="bg-[#f3faff]"
        heading="Pre-Departure Orientation"
        description="The institute guides students through the entire admission process, including application submission, document preparation, and interview preparation, ensuring that they meet all requirements for admission to their chosen aviation programs."
        thumbnailSrc="https://images.unsplash.com/photo-1503379230423-19c53f7e9a33?q=80&w=3546&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Cards
        className="bg-[#fcf4ff]"
        heading="Guidance in Appropriate Flight School Selection."
        description="Runway 02 Aviation Institute helps students identify suitable universities and aviation schools overseas that offer high-quality education and training programs in aviation-related disciplines."
        thumbnailSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Cards
        className="bg-[#fefaf0]"
        heading="Post-Arrival Support"
        description="Runway 02 Aviation Institute continues to support students after their arrival abroad, providing assistance with settling into their new environment, resolving any initial challenges, and adjusting to academic and cultural differences."
        thumbnailSrc="https://images.unsplash.com/photo-1522474252234-127492dde7f4?q=80&w=2055&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Cards
        className="bg-[#f3faff]"
        heading="Aviation Counseling"
        description="Experienced counselors assist students in choosing the right aviation programs and universities abroad based on their interests, academic background, and career aspirations. Interaction and Experience Share.        "
        thumbnailSrc="https://images.unsplash.com/photo-1529074963764-98f45c47344b?q=80&w=1786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
    </>
  )
}

export default Service