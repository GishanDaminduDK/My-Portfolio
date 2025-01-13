
// import React, { useState, useRef, useEffect } from 'react';
// import Image from 'next/image';
// import { assets } from '@/assets/assets';

// const Navbar = ({isDarkMode,setIsDarkMode}) => {
//  const [isMenuOpen, setIsMenuOpen] = useState(false);
//  const [isScroll, setIsScroll] = useState(false);
//  const [visible, setVisible] = useState(true);
//  const lastScrollY = useRef(0);

//  const toggleMenu = () => {
//    setIsMenuOpen((prev) => !prev);
//  };

//  const closeMenu = () => {
//    setIsMenuOpen(false);
//  };

//  useEffect(() => {
//    const handleScroll = () => {
//      const currentScrollY = window.scrollY;
     
//      if (currentScrollY > 50) {
//        setIsScroll(true);
//      } else {
//        setIsScroll(false);
//      }

//      if (currentScrollY > lastScrollY.current) {
//        setVisible(false);
//      } else {
//        setVisible(true);
//      }

//      lastScrollY.current = currentScrollY;
//    };

//    window.addEventListener('scroll', handleScroll, { passive: true });

//    return () => {
//      window.removeEventListener('scroll', handleScroll);
//    };
//  }, []);

//  return (
//    <>
//      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
//        <Image src={assets.header_bg_color} alt="Background header color" className="w-full" />
//      </div>

//      <nav className={`w-full fixed px-4 py-3 flex items-center justify-between bg-white z-50 shadow-md transition-all duration-300 flex-wrap md:flex-nowrap sm:px-5 lg:px-8 xl:px-[8%] transform ${visible ? 'translate-y-0' : '-translate-y-full'} ${isScroll ? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm' : ''}`}>
//        <a href="#top" className="flex items-center">
//          <Image src={assets.logo} alt="Website logo" className="w-28.5 sm:w-30 md:w-33 cursor-pointer md:mr-14" />
//        </a>

//        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50"}`}>
//          <li><a className="font-Ovo text-xl" href="#top">Home</a></li>
//          <li><a className="font-Ovo text-xl" href="#about-me">About Me</a></li>
//          <li><a className="font-Ovo text-xl" href="#work">My Work</a></li>
//          <li><a className="font-Ovo text-xl" href="#contact">Contact Me</a></li>
//        </ul>

//        <div className="flex items-center gap-4">
//          <button onClick={() => setIsDarkMode((prev) => !prev)}>
//            <Image src={isDarkMode? assets.sun_icon :assets.moon_icon} alt="Moon icon" className="w-6" />
//          </button>
//          <a href="#contact" className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4">Contact <Image src={assets.arrow_icon} alt="Arrow icon" className="w-3" /></a>
//          <button className="block md:hidden ml-3" onClick={toggleMenu}>
//            <Image src={assets.menu_black} alt="Menu icon" className="w-6" />
//          </button>
//        </div>

//        <ul className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
//          <div className="absolute top-5 right-5" onClick={closeMenu}>
//            <Image src={assets.close_black} alt="Close icon" className="w-6 cursor-pointer" />
//          </div>
//          <li><a className="font-Ovo" onClick={closeMenu} href="#top">Home</a></li>
//          <li><a className="font-Ovo" onClick={closeMenu} href="#about-me">About Me</a></li>
//          <li><a className="font-Ovo" onClick={closeMenu} href="#work">My Work</a></li>
//          <li><a className="font-Ovo" onClick={closeMenu} href="#contact">Contact Me</a></li>
//        </ul>
//      </nav>
//    </>
//  );
// };

// export default Navbar;
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // Added state for menu toggle
  const sideMenuRef = useRef();

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Background Image */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      {/* Navbar */}
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}`}>
        <a href="#top">
          <Image src={isDarkMode? assets.logo_dark:assets.logo} alt="" className="w-28 cursor-pointer mr-14" />
        </a>

        {/* Navigation Links */}
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll
              ? ""
              : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
          }`}>
          <li><a className="font-Ovo" href="#top">Home</a></li>
          <li><a className="font-Ovo" href="#about">About me</a></li>
          {/* <li><a className="font-Ovo" href="#services">Services</a></li> */}
          <li><a className="font-Ovo" href="#work">My Work</a></li>
          <li><a className="font-Ovo" href="#contact">Contact me</a></li>
        </ul>

        {/* Dark Mode Toggle and Contact Button */}
        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode(prev => !prev)}>
            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="" className="w-6" />
          </button>

          <a href="#contact" className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo">
            Contact
            <Image src={isDarkMode? assets.arrow_icon_dark:assets.arrow_icon} alt="" className="w-3" />
          </a>

          {/* Mobile Menu Button */}
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={isDarkMode? assets.menu_white:assets.menu_black} alt="" className="w-8" />
          </button>
        </div>

        {/* Mobile Side Menu */}
        <ul
          ref={sideMenuRef}
          className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 
          transition-transform duration-500 dark:bg-darkHover dark:text-white ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="absolute top-5 right-5" onClick={closeMenu}>
            <Image src={isDarkMode? assets.close_white:assets.close_black} alt="Close icon" className="w-6 cursor-pointer" />
          </div>
          <li><a className="font-Ovo" onClick={closeMenu} href="#top">Home</a></li>
          <li><a className="font-Ovo" onClick={closeMenu} href="#about-me">About Me</a></li>
          <li><a className="font-Ovo" onClick={closeMenu} href="#work">My Work</a></li>
          <li><a className="font-Ovo" onClick={closeMenu} href="#contact">Contact Me</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
