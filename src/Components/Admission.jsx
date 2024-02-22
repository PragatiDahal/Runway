import React from 'react'
import image from '../images/aero.jpg'

const Admission = () => {
  return (
    <section className="self-stretch overflow-hidden flex flex-row items-center justify-start pt-[160px] pb-14 pr-[76px] pl-[50px] box-border max-w-full text-left text-lg text-fuchsia-950 font-poppins mq750:pt-[57px] mq750:pb-[57px] mq750:box-border mq1225:pl-6 mq1225:pr-6 mq1225:box-border">
      <div className="w-[1296px] flex flex-row items-start justify-start gap-[0px_42px] max-w-full mq750:gap-[0px_42px] mq1225:flex-wrap">
        <div className="w-[610px] flex flex-col items-start justify-start gap-[57px_0px] min-w-[610px] max-w-full mq750:gap-[57px_0px] mq750:min-w-full mq1225:flex-1">
          <b className="w-[220px] h-[35px] relative inline-block shrink-0 pt-5">
            <span>Admission</span>
            <span className="text-black"> in Runway</span>
          </b>
          <div className="self-stretch h-96 relative text-black text-justify inline-block shrink-0 text-base">
            <p className="m-0">
              <b>
                <span>Basic Criteria to join Aviation</span>
                <span> </span>
              </b>
            </p>
            <p className="m-0 text-xl">
              <b>
                <span>&nbsp;</span>
              </b>
            </p>
            <p className="m-0 text-smi">
              <b>
                <span className="text-smi">Education:</span>
                <span className="text-xl">{` `}</span>
              </b>
              <span>
                <span>
                  Completion of the +2 level (or equivalent) with a focus on
                  physics and mathematics.
                </span>
              </span>
            </p>
            <p className="m-0">
              <span>
                <span>&nbsp;</span>
              </span>
            </p>
            <p className="m-0">
              <span>
                <b className="font-poppins">{`Age: `}</b>
                <span>Must be 18 years or older.</span>
              </span>
            </p>
            <p className="m-0">
              <span>
                <span>&nbsp;</span>
              </span>
            </p>
            <p className="m-0">
              <span>
                <b className="font-poppins">Language Proficiency:</b>
                <span className="font-poppins"> Fluency in English</span>
                <b>.</b>
              </span>
            </p>
            <p className="m-0">
              <span>
                <b>&nbsp;</b>
              </span>
            </p>
            <p className="m-0">
              <span>
                <b>Medical Examination:</b>
                <span>
                  {" "}
                  Must pass an aviation medical examination conducted by a
                  designated aviation medical examiner.
                </span>
              </span>
            </p>
          </div>
        </div>
        <img
          className="h-[462px] flex-1 relative rounded-11xl max-w-full overflow-hidden object-cover min-w-[419px] mq750:min-w-full"
          loading="eager"
          alt=""
          src={image}
        />
      </div>
    </section>
  )
}

export default Admission