import React from 'react'
import Card from './Card'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Course = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
    <div className='flex justify-center items-center py-8'>
        <h1  data-aos="zoom-in" data-aos-duration="2000"className='font-bold text-4xl'>Courses</h1>
      </div>
    <div className='w-screen p-14'>
      <Card />

    </div>
    </>
  )
}

export default Course