import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <nav className="bg-[#64003E] p-4 font-poppins z-20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-white text-xl font-bold hover:text-[#F36DC0] transition ease-in duration-200">
            Runway 02
          </Link>
        </div>

        <div className="hidden md:flex space-x-8 ">
          <Link to="/" className="text-white hover:text-[#F36DC0] transition ease-in duration-200 ">
            Home
          </Link>
          <Link to="/service" className="text-white hover:text-[#F36DC0] transition ease-in duration-200">
            Services
          </Link>
          <Link to="/course" className="text-white hover:text-[#F36DC0] transition ease-in duration-200">
            Courses
          </Link>
          <Link to="/about" className="text-white hover:text-[#F36DC0] transition ease-in duration-200">
            About
          </Link>
          <Link to="/gallery" className="text-white hover:text-[#F36DC0] transition ease-in duration-200">
            Gallery
          </Link>
          <Link to="/contact" className="text-white hover:text-[#F36DC0] transition ease-in duration-200">
            Contact
          </Link>
        </div>

        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-16 right-2 rounded-md w-full  bg-gray-700 pl-10 py-5 shadow-lg z-50">
            <Link to="/" className="block text-white mb-2 hover:bg-gray-400 rounded-md">
              Home
            </Link>
            <Link to="/service" className="block text-white mb-2">
              Services
            </Link>
            <Link to="/course" className="block text-white mb-2">
              Course
            </Link>
            <Link to="/about" className="block text-white mb-2">
              About
            </Link>
            <Link to="/gallery" className="block text-white mb-2">
              Gallery
            </Link>
            <Link to="/contact" className="block text-white mb-2">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
    </>
  );
};

export default Navbar;
  