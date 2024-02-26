import React from 'react'

function Cards({
  heading,
  description,
  thumbnailSrc,
  thumbnailAlt = "Thumbnail",
  className,
}) {
  return (
    <div className={`rounded-lg p-6 hover:bg-red-400 duration-500 ease-in-out shadow-sm ${className}`}>
      <div className="overflow-hidden rounded-lg">
        <img
          className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
          src={thumbnailSrc}
          alt={thumbnailAlt}
        />
      </div>
      <h3 className="pt-5 text-2xl font-bold text-gray-600 block">
        {heading}
      </h3>
      <p className="font-normal text-gray-500 cursor-pointer text-lg duration-300 transition  mt-2">
        {description}
      </p>
    </div>
  );
}

const Service = () => {
  return (
    <>
      <div className='flex justify-center items-center py-8'>
        <h1 className='font-bold text-4xl'><Servicesss></Servicesss></h1>
      </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-3 sm:p-8">
      <Cards
        className="bg-[#fcf4ff]"
        heading="Admission Assistance"
        description="Experienced counselors assist students in choosing the right aviation programs and universities abroad based on their interests, academic background, and career aspirations. Interaction and Experience Share."
        thumbnailSrc="https://media.istockphoto.com/id/1281334322/photo/aircraft-mechanic-checking-jet-engine-of-the-airplane.jpg?s=2048x2048&w=is&k=20&c=dt2JyJxfbRq_DKllMW9DMn6LtwU6E2GzSTPrpPLuKz4="
      />
      <Cards
        className="bg-[#fefaf0]"
        heading="Visa Guidance"
        description="Runway 02 Aviation Institute helps students identify suitable universities and aviation schools overseas that offer high-quality education and training programs in aviation-related disciplines"
        thumbnailSrc="https://media.istockphoto.com/id/1281334322/photo/aircraft-mechanic-checking-jet-engine-of-the-airplane.jpg?s=2048x2048&w=is&k=20&c=dt2JyJxfbRq_DKllMW9DMn6LtwU6E2GzSTPrpPLuKz4="
      />
      <Cards
        className="bg-[#f3faff]"
        heading="Pre-Departure Orientation"
        description="The institute guides students through the entire admission process, including application submission, document preparation, and interview preparation, ensuring that they meet all requirements for admission to their chosen aviation programs."
        thumbnailSrc="https://media.istockphoto.com/id/1281334322/photo/aircraft-mechanic-checking-jet-engine-of-the-airplane.jpg?s=2048x2048&w=is&k=20&c=dt2JyJxfbRq_DKllMW9DMn6LtwU6E2GzSTPrpPLuKz4="
      />
      
    </div>
    </>
  )
}

export default Service