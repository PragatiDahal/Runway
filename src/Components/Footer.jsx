import React from 'react'

const Footer = () => {
  
    return (
        <footer className="w-[1550px] h-[1000px] bg-fuchsia-950 overflow-hidden flex flex-row items-start justify-start py-[86px] px-[100px] box-border relative gap-[111px] max-w-full text-justify text-base text-white font-poppins mq450:gap-[28px] mq750:gap-[55px] mq750:py-14 mq750:px-[25px] mq750:box-border mq1225:flex-wrap mq1225:pl-[50px] mq1225:pr-[50px] mq1225:box-border">
          <div className="w-[154px]  pt-[142px] px-0 pb-0 box-border text-pink-100 text-xl font-bold font-['Poppins'] relative tracking-[0.5em] leading-[100%] whitespace-nowrap flex flex-row items-center justify-center py-1.5 px-0w-[326px]  max-w-full">
            <b className="w-[113px] h-[26px] relative inline-block">RUNWAY 02</b>
          </div>
          <div className="w-[139px] flex flex-col items-start justify-start gap-[46px]">
            <b className="self-stretch h-[34px] relative inline-block shrink-0">
              About Us
            </b>
            <div className="self-stretch flex flex-col items-start justify-start gap-[26px] text-mini">
              <b className="self-stretch h-10 relative inline-block shrink-0">
                Admission
              </b>
              <b className="self-stretch h-10 relative inline-block shrink-0">
                Services
              </b>
              <div className="self-stretch flex flex-col items-start justify-start gap-[36px]">
                <b className="self-stretch h-[34px] relative inline-block shrink-0">
                  Courses
                </b>
                <b className="self-stretch h-[34px] relative inline-block shrink-0">
                  Regions
                </b>
                <div className="self-stretch flex flex-col items-start justify-start gap-[26px]">
                  <b className="self-stretch h-[34px] relative inline-block shrink-0">
                    Blog
                  </b>
                  <b className="self-stretch h-[34px] relative inline-block shrink-0">
                    Gallery
                  </b>
                </div>
              </div>
            </div>
          </div>
          <div className="my-0 mx-[!important] absolute top-[229px] left-[978px] flex flex-row items-start justify-start">
            <div className="h-16 w-20 absolute my-0 mx-[!important] right-[-30px] bottom-[-22px] bg-gainsboro-100 z-[3]" />
          </div>
          <div className="w-[575px] flex flex-col items-start justify-start gap-[29px] max-w-full">
            <div className="w-[516px] flex flex-row items-start justify-start py-0 px-2.5 box-border max-w-full">
              <div className="flex-1 flex flex-row items-start justify-between gap-[20px] max-w-full mq450:flex-wrap">
                <b className="h-[34px] w-[139px] relative inline-block shrink-0">{`Contact `}</b>
                <b className="h-[34px] w-[139px] relative inline-block shrink-0">
                  Follow
                </b>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start [row-gap:20px] max-w-full text-mini mq750:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-start pt-[17px] pb-0 pr-[18px] pl-0 box-border min-w-[215px] max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[26px]">
                  <b className="self-stretch h-10 relative inline-block shrink-0">
                    New Baneshwor, Kathmandu
                  </b>
                  <b className="w-[253px] h-10 relative inline-block whitespace-pre-wrap shrink-0">
                    Phone no : 9860000000
                  </b>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[26px]">
                    <div className="w-[205px] flex flex-row items-start justify-start pt-0 px-0 pb-5 box-border">
                      <b className="h-[34px] flex-1 relative inline-block whitespace-pre-wrap">
                        Fax: 977-1-432567
                      </b>
                    </div>
                    <b className="self-stretch h-[34px] relative inline-block shrink-0">
                      Email: runway@gmail.com
                    </b>
                    <b className="w-[139px] h-[34px] relative inline-block shrink-0">
                      runway.com
                    </b>
                  </div>
                </div>
              </div>
              <div className="h-[294px] w-28 relative ml-[-4px]">
                <div className="absolute top-[69px] left-[0px] w-28 h-[225px]">
                  <div className="absolute top-[0px] left-[16px] bg-gainsboro-100 w-20 h-16 z-[1]" />
                  <div className="absolute top-[66px] left-[9px] bg-gainsboro-100 w-[100px] h-[72px] z-[1]" />
                  <div className="absolute top-[129px] left-[0px] bg-gainsboro-100 w-28 h-24 z-[1]" />
                </div>
                <div className="absolute top-[0px] left-[12px] bg-gainsboro-100 w-24 h-[74px] z-[4]" />
              </div>
              <div className="w-[140px] flex flex-col items-start justify-start pt-[17px] px-0 pb-0 box-border ml-[-4px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[28px]">
                  <b className="self-stretch h-10 relative inline-block shrink-0">
                    Facebook
                  </b>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[46px]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                      <b className="self-stretch h-10 relative inline-block shrink-0">
                        Instagram
                      </b>
                      <b className="self-stretch h-[34px] relative inline-block shrink-0">
                        LinkedIn
                      </b>
                    </div>
                    <b className="self-stretch h-[34px] relative inline-block shrink-0">
                      Twitter
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
  )
}

export default Footer