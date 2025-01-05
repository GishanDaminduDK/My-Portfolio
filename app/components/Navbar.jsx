import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (scrollY > 50) {
       
        setIsScroll(true);
      } else {
        
        setIsScroll(false);
      }
    })

  },[])

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="Background header color" className="w-full" />
      </div>

      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between bg-white z-50 shadow-md ${isScroll ? 'bg-white bg-opacity-50 backdrop-blur-lf shadow-sm' : ''}`}>
        <a href="#top">
          <Image src={assets.logo} alt="Website logo" className="w-28 cursor-pointer mr-14" />
        </a>

        {/* Desktop Navigation */}
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll? "":"bg-white shadow-sm bg-opacity-50"} `}>
          <li>
            <a className="font-Ovo" href="#top">Home</a>
          </li>
          <li>
            <a className="font-Ovo" href="#about-me">About Me</a>
          </li>
          <li>
            <a className="font-Ovo" href="#work">My Work</a>
          </li>
          <li>
            <a className="font-Ovo" href="#contact">Contact Me</a>
          </li>
        </ul>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-4">
          <button>
            <Image src={assets.moon_icon} alt="Moon icon" className="w-6" />
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4"
          >
            Contact
            <Image src={assets.arrow_icon} alt="Arrow icon" className="w-3" />
          </a>
          {/* Menu Icon */}
          <button className="block md:hidden ml-3" onClick={toggleMenu}>
            <Image src={assets.menu_black} alt="Menu icon" className="w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-transform duration-500 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="absolute top-5 right-5" onClick={closeMenu}>
            <Image src={assets.close_black} alt="Close icon" className="w-6 cursor-pointer" />
          </div>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#top">Home</a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#about-me">About Me</a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#work">My Work</a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#contact">Contact Me</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
