import React from "react";
import image from "../images/aero.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Blog = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-[1523px] h-[1576px] relative bg-white">
      <div data-aos ="zoom-in"   data-aos-duration="2000" className="w-[181px] h-10 left-[658px] top-[49px] absolute">
        <span className="text-fuchsia-950 text-xl font-bold font-poppins">
          FROM{" "}
        </span>
        <span className="text-black text-xl font-bold font-poppins">
          THE BLOG
        </span>
      </div>
      {/* blog1 */}
      <div data-aos="flip-up" data-aos-duration="2000" className="w-[455px] h-[544px] left-[31px] top-[179px] absolute  ">
        <div className="w-[455px] h-[544px] left-0 top-0 absolute bg-zinc-300 rounded-[30px] transition ease-in-out delay-150  hover:bg-pink-100 duration-300" />
        <div className="w-[414.69px] h-[77.01px] left-[1px] top-[354px] absolute text-center text-black text-base font-normal font-poppins">
          Are you dreaming of soaring through the skies, exploring new horizons,
          and experiencing the thrill of flight? A career in aviation could be
          your ticket to turning those dreams into reality.
        </div>
        <img
          className="w-[455px] h-[285px] left-0 top-0 absolute rounded-[30px] transition hover:scale-110"
          src={image}
        />
        <div className="w-[397px] h-[25px] left-[22px] top-[307px] absolute text-center text-fuchsia-950 text-base font-bold font-poppins">
          Top 10 Reasons to Pursue a Career in Aviation
        </div>
      </div>

      {/* blog2 */}
      <div data-aos="flip-up" data-aos-duration="2000"  className="w-[455px] h-[544px] left-[32px] top-[811px] absolute">
        <div className="w-[455px] h-[544px] left-0 top-0 absolute bg-zinc-300 rounded-[30px] transition ease-in-out delay-150  hover:bg-pink-100 duration-300" />
        <div className="w-[402px] h-[79px] left-[22px] top-[354px] absolute text-center text-black text-base font-normal font-poppins">
          With the global aviation industry experiencing rapid growth, there is
          a high demand for skilled aviation professionals, including pilots,
          air traffic controllers, maintenance technicians, and more
        </div>
        <img
          className="w-[455px] h-[285px] left-0 top-0 absolute rounded-[30px] transition hover:scale-110"
          src={image}
        />
        <div className="w-[397px] h-[25px] left-[22px] top-[307px] absolute text-center text-fuchsia-950 text-base font-bold font-poppins">
          High Demand for Professionals
        </div>
      </div>

      {/* Blog3 */}
      <div data-aos="flip-up" data-aos-duration="2000"  className="w-[455px] h-[544px] left-[527px] top-[811px] absolute">
        <div className="w-[455px] h-[544px] left-0 top-0 absolute bg-zinc-300 rounded-[30px] transition ease-in-out delay-150  hover:bg-pink-100 duration-300" />
        <div className="w-[414.69px] h-[77.01px] left-[1px] top-[354px] absolute text-center text-black text-base font-normal font-poppins">
          Aviation careers offer competitive salaries and attractive benefits
          packages, making them financially rewarding options. Pilots, in
          particular, enjoy lucrative salary packages, especially as they gain
          experience and advance in their careers.
        </div>
        <img
          className="w-[455px] h-[285px] left-0 top-0 absolute rounded-[30px] transition hover:scale-110"
          src={image}
        />
        <div className="w-[397px] h-[25px] left-[22px] top-[307px] absolute text-center text-fuchsia-950 text-base font-bold font-poppins">
          Competitive Salaries and Benefits
        </div>
      </div>

      {/* Blog4 */}
      <div data-aos="flip-up" data-aos-duration="2000"  className="w-[455px] h-[544px] left-[1043px] top-[811px] absolute">
        <div className="w-[455px] h-[544px] left-0 top-0 absolute bg-zinc-300 rounded-[30px] transition ease-in-out delay-150  hover:bg-pink-100 duration-300" />
        <div className="w-[414.69px] h-[77.01px] left-[1px] top-[354px] absolute text-center text-black text-base font-normal font-poppins">
          The field of aviation offers a wide range of career paths to suit
          various interests and skill sets. Whether you aspire to be a
          commercial airline pilot, a military aviator, a helicopter pilot, or
          an aerospace engineer, there are countless opportunities to pursue
          your passion and carve out a fulfilling career in the industry.
        </div>
        <img
          className="w-[455px] h-[285px] left-0 top-0 absolute rounded-[30px] transition hover:scale-110"
          src={image}
        />
        <div className="w-[397px] h-[25px] left-[22px] top-[307px] absolute text-center text-fuchsia-950 text-base font-bold font-poppins">
          Diverse Career Paths
        </div>
      </div>

      {/* Blog5 */}
      <div data-aos="flip-up" data-aos-duration="2000"   className="w-[455px] h-[544px] left-[527px] top-[186px] absolute">
        <div className="w-[455px] h-[544px] left-0 top-0 absolute bg-zinc-300 rounded-[30px] transition ease-in-out delay-150  hover:bg-pink-100 duration-300" />
        <div className="w-[414.69px] h-[77.01px] left-[18px] top-[358px] absolute text-center text-black text-base font-normal font-poppins">
          Aviation opens doors to endless adventures and exploration. As a
          pilot, you'll have the opportunity to travel to exotic destinations,
          experience different cultures, and witness breathtaking landscapes
          from above.
        </div>
        <img
          className="w-[455px] h-[285px] left-0 top-0 absolute rounded-[30px] transition hover:scale-110"
          src={image}
        />
        <div className="w-[397px] h-[25px] left-[22px] top-[307px] absolute text-center text-fuchsia-950 text-base font-bold font-poppins">
          Adventure and Exploration
        </div>
      </div>

      {/* Blog6 */}
      <div data-aos="flip-up"data-aos-duration="2000"  className="w-[455px] h-[544px] left-[1029px] top-[179px] absolute">
        <div className="w-[455px] h-[544px] left-0 top-0 absolute bg-zinc-300 rounded-[30px] transition ease-in-out delay-150  hover:bg-pink-100 duration-300" />
        <div className="w-[414.69px] h-[77.01px] left-[14px] top-[356px] absolute text-center text-black text-base font-normal font-poppins">
          Flying an aircraft requires skill, precision, and quick
          decision-making, making it one of the most challenging and rewarding
          careers out there.From mastering complex maneuvers to navigating
          through adverse weather conditions, every flight presents new
          challenges
        </div>
        <img
          className="w-[455px] h-[285px] left-0 top-0 absolute rounded-[30px] transition hover:scale-110"
          src={image}
        />
        <div className="w-[181px] h-[25px] left-[117px] top-[312px] absolute text-center text-fuchsia-950 text-base font-bold font-poppins">
          Thrilling Challenges
        </div>
      </div>
    </div>
  );
};

export default Blog;
