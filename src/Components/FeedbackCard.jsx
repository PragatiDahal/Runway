const FeedbackCard = ({ content, name, title, img }) => (
    <div className="flex justify-between  flex-col  px-10 py-12 rounded-[20px]  max-w-[370px]  mx-auto my-0 feedback-card">
      <img
        src={"https://i.imgur.com/rx3eOUo.png"}
        alt="double_quotes"
        className="w-[42.6px] h-[27.6px] object-contain"
      />
      <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-black my-10">
        {content}
      </p>
  
      <div className="flex flex-row">
        <img src={img} alt={name} className=" rounded-full" />
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-black">
            {name}
          </h4>
          <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimblack">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
  
  export default FeedbackCard
