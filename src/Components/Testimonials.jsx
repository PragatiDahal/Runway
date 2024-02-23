import React from "react";
import quote from "../images/quote-left-icon.png";
import right from "../images/angle-right-icon.png";
import left from "../images/angle-left-icon.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const Testimonials = () => {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem>
          <div className="w-[1000px] h-[600px] mx-auto overflow-hidden flex flex-col items-center justify-start pt-[178px] pb-14 pr-[76px] pl-[50px] box-border gap-[39px] max-w-full mt-[-114px] text-justify text-lg text-fuchsia-950 font-poppins mq750:gap-[19px] mq750:pl-[25px] mq750:pr-[38px] mq750:pb-9 mq750:box-border">
            <div className="w-64 flex flex-row items-start justify-end">
              <b className="h-[41px] w-[213px] relative inline-block shrink-0">
                <span className="font-bold text-xl">Student</span>
                <span className="text-black font-bold tect-xl"> Testimonials</span>
              </b>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-end justify-between pt-[91px] px-0 pb-0 box-border relative gap-[20px] max-w-full text-center text-smi text-black">
              <img
                className="h-5 w-7 absolute my-0 mx-[!important] top-[0px] left-[calc(50%_-_10px)] object-cover"
                loading="eager"
                alt=""
                src={quote}
              />
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-[50px] w-[50px] relative">
                <div className="absolute top-[0px] left-[0px] bg-gainsboro-100 w-full h-full" />
              </button>
              <div className="w-[971px] pt-0 flex flex-col items-start justify-start min-h-[225px] max-w-full">
                <div className="w-[800px] h-[104px] left-[50px] relative inline-block shrink-0">
                  Working with Runway Aviation has been a game-changer for me.
                  Their in-depth knowledge of the aviation industry, combined
                  with their tailored approach to career development. They took
                  the time to understand my goals and aspirations and provided
                  practical advice and guidance that helped me chart a
                  successful career path in aviation. I highly recommend Runway
                  to anyone looking to kick start their career in this exciting
                  and dynamic field
                </div>
              </div>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-[50px] w-[50px] relative">
                <div className="absolute top-[0px] left-[0px] bg-gainsboro-100 w-full h-full" />
              </button>
            </div>
          </div>
        </CarouselItem>
        

        <CarouselItem>
          <div className="self-stretch overflow-hidden flex flex-col items-center justify-start pt-[178px] pb-14 pr-[76px] pl-[50px] box-border gap-[39px] max-w-full mt-[-114px] text-justify text-lg text-fuchsia-950 font-poppins mq750:gap-[19px] mq750:pl-[25px] mq750:pr-[38px] mq750:pb-9 mq750:box-border" />
          <div className="w-64 flex flex-row items-start justify-end"></div>
          <div className="self-stretch flex flex-row flex-wrap items-end justify-between pt-[91px] px-0 pb-0 box-border relative gap-[20px] max-w-full text-center text-smi text-black">
            <img
              className="h-5 w-7 absolute my-0 mx-[!important] top-[0px] left-[calc(50%_-_10px)] object-cover"
              loading="eager"
              alt=""
              src={quote}
            />
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-[50px] w-[50px] relative">
              <div className="absolute top-[0px] left-[0px] bg-gainsboro-100 w-full h-full" />
            </button>
            <div className="w-[971px] flex flex-col items-start justify-start min-h-[225px] max-w-full">
              <div className="self-stretch h-[104px] relative inline-block shrink-0">
                As a student at Runway Aviation Institute, I can confidently say
                that my experience has exceeded my expectations. The faculty
                members are not only knowledgeable and experienced professionals
                in the aviation industry but also incredibly supportive and
                dedicated to helping students succeed.
              </div>
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-[50px] w-[50px] relative">
              <div className="absolute top-[0px] left-[0px] bg-gainsboro-100 w-full h-full" />
            </button>
          </div>
        </CarouselItem>
      

        <CarouselItem>
          <div className="self-stretch overflow-hidden flex flex-col items-center justify-start pt-[178px] pb-14 pr-[76px] pl-[50px] box-border gap-[39px] max-w-full mt-[-114px] text-justify text-lg text-fuchsia-950 font-poppins mq750:gap-[19px] mq750:pl-[25px] mq750:pr-[38px] mq750:pb-9 mq750:box-border" />
          <div className="w-64 flex flex-row items-start justify-end" />
          <div className="self-stretch flex flex-row flex-wrap items-end justify-between pt-[91px] px-0 pb-0 box-border relative gap-[20px] max-w-full text-center text-smi text-black">
            <img
              className="h-5 w-7 absolute my-0 mx-[!important] top-[0px] left-[calc(50%_-_10px)] object-cover"
              loading="eager"
              alt=""
              src={quote}
            />
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-[50px] w-[50px] relative">
              <div className="absolute top-[0px] left-[0px] bg-gainsboro-100 w-full h-full" />
            </button>
            <div className="w-[971px] flex flex-col items-start justify-start min-h-[225px] max-w-full">
              <div className="self-stretch h-[104px] relative inline-block shrink-0">
                Runway Aviation Exceeded my expectations in every way. Their
                team's wealth of experience and industry connections provided me
                with invaluable insights and opportunities that I wouldn't have
                had access to otherwise. From refining my resume to preparing
                for interviews, they provided personalized support that
                empowered me to land a competitive internship and kickstart my
                career in aviation.
              </div>
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-[50px] w-[50px] relative">
              <div className="absolute top-[0px] left-[0px] bg-gainsboro-100 w-full h-full" />
            </button>
          </div>
        </CarouselItem>

        <CarouselItem>
          <div className="self-stretch overflow-hidden flex flex-col items-center justify-start pt-[178px] pb-14 pr-[76px] pl-[50px] box-border gap-[39px] max-w-full mt-[-114px] text-justify text-lg text-fuchsia-950 font-poppins mq750:gap-[19px] mq750:pl-[25px] mq750:pr-[38px] mq750:pb-9 mq750:box-border" />
          <div className="w-64 flex flex-row items-start justify-end" />
          <div className="self-stretch flex flex-row flex-wrap items-end justify-between pt-[91px] px-0 pb-0 box-border relative gap-[20px] max-w-full text-center text-smi text-black">
            <img
              className="h-5 w-7 absolute my-0 mx-[!important] top-[0px] left-[calc(50%_-_10px)] object-cover"
              loading="eager"
              alt=""
              src={quote}
            />
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-[50px] w-[50px] relative">
              <div className="absolute top-[0px] left-[0px] bg-gainsboro-100 w-full h-full" />
            </button>
            <div className="w-[971px] flex flex-col items-start justify-start min-h-[225px] max-w-full">
              <div className="self-stretch h-[104px] relative inline-block shrink-0">
                I can't thank Runway Aviation enough for their support and
                expertise. As a student with a passion for aviation but limited
                knowledge of the industry, their guidance was invaluable in
                helping me navigate the complexities of choosing the right
                training program and securing internships.
              </div>
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-[50px] w-[50px] relative">
              <div className="absolute top-[0px] left-[0px] bg-gainsboro-100 w-full h-full" />
            </button>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselNext />
      <CarouselPrevious />
    </Carousel>
  );
};

export default Testimonials;
