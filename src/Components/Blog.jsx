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
      <div className="flex justify-center py-5">
        <h1 className="text-4xl font-bold" data-aos="zoom-in" data-aos-duration="2000"> From the Blog</h1>
      </div>
      <section className="flex flex-row flex-wrap justify-center gap-4 py-8">
        <div className="flex gap-4 justify-center bg-zinc-200 rounded-xl h-[500px] w-[450px] flex-wrap "data-aos="fade-up" data-aos-duration="2000">
          <img
            className="rounded-lg w-[450px] h-[250px] object-cover transition hover:scale-90 duration-1000"
            src={
              "https://images.unsplash.com/photo-1559711469-3395fc1dadb3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt=""
            srcset=""
          />
          <div className=" flex  justify-center text-xl font-bold text-[#64003E]" >
            Top ten reasons to join aviation
          </div>
          <div className="justify-center text-justify text-base text-black top-[500px] pl-4 pr-4">
            Are you dreaming of soaring through the skies, exploring new
            horizons, and experiencing the thrill of flight? A career in
            aviation could be your ticket to turning those dreams into
            reality.From the adrenaline rush of takeoff to the breathtaking
            views from the cockpit, aviation offers a world of opportunities and
            experiences like no other.
          </div>
        </div>
        <div className="flex gap-4 justify-center bg-zinc-200 rounded-xl h-[500px] w-[450px] flex-wrap" data-aos="fade-up" data-aos-duration="2000">
          <img
            className="rounded-lg w-[450px] h-[250px] object-cover transition hover:scale-90 duration-1000"
            src={
              "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt=""
            srcset=""
          />
          <div className="flex justify-center text-xl font-bold text-[#64003E]">
            Breaking Barriers: Women in Aviation
          </div>
          <div className="justify-center text-justify text-base text-black top-[500px] pl-4 pr-4">
            In an industry historically dominated by men, women are increasingly
            taking to the skies and breaking barriers in the world of aviation.
            From pioneering aviators to modern-day pilots, engineers, and
            astronauts, women have been making their mark and inspiring future
            generations to soar higher than ever before.
          </div>
        </div>
        <div className="flex gap-4 justify-center bg-zinc-200 rounded-xl h-[505px] w-[450px] flex-wrap" data-aos="fade-up" data-aos-duration="2000">
          <img
            className="rounded-lg w-[450px] h-[250px] object-cover transition hover:scale-90 duration-1000"
            src={
              "https://images.unsplash.com/photo-1517341392804-5f6daad2d02d?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt=""
            srcset=""
          />
          <div className="flex justify-center text-xl font-bold text-[#64003E] pl-4 pr-4">
            The Future of Aviation: Trends and Innovations
          </div>
          <div className="justify-center text-justify text-base text-black top-[500px] pl-4 pr-4">
            What does the future hold for aviation? As technology advances and
            global travel evolves, the aviation industry is poised for
            transformative changes. Let's take a closer look at some of the key
            trends and innovations shaping the future of flight.
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
