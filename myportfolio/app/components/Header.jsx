
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { assets } from '@/assets/assets';
import { Linkedin, Github, Facebook, Instagram } from 'lucide-react';
//import cvPdf from '@/assets/CV_SE.pdf';

import { motion } from "framer-motion";

const SocialMediaBar = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin size={24} className="text-blue-300 hover:text-blue" />,
      href: 'https://www.linkedin.com/in/gishandamindudk/'
    },
    {
      name: 'GitHub',
      icon: <Github size={24} className="text-gray-300 hover:text-black" />,
      href: 'https://github.com/GishanDaminduDK/'
    },
    {
      name: 'Facebook',
      icon: <Facebook size={24} className="text-blue-300 hover:text-blue" />,
      href: 'https://web.facebook.com/gishan.kalasinghe'
    },
    {
      name: 'Instagram',
      icon: <Instagram size={24} className="text-red-300 hover:text-red" />,
      href: '#'
    }
  ];

  return (
    <>
      {/* Desktop view - vertical bar */}
      <div className="hidden md:block fixed left-8 top-1/2 transform -translate-y-1/2 z-50">
        <div className="flex flex-col gap-6 bg-black/80 backdrop-blur-sm rounded-full py-6 px-4">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:scale-110 transition-all duration-300"
              aria-label={link.name}
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile view - horizontal bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm py-3">
        <div className="flex justify-center items-center gap-8">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:scale-110 transition-all duration-300"
              aria-label={link.name}
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

const Header = () => {
  return (
    <>
      <SocialMediaBar />
      <div 
        className="w-11/12 max-w-4xl text-center mx-auto min-h-screen flex flex-col 
          items-center justify-center gap-6 relative pb-20 md:pb-0" // Added padding bottom for mobile to account for social bar
        style={{ paddingTop: '2cm' }}
      >
        <motion.div 
          initial={{scale:0}}
          whileInView={{scale:1}}
          transition={{duration:0.8, type:'spring', stiffness:100}}
        >
          <Image 
            src={assets.gishan_icon} 
            alt="Background header color" 
            className="rounded-full w-48 h-48 object-cover object-[90%_10%]" 
          />
        </motion.div>
        
        <motion.h3 
          initial={{y:-20, opacity:0}}
          whileInView={{y:0, opacity:1}}
          transition={{duration: 0.6, delay:0.3}}
          className="flex items-end gap-2 text-2xl md:text-3xl mb-3 font-Ovo"
        >
          Hi! I'm Gishan Damindu <Image src={assets.hand_icon} alt="profile_icon" className="w-8"/>
        </motion.h3>
        
        <motion.h1
          initial={{y:-30, opacity:0}}
          whileInView={{y:0, opacity:1}}
          transition={{duration: 0.8, delay:0.5}}
          className="text-4xl sm:text-6xl lg:text-7xl font-Ovo leading-tight"
        >
        I am a coding enthusiast.
        </motion.h1>
        
        <motion.p 
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration: 0.6, delay:0.7}}
          className="max-w-3xl mx-auto text-lg font-Ovo"
        >
          As a self-motivated final-year undergraduate with a solid foundation of knowledge, I am passionate
          about tackling real-world problems and enthusiastic about making contributions to the fields of 
          <strong>&nbsp;Software Engineering</strong>, <strong>Computer Vision</strong>, and <strong>Machine Learning</strong>.
        </motion.p>
        
        <div className="flex flex-col sm:flex-row items-center gap-6 mt-8">
          <motion.a 
            initial={{y:30, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{duration: 0.6, delay:1}}
            href="#contact"
            className="px-12 py-4 border border-white rounded-full bg-black
              text-white flex items-center gap-3 dark:bg-transparent hover:bg-gray-900 
              transition-colors duration-300 text-lg"
          >
            Contact me<Image src={assets.right_arrow_white} alt="Arrow" className="w-5"/>
          </motion.a>
          
          <motion.a 
            initial={{y:30, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{duration: 0.6, delay:1.2}}
            href='CV_SE.pdf'
            download
            className="px-12 py-4 border rounded-full border-gray-500 flex items-center 
              gap-3 bg-white dark:text-black hover:bg-gray-100 transition-colors 
              duration-300 text-lg"
          >
            My resume<Image src={assets.download_icon} alt="download" className="w-5"/>
          </motion.a>
        </div>
      </div>
    </>
  );
};

export default Header;