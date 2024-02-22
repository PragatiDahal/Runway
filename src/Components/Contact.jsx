import React from 'react'
import { useState } from "react";

const Contact = () => {
  const [viewAllButtonValue, setViewAllButtonValue] = useState("");
  const [frameValue, setFrameValue] = useState("");
  const [rectangleInputValue, setRectangleInputValue] = useState("");
  const [rectangleInput1Value, setRectangleInput1Value] = useState("");
  return (
    <div className="flex-1 overflow-hidden flex flex-col items-center justify-start pt-10 pb-[23px] pr-5 pl-[22px] box-border gap-[26px] max-w-full text-justify text-lg text-fuchsia-950 font-poppins mq750:pt-[26px] mq750:pb-5 mq750:box-border">
      <div className="flex flex-row items-start justify-start py-0 pr-[22px] pl-0">
        <b className="h-10 w-28 relative inline-block">
          <span>Contact</span>
          <span className="text-black"> Us</span>
        </b>
      </div>
      <div className="w-[1192px] flex flex-row items-start justify-start gap-[99px] max-w-full text-xs text-black mq750:gap-[25px] mq1050:flex-wrap mq1225:gap-[49px]">
        <div className="flex-1 flex flex-col items-start justify-start relative gap-[48px] min-w-[408px] max-w-full mq750:gap-[24px] mq750:min-w-full">
          <b className="w-[154px] h-[35px] relative text-base inline-block shrink-0">
            <p className="m-0">Let’s get in touch</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">&nbsp;</p>
          </b>
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq750:flex-wrap">
            <input
              className="[border:none] [outline:none] bg-gainsboro-100 h-10 w-[261px] relative"
              type="text"
              value={viewAllButtonValue}
              onChange={(event) => setViewAllButtonValue(event.target.value)}
            />
            <input
              className="[border:none] [outline:none] bg-gainsboro-100 h-10 w-[261px] relative"
              type="text"
              value={frameValue}
              onChange={(event) => setFrameValue(event.target.value)}
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq750:flex-wrap">
            <input
              className="[border:none] [outline:none] bg-gainsboro-100 h-10 w-[261px] relative"
              type="text"
              value={rectangleInputValue}
              onChange={(event) => setRectangleInputValue(event.target.value)}
            />
            <input
              className="[border:none] [outline:none] bg-gainsboro-100 h-10 w-[261px] relative"
              type="text"
              value={rectangleInput1Value}
              onChange={(event) => setRectangleInput1Value(event.target.value)}
            />
          </div>
          <input className="w-[82px] h-[19px] absolute my-0 mx-[!important] top-[93px] left-[20px] inline-block z-[1] placeholder:Full Name">
          </input>
          <div className="w-[45px] h-[19px] absolute my-0 mx-[!important] top-[181px] left-[20px] inline-block z-[1]">
            Subject
          </div>
          <div className="w-[213px] h-[34px] absolute my-0 mx-[!important] bottom-[168px] left-[20px] inline-block z-[1]">
            Write message
          </div>
          <div className="w-[82px] h-[19px] absolute my-0 mx-[!important] top-[181px] right-[159px] inline-block z-[1]">
            Phonre no.
          </div>
          <div className="w-[33px] h-[19px] absolute my-0 mx-[!important] top-[93px] right-[208px] inline-block z-[1]">
            Email
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[32px] mq750:gap-[16px]">
            <textarea
              className="[border:none] bg-gainsboro-100 h-[133px] w-auto [outline:none] self-stretch relative"
              rows={7}
              cols={31}
            />
            <button className="cursor-pointer [border:none] py-4 pr-[43px] pl-[42px] bg-[transparent] w-[211px] flex flex-row items-center justify-center box-border relative whitespace-nowrap">
              <div className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-full bg-fuchsia-950" />
              <b className="h-[30px] flex-1 relative text-mini inline-block font-poppins text-white text-center z-[1] pt-[5px]">
                Send message
              </b>
            </button>
          </div>
        </div>
        <div className="w-[465px] flex flex-col items-start justify-start pt-[23px] px-[33px] pb-[95px] box-border relative gap-[38px] min-w-[465px] max-w-full text-smi mq450:gap-[19px] mq450:pt-5 mq450:pb-[62px] mq450:box-border mq750:min-w-full mq1050:flex-1">
          <div className="w-full h-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-11xl bg-gainsboro-100" />
          <div className="w-[314px] flex flex-col items-end justify-start gap-[25px] text-base">
            <div className="w-[229px] flex flex-row items-start justify-start py-0 px-[55px] box-border">
              <b className="h-[33px] flex-1 relative inline-block z-[1]">
                <span>{`Our `}</span>
                <span className="text-fuchsia-950">Address</span>
              </b>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-smi mq450:flex-wrap">
              <img
                className="h-[30px] w-[30px] relative object-cover z-[1]"
                loading="eager"
                alt=""
                src="/location@2x.png"
              />
              <div className="h-[47px] w-[226px] relative inline-block shrink-0 z-[1]">
                <p className="m-0">
                  <b>Location :</b>
                </p>
                <p className="m-0">New Baneshwor, Kathmandu</p>
              </div>
            </div>
          </div>
          <div className="w-[314px] flex flex-row items-center justify-between pt-0 px-0 pb-4 box-border gap-[20px]">
            <img
              className="h-[30px] w-[30px] relative object-cover z-[1]"
              loading="eager"
              alt=""
              src="/phone@2x.png"
            />
            <div className="h-[47px] w-[226px] relative inline-block shrink-0 z-[1]">
              <p className="m-0">
                <b>Phone number :</b>
              </p>
              <p className="m-0">New Baneshwor, Kathmandu</p>
            </div>
          </div>
          <div className="w-[314px] flex flex-row items-start justify-between gap-[20px]">
            <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
              <img
                className="w-[30px] h-[30px] relative object-cover z-[1]"
                loading="eager"
                alt=""
                src="/email@2x.png"
              />
            </div>
            <div className="h-[47px] w-[226px] relative inline-block shrink-0 z-[1]">
              <p className="m-0">
                <b>Email :</b>
              </p>
              <p className="m-0">New Baneshwor, Kathmandu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

  


export default Contact