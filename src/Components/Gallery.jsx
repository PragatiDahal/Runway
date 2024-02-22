import React from 'react'
import image from '../images/aero.jpg'

const Gallery = () => {
  
    return (
        <div className="self-stretch overflow-hidden flex flex-col items-center justify-start p-[13px] box-border gap-[132px] max-w-full text-justify text-lg text-fuchsia-950 font-poppins mq450:gap-[16px] mq750:gap-[33px] mq1225:gap-[66px]">
          <b className="w-[143px] h-7 relative inline-block box-border pl-5 pr-5">
            Gallery
          </b>
          <div className="w-[1097px] h-[1483px] flex flex-row flex-wrap items-center justify-center py-0 px-5 box-border relative gap-[79px] max-w-full text-mini text-white">
            <img
              className="h-[372px] w-[486px] absolute my-0 mx-[!important] top-[0px] left-[19.5px] object-cover"
              loading="eager"
              alt=""
              src={image}
            />
            <img
              className="h-[372px] w-[486px] absolute my-0 mx-[!important] top-[0px] left-[590.5px] object-cover"
              loading="eager"
              alt=""
              src={image}
            />
            <img
              className="h-[372px] w-[486px] absolute my-0 mx-[!important] top-[475px] left-[19.5px] object-cover"
              loading="eager"
              alt=""
              src={image}
            />
            <img
              className="h-[372px] w-[486px] absolute my-0 mx-[!important] top-[475px] left-[590.5px] object-cover"
              loading="eager"
              alt=""
              src={image}
            />
            <img
              className="h-[372px] w-[486px] absolute my-0 mx-[!important] top-[950px] left-[19.5px] object-cover"
              loading="eager"
              alt=""
              src={image}
            />
            <img
              className="h-[372px] w-[486px] absolute my-0 mx-[!important] top-[950px] left-[590.5px] object-cover"
              loading="eager"
              alt=""
              src={image}
            />
            <div className="w-[212px] my-0 mx-[!important] absolute top-[1425px] left-[443px] flex flex-row items-center justify-end py-4 pr-[25px] pl-[60px] box-border whitespace-nowrap">
              <div className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0.5px] bottom-[0px] left-[-0.5px] rounded-full bg-fuchsia-950" />
              <b className="h-[26px] flex-1 relative inline-block z-[1] text-left left-0">View All</b>
            </div>
          </div>
        </div>
  )
}

export default Gallery