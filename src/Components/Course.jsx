import React from "react";
import image from "../images/license.jpg";

const Courses = () => {
  return (
    <div className="flex-1 overflow-hidden flex flex-col items-center justify-start pt-[57px] pb-[66px] pr-5 pl-20 box-border gap-[77px_0px] max-w-full text-left text-base text-black font-poppins mq750:gap-[77px_0px] mq750:pt-5 mq750:pb-5 mq750:box-border mq1225:gap-[77px_0px] mq1225:pl-10 mq1225:pt-6 mq1225:pb-7 mq1225:box-border">
      <div className="w-[154px] flex flex-row items-start justify-start py-0 pr-0 pl-[15px] box-border shrink-0 text-xl text-fuchsia-950">
        <b className="h-[42px] flex-1 relative inline-block mq450:text-base">
          <span>Our</span>
          <span className="text-black"> Courses</span>
        </b>
      </div>
      <div className="w-[1008px] flex flex-row items-start justify-start pt-0 pb-[25px] pr-1 pl-0 box-border max-w-full shrink-0">
        <div className="flex-1 flex flex-row items-start justify-between gap-[20px] max-w-full shrink-0 mq1050:flex-wrap">
          <div className="w-[398px] flex flex-col items-center justify-center max-w-full">
            <div className="self-stretch flex flex-col items-end justify-start pt-px px-0 pb-[11px] box-border relative gap-[54px] max-w-full mq450:gap-[54px]">
              <div className="w-full h-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gainsboro-100" />
              <img
                className="self-stretch h-[234.5px] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
                loading="eager"
                alt=""
                src={image}
              />
              <div className="w-[386px] flex flex-row items-start justify-start py-0 px-[3px] box-border max-w-full shrink-0">
                <div className="flex-1 flex flex-col items-start justify-start gap-[29px_0px] max-w-full">
                  <b className="relative z-[1]">Student Pilot License (SPL)</b>
                  <div className="self-stretch flex flex-row items-end justify-start gap-[0px_1px] mq450:flex-wrap">
                    <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[5px] box-border min-w-[73px]">
                      <b className="self-stretch h-[79.3px] relative inline-block shrink-0 z-[1]">
                        <p className="m-0">course time</p>
                      </b>
                    </div>
                    <div className="h-[91px] flex flex-col items-start justify-start py-0 pr-[15px] pl-0 box-border">
                      <div className="w-px flex-1 relative box-border z-[1] border-r-[1px] border-solid border-black" />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[3px] box-border min-w-[73px]">
                      <b className="h-[79.3px] relative inline-block shrink-0 z-[1]">
                        <p className="m-0">Qualification</p>
                      </b>
                    </div>
                    <div className="h-[89px] flex flex-col items-start justify-start py-0 pr-3.5 pl-0 box-border">
                      <div className="w-px flex-1 relative box-border z-[1] border-r-[1px] border-solid border-black" />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[5px] box-border min-w-[77px]">
                      <b className="h-[79px] relative inline-block shrink-0 z-[1]">
                        <p className="m-0">Add on course</p>
                        
                      </b>
                    </div>
                  </div>
                </div>
              </div>
              <button className="cursor-pointer [border:none] p-0.5 bg-[transparent] w-[105px] my-0 mx-[!important] absolute right-[13.8px] bottom-[123px] overflow-hidden flex flex-row items-center justify-center box-border z-[2]">
                <div className="flex-1 flex flex-row items-start justify-end pt-[7px] pb-[38px] pr-2 pl-[30px] relative">
                  <div className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-full bg-fuchsia-950" />
                  <b className="h-0 flex-1 relative text-mini inline-block font-poppins text-white text-left z-[1]">
                    Open
                  </b>
                </div>
              </button>
            </div>
          </div>
          <div className="w-[398px] flex flex-col items-center justify-center max-w-full">
            <div className="self-stretch flex flex-col items-end justify-start pt-px px-0 pb-[11px] box-border relative gap-[54px] max-w-full mq450:gap-[54px]">
              <div className="w-full h-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gainsboro-100" />
              <img
                className="self-stretch h-[234.5px] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
                loading="eager"
                alt=""
                src={image}
              />
              <div className="w-[386px] flex flex-row items-start justify-start py-0 px-[3px] box-border max-w-full shrink-0">
                <div className="flex-1 flex flex-col items-start justify-start gap-[29px_0px] max-w-full">
                  <b className="w-[222.6px] relative inline-block z-[1]">
                    Private Pilot License (PPL)
                  </b>
                  <div className="self-stretch flex flex-row items-end justify-start gap-[0px_1px] mq450:flex-wrap">
                    <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[5px] box-border min-w-[73px]">
                      <b className="self-stretch h-[79.3px] relative inline-block shrink-0 z-[1]">
                        <p className="m-0">course time</p>
                       
                      </b>
                    </div>
                    <div className="h-[91px] flex flex-col items-start justify-start py-0 pr-[15px] pl-0 box-border">
                      <div className="w-px flex-1 relative box-border z-[1] border-r-[1px] border-solid border-black" />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[3px] box-border min-w-[73px]">
                      <b className="h-[79.3px] relative inline-block shrink-0 z-[1]">
                        <p className="m-0">Qualification</p>
                       
                      </b>
                    </div>
                    <div className="h-[89px] flex flex-col items-start justify-start py-0 pr-3.5 pl-0 box-border">
                      <div className="w-px flex-1 relative box-border z-[1] border-r-[1px] border-solid border-black" />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[5px] box-border min-w-[77px]">
                      <b className="h-[79px] relative inline-block shrink-0 z-[1]">
                        <p className="m-0">Add on course</p>
                        
                      </b>
                    </div>
                  </div>
                </div>
              </div>
              <button className="cursor-pointer [border:none] pt-[7px] pb-[38px] pr-2 pl-[30px] bg-[transparent] w-[101px] my-0 mx-[!important] absolute right-[36.8px] bottom-[122px] flex flex-row items-start justify-end box-border z-[2]">
                <div className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-full bg-fuchsia-950" />
                <b className="h-0 flex-1 relative text-mini inline-block font-poppins text-white text-left z-[1]">
                  Open
                </b>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1008px] flex flex-row items-end justify-between pt-0 px-0 pb-[19px] box-border gap-[20px] max-w-full shrink-0 mq1050:flex-wrap">
        <div className="w-[398px] flex flex-col items-start justify-start gap-[153px_0px] min-w-[398px] max-w-full shrink-0 mq750:min-w-full mq1050:flex-1 mq450:gap-[153px_0px]">
          <div className="self-stretch flex flex-col items-center justify-center max-w-full">
            <div className="self-stretch flex flex-col items-end justify-start pt-px px-0 pb-[11px] box-border relative gap-[54px] max-w-full mq1050:self-stretch mq1050:w-auto mq450:gap-[54px]">
              <div className="w-full h-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gainsboro-100" />
              <img
                className="self-stretch h-[234.5px] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
                loading="eager"
                alt=""
                src={image}
              />
              <div className="w-[386px] flex flex-row items-start justify-start py-0 px-[3px] box-border max-w-full shrink-0">
                <div className="flex-1 flex flex-col items-start justify-start gap-[29px_0px] max-w-full">
                  <b className="w-[222.6px] relative inline-block z-[1]">
                    Night Rating(NR)
                  </b>
                  <div className="self-stretch flex flex-row items-end justify-start gap-[0px_1px] mq450:flex-wrap">
                    <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[5px] box-border min-w-[73px]">
                      <b className="self-stretch h-[79.3px] relative inline-block shrink-0 z-[1]">
                        <p className="m-0">course time</p>
                       
                      </b>
                    </div>
                    <div className="h-[91px] flex flex-col items-start justify-start py-0 pr-[15px] pl-0 box-border">
                      <div className="w-px flex-1 relative box-border z-[1] border-r-[1px] border-solid border-black" />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[3px] box-border min-w-[73px]">
                      <b className="h-[79.3px] relative inline-block shrink-0 z-[1]">
                        <p className="m-0">Qualification</p>
                       
                      </b>
                    </div>
                    <div className="h-[89px] flex flex-col items-start justify-start py-0 pr-3.5 pl-0 box-border">
                      <div className="w-px flex-1 relative box-border z-[1] border-r-[1px] border-solid border-black" />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[5px] box-border min-w-[77px]">
                      <b className="h-[79px] relative inline-block shrink-0 z-[1]">
                        <p className="m-0">Add on course</p>
                        
                      </b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[117px] my-0 mx-[!important] absolute right-[9.8px] bottom-[119px] overflow-hidden flex flex-row items-center justify-center p-[3px] box-border z-[2]">
                <button className="cursor-pointer [border:none] pt-[7px] pb-[38px] pr-2 pl-[30px] bg-[transparent] w-[101px] flex flex-row items-start justify-end box-border relative">
                  <div className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-full bg-fuchsia-950" />
                  <b className="h-0 flex-1 relative text-mini inline-block font-poppins text-white text-left z-[1]">
                    Open
                  </b>
                </button>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-center max-w-full">
            <div className="self-stretch flex flex-col items-end justify-start pt-px px-0 pb-[11px] box-border relative gap-[54px] max-w-full mq450:gap-[54px]">
              <div className="w-full h-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gainsboro-100" />
              <img
                className="self-stretch h-[234.5px] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
                loading="eager"
                alt=""
                src={image}
              />
              <div className="w-[386px] flex flex-row items-start justify-start py-0 px-[3px] box-border max-w-full shrink-0">
                <div className="flex-1 flex flex-col items-start justify-start gap-[29px_0px] max-w-full">
                  <b className="w-[222.6px] relative inline-block z-[1]">
                    Instrument Rating (IR)
                  </b>
                  <div className="self-stretch flex flex-row items-end justify-start gap-[0px_1px] mq450:flex-wrap">
                    <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[5px] box-border min-w-[73px]">
                      <b className="self-stretch h-[79.3px] relative inline-block shrink-0 z-[1]">
                        <p className="m-0">course time</p>
                       
                      </b>
                    </div>
                    <div className="h-[91px] flex flex-col items-start justify-start py-0 pr-[15px] pl-0 box-border">
                      <div className="w-px flex-1 relative box-border z-[1] border-r-[1px] border-solid border-black" />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[3px] box-border min-w-[73px]">
                      <b className="h-[79.3px] relative inline-block shrink-0 z-[1]">
                        <p className="m-0">Qualification</p>
                       
                      </b>
                    </div>
                    <div className="h-[89px] flex flex-col items-start justify-start py-0 pr-3.5 pl-0 box-border">
                      <div className="w-px flex-1 relative box-border z-[1] border-r-[1px] border-solid border-black" />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[5px] box-border min-w-[77px]">
                      <b className="h-[79px] relative inline-block shrink-0 z-[1]">
                        <p className="m-0">Add on course</p>
                        
                      </b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[111px] my-0 mx-[!important] absolute right-[9.8px] bottom-[123px] overflow-hidden flex flex-row items-center justify-center p-[3px] box-border z-[2]">
                <button className="cursor-pointer [border:none] pt-[7px] pb-[38px] pr-2 pl-[30px] bg-[transparent] w-[101px] flex flex-row items-start justify-end box-border relative">
                  <div className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-full bg-fuchsia-950" />
                  <b className="h-0 flex-1 relative text-mini inline-block font-poppins text-white text-left z-[1]">
                    Open
                  </b>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[405px] flex flex-col items-start justify-start gap-[141px_0px] min-w-[405px] max-w-full shrink-0 mq750:min-w-full mq1050:flex-1 mq450:gap-[141px_0px]">
          <div className="self-stretch flex flex-col items-center justify-center max-w-full">
            <div className="self-stretch flex flex-col items-end justify-start pt-px px-0 pb-[11px] box-border relative gap-[54px] max-w-full mq1050:self-stretch mq1050:w-auto mq450:gap-[54px]">
              <div className="w-full h-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gainsboro-100" />
              <img
                className="self-stretch h-[234.5px] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
                loading="eager"
                alt=""
                src={image}
              />
              <div className="w-[386px] flex flex-row items-start justify-start py-0 px-[3px] box-border max-w-full shrink-0">
                <div className="flex-1 flex flex-col items-start justify-start gap-[29px_0px] max-w-full">
                  <b className="w-[222.6px] h-[27.6px] relative inline-block shrink-0 z-[1]">
                    Hour Building
                  </b>
                  <div className="self-stretch flex flex-row items-end justify-start gap-[0px_1px] mq450:flex-wrap">
                    <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[5px] box-border min-w-[73px]">
                      <b className="self-stretch h-[79.3px] relative inline-block shrink-0 z-[1]">
                        <p className="m-0">course time</p>
                       
                      </b>
                    </div>
                    <div className="h-[91px] flex flex-col items-start justify-start py-0 pr-[15px] pl-0 box-border">
                      <div className="w-px flex-1 relative box-border z-[1] border-r-[1px] border-solid border-black" />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[3px] box-border min-w-[73px]">
                      <b className="h-[79.3px] relative inline-block shrink-0 z-[1]">
                        <p className="m-0">Qualification</p>
                       
                      </b>
                    </div>
                    <div className="h-[89px] flex flex-col items-start justify-start py-0 pr-3.5 pl-0 box-border">
                      <div className="w-px flex-1 relative box-border z-[1] border-r-[1px] border-solid border-black" />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[5px] box-border min-w-[77px]">
                      <b className="h-[79px] relative inline-block shrink-0 z-[1]">
                        <p className="m-0">Add on course</p>
                        
                      </b>
                    </div>
                  </div>
                </div>
              </div>
              <button className="cursor-pointer [border:none] p-0.5 bg-[transparent] w-[111px] my-0 mx-[!important] absolute right-[32.8px] bottom-[130px] overflow-hidden flex flex-row items-center justify-center box-border z-[2]">
                <div className="w-[101px] flex flex-row items-start justify-end pt-[7px] pb-[38px] pr-2 pl-[30px] box-border relative">
                  <div className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-full bg-fuchsia-950" />
                  <b className="h-0 flex-1 relative text-mini inline-block font-poppins text-white text-left z-[1]">
                    Open
                  </b>
                </div>
              </button>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[7px] box-border max-w-full">
            <div className="flex-1 flex flex-col items-center justify-center max-w-full">
              <div className="self-stretch flex flex-col items-end justify-start pt-px px-0 pb-[11px] box-border relative gap-[54px] max-w-full mq450:gap-[54px]">
                <div className="w-full h-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gainsboro-100" />
                <img
                  className="self-stretch h-[234.5px] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
                  loading="eager"
                  alt=""
                  src={image}
                />
                <div className="w-[386px] flex flex-row items-start justify-start py-0 px-[3px] box-border max-w-full shrink-0">
                  <div className="flex-1 flex flex-col items-start justify-start max-w-full">
                    <b className="w-[223px] h-14 relative inline-block whitespace-pre-wrap shrink-0 z-[1]">
                      Commercial Pilot License (CPL)
                    </b>
                    <div className="self-stretch flex flex-row items-end justify-start gap-[0px_1px] mq450:flex-wrap">
                      <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[5px] box-border min-w-[73px]">
                        <b className="self-stretch h-[79.3px] relative inline-block shrink-0 z-[1]">
                          <p className="m-0">course time</p>
                         
                        </b>
                      </div>
                      <div className="h-[91px] flex flex-col items-start justify-start py-0 pr-[15px] pl-0 box-border">
                        <div className="w-px flex-1 relative box-border z-[1] border-r-[1px] border-solid border-black" />
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[3px] box-border min-w-[73px]">
                        <b className="h-[79.3px] relative inline-block shrink-0 z-[1]">
                          <p className="m-0">Qualification</p>
                         
                        </b>
                      </div>
                      <div className="h-[90px] flex flex-col items-start justify-start py-0 pr-3.5 pl-0 box-border">
                        <div className="w-px flex-1 relative box-border z-[1] border-r-[1px] border-solid border-black" />
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[5px] box-border min-w-[77px]">
                        <b className="h-[79px] relative inline-block shrink-0 z-[1]">
                          <p className="m-0">Add on course</p>
                          
                        </b>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[119px] my-0 mx-[!important] absolute right-[22.8px] bottom-[120px] overflow-hidden flex flex-row items-center justify-center p-0.5 box-border z-[2]">
                  <button className="cursor-pointer [border:none] pt-[7px] pb-[38px] pr-2 pl-[30px] bg-[transparent] w-[101px] flex flex-row items-start justify-end box-border relative">
                    <div className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-full bg-fuchsia-950" />
                    <b className="h-0 flex-1 relative text-mini inline-block font-poppins text-white text-left z-[1]">
                      Open
                    </b>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[125px] overflow-hidden hidden" />
      <div className="w-[398px] flex flex-col items-center justify-center max-w-full shrink-0">
        <div className="self-stretch flex flex-col items-end justify-start pt-px px-0 pb-[11px] box-border relative gap-[54px] max-w-full mq450:gap-[54px]">
          <div className="w-full h-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gainsboro-100" />
          <img
            className="self-stretch h-[234.5px] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
            loading="eager"
            alt=""
            src={image}
          />
          <div className="w-[386px] flex flex-row items-start justify-start py-0 px-[3px] box-border max-w-full shrink-0">
            <div className="flex-1 flex flex-col items-start justify-start gap-[9px_0px] max-w-full">
              <b className="w-[223px] relative inline-block z-[1]">
                The Airline Transport Pilot License (ATPL)
              </b>
              <div className="self-stretch flex flex-row items-end justify-start gap-[0px_1px] mq450:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[5px] box-border min-w-[73px]">
                  <b className="self-stretch h-[79.3px] relative inline-block shrink-0 z-[1]">
                    <p className="m-0">course time</p>
                   
                  </b>
                </div>
                <div className="h-[91px] flex flex-col items-start justify-start py-0 pr-[15px] pl-0 box-border">
                  <div className="w-px flex-1 relative box-border z-[1] border-r-[1px] border-solid border-black" />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[3px] box-border min-w-[73px]">
                  <b className="h-[79.3px] relative inline-block shrink-0 z-[1]">
                    <p className="m-0">Qualification</p>
                   
                  </b>
                </div>
                <div className="h-[90px] flex flex-col items-start justify-start py-0 pr-3.5 pl-0 box-border">
                  <div className="w-px flex-1 relative box-border z-[1] border-r-[1px] border-solid border-black" />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[5px] box-border min-w-[77px]">
                  <b className="h-[79px] relative inline-block shrink-0 z-[1]">
                    <p className="m-0">Add on course</p>
                    
                  </b>
                </div>
              </div>
            </div>
          </div>
          <button className="cursor-pointer [border:none] pt-[7px] pb-[38px] pr-2 pl-[30px] bg-[transparent] w-[101px] my-0 mx-[!important] absolute right-[11.8px] bottom-[122px] flex flex-row items-start justify-end box-border z-[2]">
            <div className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-full bg-fuchsia-950" />
            <b className="h-0 flex-1 relative text-mini inline-block font-poppins text-white text-left z-[1]">
              Open
            </b>
          </button>
        </div>
      </div>
      <div className="w-[108px] overflow-hidden hidden" />
    </div>
  );
};

export default Courses;