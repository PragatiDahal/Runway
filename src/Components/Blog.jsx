import React from 'react'
import image from '../images/aero.jpg'

const Blog = () => {
  return (
    <div className="self-stretch overflow-hidden flex flex-col items-center justify-start pt-[147px] pb-[65px] pr-[55px] pl-5 box-border gap-[90px] max-w-full text-justify text-lg text-fuchsia-950 font-poppins mq450:gap-[22px] mq750:gap-[45px] mq750:pt-10 mq750:pb-5 mq750:box-border mq1050:pt-[62px] mq1050:pb-[27px] mq1050:box-border mq1225:pt-24 mq1225:pr-[27px] mq1225:pb-[42px] mq1225:box-border">
      <div className="w-[295px] flex flex-row items-start justify-end">
        <b className="h-[50px] w-[180px] relative inline-block shrink-0">
          <span>From the</span>
          <span className="text-black"> Blog</span>
        </b>
      </div>
      <div className="w-[1161px] h-[1734px] flex flex-row flex-wrap items-center justify-center relative gap-[63px] max-w-full text-center text-base">
        <div className="w-[549px] my-0 mx-[!important] absolute top-[0px] left-[2px] flex flex-col items-center justify-start pt-0 px-0 pb-[87px] box-border gap-[55px] max-w-full">
          <div className="w-full h-full absolute my-0 mx-[!important] top-[0px] right-[0.5px] bottom-[0px] left-[-0.5px] bg-gainsboro-100" />
          <img
            className="self-stretch h-[319px] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
            loading="eager"
            alt=""
            src={image}
          />
          <div className="self-stretch flex flex-col items-center justify-start py-0 px-5 gap-[18px]">
            <div className="self-stretch flex flex-col items-end justify-start gap-[15px]">
              <b className="self-stretch h-8 relative inline-block shrink-0 z-[1]">
                "Top 10 Reasons to Pursue a Career in Aviation"
              </b>
              <div className="self-stretch h-[86px] relative text-smi text-black inline-block shrink-0 z-[1]">
                Are you dreaming of soaring through the skies, exploring new
                horizons, and experiencing the thrill of flight? A career in
                aviation could be your ticket to turning those dreams into
                reality.
              </div>
            </div>
        {/* button */}
          </div>
        </div>
        <div className="w-[546px] my-0 mx-[!important] absolute top-[0px] left-[615px] flex flex-col items-center justify-start pt-0 px-0 pb-[90px] box-border gap-[39px] max-w-full">
          <div className="w-full h-full absolute my-0 mx-[!important] right-[0.5px] bottom-[0px] left-[-0.5px] bg-gainsboro-100" />
          <img
            className="self-stretch h-[319.8px] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
            loading="eager"
            alt=""
            src={image}
          />
          <div className="self-stretch flex flex-row items-start justify-start  pt- [50px] py-0 pr-[39px] pl-5 box-border max-w-full shrink-0">
            <div className="flex-1 flex flex-col items-end justify-start gap-[22px] max-w-full">
              <b className="self-stretch h-[30.3px] relative inline-block shrink-0 z-[1]">
                Adventure and Exploration
              </b>
              <div className="self-stretch h-[73.9px] relative text-smi text-black inline-block shrink-0 z-[1]">
                Aviation opens doors to endless adventures and exploration. As a
                pilot, you'll have the opportunity to travel to exotic
                destinations, experience different cultures, and witness
                breathtaking landscapes from above.
              </div>
            </div>
          </div>
          <div className="w-[228px] flex flex-row items-start justify-start py-0 pr-[18px] pl-0 box-border">
            {/* button */}
          </div>
        </div>
        <div className="w-[548px] my-0 mx-[!important] absolute top-[838px] left-[0px] flex flex-col items-center justify-start pt-0 px-0 pb-[94px] box-border gap-[27px] max-w-full text-lg">
          <div className="w-full h-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gainsboro-100" />
          <img
            className="self-stretch h-[320.3px] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
            loading="eager"
            alt=""
            src={image}
          />
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[37px] pl-[23px] box-border max-w-full shrink-0">
            <div className="flex-1 flex flex-col items-center justify-start gap-[48px] max-w-full">
              <div className="w-80 flex flex-row items-start justify-start py-0 pr-[17px] pl-0 box-border">
                <b className="h-[30.4px] flex-1 relative inline-block shrink-0 z-[1]">
                  Thrilling Challenges
                </b>
              </div>
              <div className="self-stretch h-[50.6px] relative text-smi text-black inline-block shrink-0 z-[1]">
                Flying an aircraft requires skill, precision, and quick
                decision-making, making it one of the most challenging and
                rewarding careers out there
              </div>
              <div className="w-[214px] flex flex-row items-start justify-start py-0 pr-4 pl-0 box-border">
                {/* button */}
              </div>
            </div>
          </div>
        </div>
        <div className="w-[548px] my-0 mx-[!important] absolute top-[838px] left-[613px] flex flex-col items-center justify-start pt-0 px-0 pb-[84px] box-border gap-[33px] max-w-full text-lg">
          <div className="w-full h-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gainsboro-100" />
          <img
            className="self-stretch h-[320.3px] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
            loading="eager"
            alt=""
            src={image}
          />
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[34px] pl-6 box-border max-w-full shrink-0">
            <div className="flex-1 flex flex-col items-center justify-start gap-[48px] max-w-full">
              <div className="self-stretch flex flex-col items-center justify-start gap-[42px]">
                <b className="w-[312.5px] h-[30.4px] relative inline-block shrink-0 z-[1]">
                  High Demand for Professionals
                </b>
                <div className="self-stretch h-[60.7px] relative text-smi text-black inline-block z-[1]">
                  With the global aviation industry experiencing rapid growth,
                  there is a high demand for skilled aviation professionals,
                  including pilots, air traffic controllers, maintenance
                  technicians, and more
                </div>
              </div>
              <div className="w-52 flex flex-row items-start justify-start py-0 pr-0 pl-2.5 box-border">
                {/* button */}
              </div>
            </div>
          </div>
        </div>
        <div className="w-[211px] my-0 mx-[!important] absolute top-[1676px] left-[475px] flex flex-row items-center justify-end py-4 px-2.5 box-border whitespace-nowrap text-justify text-mini text-white">
          <div className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-full bg-purple-100" />
          <b className="h-[26px] w-[126px] relative inline-block shrink-0 z-[1]">View All </b>
        </div>
      </div>
    </div>
  )
}

export default Blog