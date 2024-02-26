import FeedbackCard from "./FeedbackCard";
import Carousel from "nuka-carousel";

const feedback = [
  {
    id: "feedback-1",
    content:
      "As a student at Runway Aviation Institute, I can confidently say that my experience has exceeded my expectations. The faculty members are not only knowledgeable and experienced professionals in the aviation industry but also incredibly supportive and dedicated to helping students succeed. ",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: "https://i.imgur.com/Dn0qoCG.png",
  },
  {
    id: "feedback-2",
    content:
      "Working with Runway Aviation has been a game-changer for me. Their in-depth knowledge of the aviation industry, combined with their tailored approach to career development. They took the time to understand my goals and aspirations and provided practical advice and guidance that helped me chart a successful career path in aviation. I highly recommend Runway to anyone looking to kick start their career in this exciting and dynamic field.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: "https://i.imgur.com/fk8eEvW.png",
  },
  {
    id: "feedback-3",
    content:
      "Runway Aviation Exceeded my expectations in every way. Their team's wealth of experience and industry connections provided me with invaluable insights and opportunities that I wouldn't have had access to otherwise. From refining my resume to preparing for interviews, they provided personalized support that empowered me to land a competitive internship and kickstart my career in aviation.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: "https://i.imgur.com/dLxxRDy.png",
  },
];

const Testimonials = () => (
  <section
    id="clients"
    className={`sm:py-16 py-6 flex justify-center items-center flex-col relative `}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex pl-24 justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2
        className={`font-poppins font-semibold xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px] w-full`}
      >
        Testimonials
      </h2>
    </div>
    <Carousel
      autoplay
      autoplayInterval={3000}
      wrapAround={false}
      edgeEasing="easeOutCirc"
    >
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </Carousel>
  </section>
);

export default Testimonials;
