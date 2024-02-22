import React from 'react'
import usa from '../images/USA.jpg'
import canada from '../images/canada1.jpg'
import south from '../images/south.png'

const Region = () => {
  return (
    <div className="flex-1 overflow-hidden flex flex-col items-center justify-start py-[83px] px-[50px] box-border gap-[118px] max-w-full text-left text-lg text-fuchsia-950 font-poppins mq450:gap-[29px] mq750:gap-[59px] mq750:py-[23px] mq750:px-[25px] mq750:box-border mq1225:pt-[35px] mq1225:pb-[35px] mq1225:box-border">
    <div className="self-stretch flex flex-col items-center justify-start gap-[26px] max-w-full">
      <div className="w-40 flex flex-row items-start justify-start py-0 pr-0 pl-8 box-border">
        <b className="h-[46px] flex-1 relative inline-block">
          <span>Our</span>
          <span className="text-black"> Regions</span>
        </b>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start pt-0 pb-[149px] pr-[57px] pl-[89px] box-border relative gap-[33px] max-w-full text-base mq450:pb-[63px] mq450:box-border mq750:gap-[16px] mq750:pl-[22px] mq750:box-border mq1050:pb-[97px] mq1050:box-border mq1225:pl-11 mq1225:pr-7 mq1225:box-border">
        <div className="w-full h-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gainsboro-200" />
        <div className="w-[726px] flex flex-row items-start justify-start py-0 pr-0 pl-[31px] box-border max-w-full">
          <img
            className="h-[460px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
            loading="eager"
            alt=""
            src={usa}
          />
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[23px]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[12px]">
            <div className="w-[304px] flex flex-row items-start justify-start py-0 pr-0 pl-8 box-border">
              <b className="h-[46px] flex-1 relative inline-block z-[1]">
                United States of America (USA)
              </b>
            </div>
            <div className="self-stretch h-[58px] relative text-smi text-black text-justify inline-block shrink-0 z-[1]">
              Studying aviation in the context of the United States offers
              unparalleled opportunities for aspiring pilots, aviation
              engineers, and professionals in various aviation-related fields.
              With a rich aviation history dating back to the Wright brothers'
              first powered flight in 1903, the U.S. has established itself as
              a global leader in aviation innovation, education, and training
            </div>
          </div>
          <div className="w-60 flex flex-row items-start justify-start py-0 pr-[29px] pl-0 box-border">
            <button className="cursor-pointer [border:none] py-4 pr-[39px] pl-16 bg-[transparent] flex-1 flex flex-row items-center justify-end relative whitespace-nowrap z-[1]">
              <div className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-full bg-fuchsia-950" />
              <b className="h-[26px] flex-1 relative text-mini inline-block font-poppins text-white text-justify z-[1]">
                READ MORE
              </b>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="self-stretch flex flex-col items-center justify-start pt-0 pb-[121px] pr-5 pl-[31px] box-border relative gap-[82px] max-w-full mq450:pb-[51px] mq450:box-border mq750:gap-[20px] mq1050:pb-[79px] mq1050:box-border mq1225:gap-[41px]">
      <div className="w-full h-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gainsboro-200" />
      <div className="w-[1123px] flex flex-col items-center justify-start gap-[17px] max-w-full">
        <div className="w-[707px] flex flex-row items-start justify-start py-0 pr-3 pl-0 box-border max-w-full">
          <img
            className="h-[460px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
            loading="eager"
            alt=""
            src={canada}
          />
        </div>
        <div className="flex flex-row items-start justify-start py-0 pr-4 pl-0">
          <b className="h-[37px] w-[75px] relative inline-block z-[1]">
            Canada
          </b>
        </div>
        <div className="self-stretch h-[47px] relative text-smi text-black text-justify inline-block shrink-0 z-[1]">
          Studying aviation in the context of Canada offers a unique
          opportunity to delve into a rich and diverse aviation ecosystem
          shaped by the country's vast geographic landscape, strong aerospace
          industry, and commitment to excellence in aviation education and
          training
        </div>
      </div>
      <div className="w-[239px] flex flex-row items-start justify-start py-0 pr-0 pl-7 box-border">
        <button className="cursor-pointer [border:none] pt-3 pb-[25px] pr-[31px] pl-[63px] bg-[transparent] flex-1 flex flex-row items-start justify-end relative whitespace-nowrap z-[1]">
          <div className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-full bg-fuchsia-950" />
          <b className="h-[21px] flex-1 relative text-mini inline-block font-poppins text-white text-justify z-[1]">
            READ MORE
          </b>
        </button>
      </div>
    </div>
    <div className="self-stretch flex flex-col items-center justify-start pt-0 pb-[93px] pr-5 pl-[22px] box-border relative gap-[83px] max-w-full mq450:pb-[39px] mq450:box-border mq750:gap-[21px] mq1050:pb-[60px] mq1050:box-border mq1225:gap-[41px]">
      <div className="w-full h-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gainsboro-200" />
      <div className="w-[1126px] flex flex-col items-center justify-start gap-[16px] max-w-full">
        <div className="w-[695px] h-[521px] flex flex-col items-center justify-start gap-[24px] max-w-full">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
            loading="eager"
            alt=""
            src={south}
          />
          <div className="w-[135px] flex flex-row items-start justify-start py-0 pr-0.5 pl-0 box-border">
            <b className="h-[37px] flex-1 relative inline-block z-[1]">
              South Africa
            </b>
          </div>
        </div>
        <div className="self-stretch h-[68px] relative text-smi text-black text-justify inline-block shrink-0 z-[1]">
          Aviation study in the context of Africa encompasses a multifaceted
          examination of the continent's unique challenges, opportunities, and
          aspirations in the realm of air transportation. With a vast and
          diverse landscape, Africa presents a myriad of complexities, ranging
          from inadequate infrastructure and regulatory frameworks to
          socio-economic disparities and geopolitical tensions.
        </div>
      </div>
      <div className="w-[214px] flex flex-row items-start justify-start py-0 pr-[3px] pl-0 box-border">
        <button className="cursor-pointer [border:none] py-4 pr-12 pl-[55px] bg-[transparent] flex-1 flex flex-row items-center justify-end relative whitespace-nowrap z-[1]">
          <div className="h-150px w-150px absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-full bg-fuchsia-950" />
          <b className="h-[26px] flex-1 relative text-mini inline-block font-poppins text-white text-justify z-[1]">
            READ MORE
          </b>
        </button>
      </div>
    </div>
  </div>
  )
}

export default Region