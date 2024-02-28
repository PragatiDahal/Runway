import React from "react";
import image from "../images/aero.jpg";
import Region from "./Region";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="flex justify-center py-5">
        <h1
          className="text-4xl font-bold"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
        About RUNWAY 02
        </h1>
      </div>
      <div className="max-w-[1200px] mx-auto w-[1200px] bg-white rounded-xl py-20 px-5 top-[200px] shadow-md overflow-hidden md:max-w-[1200px]" data-aos="fade-up" data-aos-duration="2000">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-[500px] w-[500px] object-cover md:h-[500px] md:w-[500px]"
              src={
                "https://images.unsplash.com/flagged/photo-1555685460-1d9cf532761b?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt=""
            />
          </div>
          <div className="p-8">
            
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              RUNWAY 02  your dream builder established on a foundation of trust and loyalty
            </a>
            <p className="mt-2 text-slate-500">
              Welcome to Runway 02 Aviation Institute, where dreams take flight
              and soar beyond horizons. With a legacy of excellence in aviation
              education, Runway 02 is your gateway to a dynamic and rewarding
              career in the skies. As a premier aviation institute, we are
              committed to nurturing the next generation of aviation
              professionals and empowering them to reach new heights of success.
            </p>
            <br />
            <p className="mt-2 text-slate-500">
              At Runway 02, we believe in the power of ambition, dedication, and
              knowledge to transform dreams into reality. Our institute is
              dedicated to providing comprehensive training programs that equip
              students with the skills, expertise, and confidence to excel in
              the competitive field of aviation. Whether you aspire to become a
              pilot, aircraft engineer, air traffic controller, or aviation
              manager, Runway 02 offers a diverse range of courses tailored to
              meet your aspirations and goals.
            </p>
          </div>
        </div>
      </div>
      <section>
        <Region />
      </section>
    </>
  );
};

export default About;
