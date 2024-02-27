import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Blog = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-[1523px] h-[1576px] relative bg-white">
    
      <div  data-aos ="zoom-in"   data-aos-duration="2000" className='flex justify-center items-center py-5'>
        <h1 className='font-bold text-4xl'>From the Blog</h1>
        </div>
      {/* blog1 */}
      <section className="relative left-16  ">
      <div data-aos="flip-up" data-aos-duration="2000" className="w-[455px] h-[544px] left-0px top-[135px] absolute  ">
        <div className="w-[455px] h-[544px] left-0 top-0 absolute bg-zinc-300 rounded-[30px] transition ease-in-out delay-150  hover:bg-pink-100 duration-300" />
        <div className="w-[414.69px] h-[77.01px] left-[1px] top-[354px] absolute pl-4 text-black text-base font-normal font-poppins text-justify">
          Are you dreaming of soaring through the skies, exploring new horizons,
          and experiencing the thrill of flight? A career in aviation could be
          your ticket to turning those dreams into reality.
        </div>
        <img
          className="w-[455px] h-[285px] left-0 top-0 absolute rounded-[30px] transition hover:scale-90 duration-1000"
          src={"https://images.unsplash.com/photo-1559711469-3395fc1dadb3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        />
        <div className="w-[397px] h-[25px] left-[22px] top-[307px] absolute text-center text-fuchsia-950 text-base font-bold font-poppins">
          Top 10 Reasons to Pursue a Career in Aviation
        </div>
      </div>

      {/* blog2 */}
      <div data-aos="flip-up" data-aos-duration="2000"  className="w-[455px] h-[544px] left-0px top-[790px] absolute">
        <div className="w-[455px] h-[544px] left-0 top-0 absolute bg-zinc-300 rounded-[30px] transition ease-in-out delay-150  hover:bg-pink-100 duration-300" />
        <div className="w-[402px] h-[79px] left-[22px] top-[354px] absolute  text-black text-base font-normal font-poppins text-justify p-4">
          With the global aviation industry experiencing rapid growth, there is
          a high demand for skilled aviation professionals, including pilots,
          air traffic controllers, maintenance technicians, and more
        </div>
        <img
          className="w-[455px] h-[285px] left-0 top-0 absolute rounded-[30px] transition hover:scale-90 duration-1000"
          src={"https://images.unsplash.com/photo-1530469353049-18df0403f42b?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        />
        <div className="w-[397px] h-[25px] left-[22px] top-[307px] absolute text-justify pl-4 text-fuchsia-950 text-base font-bold font-poppins">
          High Demand for Professionals
        </div>
      </div>

      {/* Blog3 */}
      <div data-aos="flip-up" data-aos-duration="2000"  className="w-[455px] h-[544px] left-[500px] top-[790px] absolute">
        <div className="w-[455px] h-[544px] left-0 top-0 absolute bg-zinc-300 rounded-[30px] transition ease-in-out delay-150  hover:bg-pink-100 duration-300" />
        <div className="w-[414.69px] h-[77.01px] left-[1px] top-[354px] absolute text-justify pl-4 text-black text-base font-normal font-poppins">
          Aviation careers offer competitive salaries and attractive benefits
          packages, making them financially rewarding options. Pilots, in
          particular, enjoy lucrative salary packages, especially as they gain
          experience and advance in their careers.
        </div>
        <img
          className="w-[455px] h-[285px] left-0 top-0 absolute rounded-[30px] transition hover:scale-90 duration-1000"
          src={"https://images.unsplash.com/photo-1538688423619-a81d3f23454b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        />
        <div className="w-[397px] h-[25px] left-[22px] top-[307px] absolute text-justify pl-4 text-fuchsia-950 text-base font-bold font-poppins">
          Competitive Salaries and Benefits
        </div>
      </div>

      {/* Blog4 */}
      <div data-aos="flip-up" data-aos-duration="2000"  className="w-[455px] h-[544px] left-[1000px] top-[790px] absolute">
        <div className="w-[455px] h-[544px] left-0 top-0 absolute bg-zinc-300 rounded-[30px] transition ease-in-out delay-150  hover:bg-pink-100 duration-300" />
        <div className="w-[414.69px] h-[77.01px] left-[1px] top-[354px] absolute text-justify pl-4 text-black text-base font-normal font-poppins">
          The field of aviation offers a wide range of career paths to suit
          various interests and skill sets. Whether you aspire to be a
          commercial airline pilot, a military aviator, a helicopter pilot, or
          an aerospace engineer, there are countless opportunities to pursue
          your passion and carve out a fulfilling career in the industry.
        </div>
        <img
          className="w-[455px] h-[285px] left-0 top-0 absolute rounded-[30px] transition hover:scale-90 duration-1000"
          src={"https://images.unsplash.com/photo-1623945253439-f77e7591f9c8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        />
        <div className="w-[397px] h-[25px] left-[22px] top-[307px] absolute text-center text-fuchsia-950 text-base font-bold font-poppins">
          Diverse Career Paths
        </div>
      </div>

      {/* Blog5 */}
      <div data-aos="flip-up" data-aos-duration="2000"   className="w-[455px] h-[544px] left-[500px] top-[135px] absolute">
        <div className="w-[455px] h-[544px] left-0 top-0 absolute bg-zinc-300 rounded-[30px] transition ease-in-out delay-150  hover:bg-pink-100 duration-300" />
        <div className="w-[414.69px] h-[77.01px] left-[18px] top-[358px] absolute text-justify pl-4 text-black text-base font-normal font-poppins">
          Aviation opens doors to endless adventures and exploration. As a
          pilot, you'll have the opportunity to travel to exotic destinations,
          experience different cultures, and witness breathtaking landscapes
          from above.
        </div>
        <img
          className="w-[455px] h-[285px] left-0 top-0 absolute rounded-[30px] transition hover:scale-90 duration-1000"
          src={"https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        />
        <div className="w-[397px] h-[25px] left-[22px] top-[307px] absolute text-center text-fuchsia-950 text-base font-bold font-poppins">
          Adventure and Exploration
        </div>
      </div>

      {/* Blog6 */}
      <div data-aos="flip-up"data-aos-duration="2000"  className="w-[455px] h-[544px] left-[1000px] top-[135px] absolute">
        <div className="w-[455px] h-[544px] left-0 top-0 absolute bg-zinc-300 rounded-[30px] transition ease-in-out delay-150  hover:bg-pink-100 duration-300" />
        <div className="w-[414.69px] h-[77.01px] left-[14px] top-[356px] absolute text-justify pl-4 text-black text-base font-normal font-poppins">
          Flying an aircraft requires skill, precision, and quick
          decision-making, making it one of the most challenging and rewarding
          careers out there.From mastering complex maneuvers to navigating
          through adverse weather conditions, every flight presents new
          challenges
        </div>
        <img
          className="w-[455px] h-[285px] left-0 top-0 absolute rounded-[30px] transition hover:scale-90 duration-1000"
          src={"https://images.unsplash.com/photo-1517341392804-5f6daad2d02d?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        />
        <div className="w-[181px] h-[25px] left-[117px] top-[312px] absolute text-center text-fuchsia-950 text-base font-bold font-poppins">
          Thrilling Challenges
        </div>
      </div>
      </section>
  
    </div>
  );
};

export default Blog;
