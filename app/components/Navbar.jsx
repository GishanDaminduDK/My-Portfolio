import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const Navbar = () => {
  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="Background header color" className="w-full" />
      </div>

      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between bg-white z-50 shadow-md">
        <a href="#top">
          <Image src={assets.logo} alt="Website logo" className="w-28 cursor-pointer mr-14" />
        </a>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-gray shadow-sm bg-opacity-50">
          <li>
            <a className="font-Ovo" href="#top">Home</a>
          </li>
          <li>
            <a className="font-Ovo" href="#about-me">About Me</a>
          </li>
          {/* <li><a href="#top">Services</a></li> */}
          <li>
            <a className="font-Ovo" href="#work">My Work</a>
          </li>
          <li>
            <a className="font-Ovo" href="#contact">Contact Me</a>
          </li>
        </ul>

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
          <button className="block md:hidden ml-3">
            <Image src={assets.menu_black} alt="Menu icon" className="w-6" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
