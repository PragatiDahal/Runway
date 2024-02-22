import React from 'react'
import image from '../images/aero.jpg'
import Region from './Region'

const About = () => {
  return (
    <>
    <div className="self-stretch overflow-hidden flex flex-col items-center justify-start pt-[70px] pb-[163px] pr-[114px] pl-[62px] box-border gap-[73px] max-w-full z-[1] text-justify text-base text-fuchsia-950 font-poppins mq450:gap-[18px] mq450:pt-[29px] mq450:pr-5 mq450:pb-[69px] mq450:box-border mq750:gap-[36px] mq750:pl-[31px] mq750:pr-[57px] mq750:box-border mq1050:pt-[45px] mq1050:pb-[106px] mq1050:box-border">
      <div className="w-[646px] flex flex-row items-start justify-end max-w-full">
        <div className="w-[595px] flex flex-col items-center justify-start gap-[38px] max-w-full mq750:gap-[19px]">
          <b className="w-[169px] h-7 relative inline-block shrink-0">
            <span>About</span>
            <span className="text-black"> Runway</span>
          </b>
          <b className="self-stretch h-[21px] relative text-sm inline-block text-black whitespace-pre-wrap">
            RUNWAY 02 your dream builder established on a foundation of trust
            and loyalty
          </b>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[45px] max-w-full text-mini text-black mq750:gap-[22px] mq1225:flex-wrap">
        <img
          className="h-[480px] flex-1 relative rounded-11xl max-w-full overflow-hidden object-cover min-w-[411px] mq750:min-w-full"
          loading="eager"
          alt=""
          src={image}
        />
        <div className="h-[391px] w-[586px] relative inline-block shrink-0 min-w-[586px] max-w-full mq1050:min-w-full mq1225:flex-1">
          <p className="m-0">
            Welcome to Runway 02 Aviation Institute, where dreams take flight
            and soar beyond horizons. With a legacy of excellence in aviation
            education, Runway 02 is your gateway to a dynamic and rewarding
            career in the skies. As a premier aviation institute, we are
            committed to nurturing the next generation of aviation professionals
            and empowering them to reach new heights of success.
          </p>
          <p className="m-0">
            <b>&nbsp;</b>
          </p>
          <p className="m-0">
            At Runway 02, we believe in the power of ambition, dedication, and
            knowledge to transform dreams into reality. Our institute is
            dedicated to providing comprehensive training programs that equip
            students with the skills, expertise, and confidence to excel in the
            competitive field of aviation. Whether you aspire to become a pilot,
            aircraft engineer, air traffic controller, or aviation manager,
            Runway 02 offers a diverse range of courses tailored to meet your
            aspirations and goals.
          </p>
        </div>
      </div>
    </div>
    <section>
      <Region />
      </section>
    </>
  );
};



export default About