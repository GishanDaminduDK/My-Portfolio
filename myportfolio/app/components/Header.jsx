// import React from 'react'
// import Image from 'next/image'
// import {assets} from '@/assets/assets'


// const Header = () => {
//   return (
//     <div 
//     className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col 
//       items-center justify-center gap-4 relative' 
//     style={{ paddingTop: '2cm' }}>
//       <div>
//         {/* <Image src={assets.gishan_icon} alt="Background header color" className="rounded-full w-40" /> */}
//         <Image 
//   src={assets.gishan_icon} 
//   alt="Background header color" 
//   className="rounded-full w-40 object-cover object-[90%_10%]" 
// />

//       </div>
//       <h3 className = 'flex items-end gap-2 text-xl md:text-2xl mb-3 front-Ovo'>
//         Hi! I'm Gishan Damindu <Image src={assets.hand_icon} alt='profile_icon' className='w-6'/>
//       </h3>
//       <h1 className='text-3xl sm: text-6xl lg:text-[66px] font-Ovo'>
//       I am a technology enthusiast.
//       </h1>
//       <p className='max-w-2xl mx-auto font-Ovo'>
//         As a self-motivated final-year undergraduate with a solid foundation of knowledge, I am passionate
//         about tackling real-world problems and enthusiastic about making contributions to the fields of 
//         <strong> Software Engineering</strong>, <strong>Computer Vision</strong>, and <strong>Machine Learning</strong>.
//       </p>
//       <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
//         <a href='#contact'
//             className='px-10 py-3 border border-white rounded-full bg-black
//             text-white flex items-cwnter gap-2 dark:bg-transparent'>
//         contact me<Image src={assets.right_arrow_white} alt='Arrow' className='w-4'/>
//         </a>
//         <a href="/sample-resume.pdf" download
//         className='px-10 py-3 border rounded-full  border-gray 500 flex items-center gap-2 bg-white dark:text-black'>
//         my resume<Image src={assets.download_icon} alt='download' className='w-4'/>

//         </a>

//       </div>
//     </div>
//   )
// }

// export default Header
// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { Github, Linkedin, Facebook, Instagram } from 'lucide-react';
// import { assets } from '@/assets/assets';

// const SocialMediaBar = () => {
//   const socialLinks = [
//     {
//       name: 'LinkedIn',
//       icon: <Linkedin size={20} />,
//       href: '#',
//       color: 'hover:text-[#0077B5]'
//     },
//     {
//       name: 'GitHub',
//       icon: <Github size={20} />,
//       href: '#',
//       color: 'hover:text-[#333]'
//     },
//     {
//       name: 'Facebook',
//       icon: <Facebook size={20} />,
//       href: '#',
//       color: 'hover:text-[#1877F2]'
//     },
//     {
//       name: 'Instagram',
//       icon: <Instagram size={20} />,
//       href: '#',
//       color: 'hover:text-[#E4405F]'
//     },
//     {
//       name: 'Medium',
//       icon: <span className="font-bold text-lg">M</span>,
//       href: '#',
//       color: 'hover:text-[#000000]'
//     }
//   ];

//   return (
//     <div className="fixed left-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-6 z-50">
//       {socialLinks.map((link) => (
//         <Link
//           key={link.name}
//           href={link.href}
//           className={`bg-gray-900 p-2 rounded-lg transition-all duration-300 
//             hover:bg-gray-800 ${link.color} text-gray-400`}
//           aria-label={link.name}
//         >
//           {link.icon}
//         </Link>
//       ))}
//     </div>
//   );
// };

// const Header = () => {
//   return (
//     <>
//       <SocialMediaBar />
//       <div 
//         className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col 
//           items-center justify-center gap-4 relative' 
//         style={{ paddingTop: '2cm' }}
//       >
//         <div>
//           <Image 
//             src={assets.gishan_icon} 
//             alt="Background header color" 
//             className="rounded-full w-40 object-cover object-[90%_10%]" 
//           />
//         </div>
        
//         <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
//           Hi! I'm Gishan Damindu <Image src={assets.hand_icon} alt='profile_icon' className='w-6'/>
//         </h3>
        
//         <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
//           I am a technology enthusiast.
//         </h1>
        
//         <p className='max-w-2xl mx-auto font-Ovo'>
//           As a self-motivated final-year undergraduate with a solid foundation of knowledge, I am passionate
//           about tackling real-world problems and enthusiastic about making contributions to the fields of 
//           <strong> Software Engineering</strong>, <strong>Computer Vision</strong>, and <strong>Machine Learning</strong>.
//         </p>
        
//         <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
//           <a 
//             href='#contact'
//             className='px-10 py-3 border border-white rounded-full bg-black
//               text-white flex items-center gap-2 dark:bg-transparent'
//           >
//             contact me<Image src={assets.right_arrow_white} alt='Arrow' className='w-4'/>
//           </a>
          
//           <a 
//             href="/sample-resume.pdf" 
//             download
//             className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'
//           >
//             my resume<Image src={assets.download_icon} alt='download' className='w-4'/>
//           </a>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { assets } from '@/assets/assets';
import { Linkedin, Github, Facebook, Instagram, MessagesSquare } from 'lucide-react';

const SocialMediaBar = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin size={24} className="text-blue-300 hover:text-blue" />,
      href: '#'
    },
    {
      name: 'GitHub',
      icon: <Github size={24} className="text-gray-300 hover:text-black" />,
      href: '#'
    },
    {
      name: 'Facebook',
      icon: <Facebook size={24} className="text-blue-300 hover:text-blue" />,
      href: '#'
    },
    {
      name: 'Instagram',
      icon: <Instagram size={24} className="text-red-300 hover:text-red" />,
      href: '#'
    },
    {
      name: 'Medium',
      icon: <MessagesSquare size={24} className="text-gray-300 hover:text-white" />,
      href: '#'
    }
  ];

  return (
    <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-50">
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
  );
};

const Header = () => {
  return (
    <>
      <SocialMediaBar />
      <div 
        className="w-11/12 max-w-4xl text-center mx-auto min-h-screen flex flex-col 
          items-center justify-center gap-6 relative" 
        style={{ paddingTop: '2cm' }}
      >
        <div>
          <Image 
            src={assets.gishan_icon} 
            alt="Background header color" 
            className="rounded-full w-48 h-48 object-cover object-[90%_10%]" 
          />
        </div>
        
        <h3 className="flex items-end gap-2 text-2xl md:text-3xl mb-3 font-Ovo">
          Hi! I'm Gishan Damindu <Image src={assets.hand_icon} alt="profile_icon" className="w-8"/>
        </h3>
        
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-Ovo leading-tight">
          I am a technology enthusiast.
        </h1>
        
        <p className="max-w-3xl mx-auto text-lg font-Ovo">
          As a self-motivated final-year undergraduate with a solid foundation of knowledge, I am passionate
          about tackling real-world problems and enthusiastic about making contributions to the fields of 
          <strong> Software Engineering</strong>, <strong>Computer Vision</strong>, and <strong>Machine Learning</strong>.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-6 mt-8">
          <a 
            href="#contact"
            className="px-12 py-4 border border-white rounded-full bg-black
              text-white flex items-center gap-3 dark:bg-transparent hover:bg-gray-900 
              transition-colors duration-300 text-lg"
          >
            Contact me<Image src={assets.right_arrow_white} alt="Arrow" className="w-5"/>
          </a>
          
          <a 
            href="/sample-resume.pdf" 
            download
            className="px-12 py-4 border rounded-full border-gray-500 flex items-center 
              gap-3 bg-white dark:text-black hover:bg-gray-100 transition-colors 
              duration-300 text-lg"
          >
            My resume<Image src={assets.download_icon} alt="download" className="w-5"/>
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;