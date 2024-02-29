import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Blog = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
    <div className="flex justify-center py-8">
        <h1 className="text-4xl font-bold" data-aos="zoom-in" data-aos-duration="2000"> From the Blog</h1>
      </div>
      <div className="flex flex-row gap-6 flex-wrap justify-center items-center">
        <div
          className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40 transition hover:scale-90 duration-1000" >
            <img 
              src="https://images.unsplash.com/photo-1559711469-3395fc1dadb3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="image"
            />
          </div>
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl text-[#64003E] antialiased font-bold leading-snug tracking-normal text-blue-gray-900">
              Top ten reasons to join aviation
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              Are you dreaming of soaring through the skies, exploring new
              horizons, and experiencing the thrill of flight? A career in
              aviation could be your ticket to turning those dreams into
              reality.From the adrenaline rush of takeoff to the breathtaking
              views from the cockpit, aviation offers a world of opportunities
              and experiences like no other.
            </p>
          </div>
        </div>

        <div
          className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40 transition hover:scale-90 duration-1000">
            <img
              src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="image"
            />
          </div>
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl text-[#64003E] antialiased font-bold leading-snug tracking-normal text-blue-gray-900">
              Breaking Barriers: Women in Aviation
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              In an industry historically dominated by men, women are
              increasingly taking to the skies and breaking barriers in the
              world of aviation. From pioneering aviators to modern-day pilots,
              engineers, and astronauts, women have been making their mark and
              inspiring future generations.
            </p>
          </div>
        </div>

        <div
          className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40 transition hover:scale-90 duration-1000">
            <img
              src="https://images.unsplash.com/photo-1517341392804-5f6daad2d02d?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="image"
            />
          </div>
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl text-[#64003E] antialiased font-bold leading-snug tracking-normal text-blue-gray-900">
              The Future of Aviation: Trends and Innovations
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              What does the future hold for aviation? As technology advances and
              global travel evolves, the aviation industry is poised for
              transformative changes. Let's take a closer look at some of the
              key trends and innovations shaping the future of flight.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
