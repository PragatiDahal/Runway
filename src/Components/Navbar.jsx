import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
      <>
         {/* <DropdownMenu>
          <DropdownMenuTrigger>
          <li>
              <NavLink
                className="w-[134px] h-5 left-[850px] top-[30px] absolute text-black font-bold flex-col items-start justify-start pt-0 px-0 pb-0.5 box-border max-w-full text-base text-blue-gray-100 font-poppins  leading-[100%] inline-block shrink-0"
                to="/About"
              >
                About
              </NavLink>
            </li>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
     {/* <DropdownMenuLabel className=" w-[134px] h-5 left-[850px]">About Runway</DropdownMenuLabel>  */}
    {/* <DropdownMenuSeparator />
    <DropdownMenuItem>About</DropdownMenuItem>
    <DropdownMenuItem>Admission</DropdownMenuItem>
    <DropdownMenuItem>Testimonials</DropdownMenuItem>
    <DropdownMenuItem>Blog</DropdownMenuItem>
  </DropdownMenuContent>
   </DropdownMenu> */}
         <nav className="flex-row justify-between items-center bg-fuchsia-950 px-10 h-16  text-pink-100 sticky top-0 z-20 gap
        -4">
          <ul>
          <li className="w-[76px] h-[31px] left-[192px] top-[18px]  text-pink-100 text-xl font-bold font-['Poppins'] relative tracking-[0.5em] leading-[100%] whitespace-nowrap flex flex-row items-center justify-center py-1.5 px-0w-[326px]  max-w-full">
           RUNWAY 02
          </li>
            <li>
              <NavLink
                className="w-[90px] h-5 left-[550px] top-[30px] absolute text-pink-100 font-bold flex-col items-start justify-start pt-0 px-0 pb-0.5 box-border max-w-full text-base text-blue-gray-100 font-poppins  leading-[100%] inline-block shrink-0"
                to="/Homepage"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="w-[135px] h-5 left-[650px] top-[30px] absolute text-pink-100 font-bold flex-col items-start justify-start pt-0 px-0 pb-0.5 box-border max-w-full text-base text-blue-gray-100 font-poppins  leading-[100%] inline-block shrink-0"
                to="/Course"
              >
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                className="w-[134px] h-5 left-[750px] top-[30px] absolute text-pink-100 font-bold flex-col items-start justify-start pt-0 px-0 pb-0.5 box-border max-w-full text-base text-blue-gray-100 font-poppins  leading-[100%] inline-block shrink-0"
                to="/Service"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                className="w-[134px] h-5 left-[850px] top-[30px] absolute text-pink-100 font-bold flex-col items-start justify-start pt-0 px-0 pb-0.5 box-border max-w-full text-base text-blue-gray-100 font-poppins  leading-[100%] inline-block shrink-0"
                to="/About"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className="w-[134px] h-5 left-[950px] top-[30px] absolute text-pink-100 font-bold flex-col items-start justify-start pt-0 px-0 pb-0.5 box-border max-w-full text-base text-blue-gray-100 font-poppins  leading-[100%] inline-block shrink-0"
                to="/Gallery"
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                className="w-[134px] h-5 left-[1050px] top-[30px] absolute text-pink-100 font-bold flex-col items-start justify-start pt-0 px-0 pb-0.5 box-border max-w-full text-base text-blue-gray-100 font-poppins  leading-[100%] inline-block shrink-0"
                to="/Contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>  
      </>
    );
  };
  
  export default Navbar;
  