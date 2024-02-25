import React from 'react'
import aero from '../images/aeroplane.jpg'
import image from '../images/aero.jpg'
import image1 from '../images/USA.jpg'
import right from '../images/angle-left-icon.png'
import left from '../images/angle-right-icon.png'
import Admission from './Admission'
import Testimonials from './Testimonials'
import Blog from './Blog'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import img1 from'../images/plane.jpeg'


const Homepage = () => {
  return (

    <>
  
   <Carousel className= " w-full">
    <CarouselContent>

      <CarouselItem>
         <section className="w-full h-full overflow-hidden flex flex-col items-end justify-start pt-[296px] pb-[102px] pr-[46px] pl-7 box-border relative gap-[210px_0px] max-w-full text-left text-lg text-purple-100 font-poppins mq750:gap-[210px_0px] mq750:pr-[23px] mq750:box-border mq1050:pt-48 mq1050:pb-[66px] mq1050:box-border mq450:gap-[210px_0px] mq450:pt-[125px] mq450:pb-[43px] mq450:box-border">
      <div className="w-full h-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px]">
        <img
          className="absolute h-full w-full max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={img1}
        />
        <div className="absolute h-full w-full top-[4px] right-[0px] bottom-[0px] left-[0px] bg-white-50 z-[1]" />
      </div>
      <div className="w-[472px] flex flex-row items-start justify-start py-0 px-[26px] box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[28px_0px] max-w-full z-[2]">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start max-w-full">
            <b className="h-14 w-[334px] relative inline-block shrink-0 max-w-full">
              <span className="whitespace-pre-wrap text-fuchsia-950 ">CREATE  </span>
              <span className="text-fuchsia-950 whitespace-pre-wrap">
                OPPORTUNITIES
              </span>
            </b>
            <div className="w-[326px] flex flex-col items-start justify-start pt-14 px-0 pb-0 box-border max-w-full ml-[-334px] text-smi text-black">
              <div className="self-stretch h-[82px] relative inline-block shrink-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </div>
            </div>
          </div>
          <Link to="/Contact">
          <button className="cursor-pointer [border:none] py-2 pr-5 pl-6 bg-fuchsia-950 rounded-full overflow-hidden flex flex-row items-center justify-center whitespace-nowrap hover:bg-fuchsia-600">
            <b className="relative text-sm font-poppins text-white text-center">
              CONTACT US
            </b>
          </button>
          </Link>
        </div>
      </div>
    </section> 
      </CarouselItem>

      <CarouselItem>
         <section className="self-stretch overflow-hidden flex flex-col items-end justify-start pt-[296px] pb-[102px] pr-[46px] pl-7 box-border relative gap-[210px_0px] max-w-full text-left text-lg text-purple-100 font-poppins mq750:gap-[210px_0px] mq750:pr-[23px] mq750:box-border mq1050:pt-48 mq1050:pb-[66px] mq1050:box-border mq450:gap-[210px_0px] mq450:pt-[125px] mq450:pb-[43px] mq450:box-border">
      <div className="w-full h-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px]">
        <img
          className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={image}
        />
        <div className="absolute h-full w-full top-[4px] right-[0px] bottom-[0px] left-[0px]  z-[1]" />
      </div>
      <div className="w-[472px] flex flex-row items-start justify-start py-0 px-[26px] box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[28px_0px] max-w-full z-[2]">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start max-w-full">
            <b className="h-14 w-[334px] relative inline-block shrink-0 max-w-full">
              <span className="whitespace-pre-wrap text-fuchsia-950 ">CREATE  </span>
              <span className="text-fuchsia-950 whitespace-pre-wrap">
                OPPORTUNITIES
              </span>
            </b>
            <div className="w-[326px] flex flex-col items-start justify-start pt-14 px-0 pb-0 box-border max-w-full ml-[-334px] text-smi text-black">
              <div className="self-stretch h-[82px] relative inline-block shrink-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </div>
            </div>
          </div>
          <Link to="/Contact">
          <button className="cursor-pointer [border:none] py-2 pr-5 pl-6 bg-fuchsia-950 rounded-full overflow-hidden flex flex-row items-center justify-center whitespace-nowrap hover:bg-mediumvioletred">
            <b className="relative text-sm font-poppins text-white text-center">
              CONTACT US
            </b>
          </button>
          </Link>
        </div>
      </div>
      
    </section> 
      </CarouselItem>

      <CarouselItem>
         <section className="self-stretch overflow-hidden flex flex-col items-end justify-start pt-[296px] pb-[102px] pr-[46px] pl-7 box-border relative gap-[210px_0px] max-w-full text-left text-lg text-purple-100 font-poppins mq750:gap-[210px_0px] mq750:pr-[23px] mq750:box-border mq1050:pt-48 mq1050:pb-[66px] mq1050:box-border mq450:gap-[210px_0px] mq450:pt-[125px] mq450:pb-[43px] mq450:box-border">
      <div className="w-full h-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px]">
        <img
          className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={image1}
        />
        <div className="absolute h-full w-full top-[4px] right-[0px] bottom-[0px] left-[0px]  z-[1]" />
      </div>
      <div className="w-[472px] flex flex-row items-start justify-start py-0 px-[26px] box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[28px_0px] max-w-full z-[2]">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start max-w-full">
            <b className="h-14 w-[334px] relative inline-block shrink-0 max-w-full">
              <span className="whitespace-pre-wrap text-fuchsia-950 ">CREATE  </span>
              <span className="text-fuchsia-950 whitespace-pre-wrap">
                OPPORTUNITIES
              </span>
            </b>
            <div className="w-[326px] flex flex-col items-start justify-start pt-14 px-0 pb-0 box-border max-w-full ml-[-334px] text-smi text-black">
              <div className="self-stretch h-[82px] relative inline-block shrink-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </div>
            </div>
          </div>
          <Link to="/Contact">
          <button className="cursor-pointer [border:none] py-2 pr-5 pl-6 bg-fuchsia-950 rounded-full overflow-hidden flex flex-row items-center justify-center whitespace-nowrap hover:bg-mediumvioletred">
            <b className="relative text-sm font-poppins text-white text-center">
              CONTACT US
            </b>
          </button>
          </Link>
        </div>
      </div>
    </section> 
      </CarouselItem>
     </CarouselContent>
     <CarouselNext />
     <CarouselPrevious />
   </Carousel>

   <section>
    <Admission />
   </section>

   <section>
    <Testimonials />
   </section>

   <section>
    <Blog />
   </section>

   <section>
    <Footer />
   </section>

    </>

  

    
  )
}

export default Homepage