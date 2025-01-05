
import React, { useState } from 'react'
import Image from 'next/image'
import { assets, infoList, toolsData } from '@/assets/assets'

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCard = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id='about-me' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
      <h2 className='text-center text-5xl font-Ovo'>About me</h2>

      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
          <Image src={assets.user_image} alt='User' className='w-full rounded-3xl' />
        </div>

        <div className='flex-1'>
          <p className='mb-10 max-w-2xl font-Ovo'>
            I am currently a final-year undergraduate student in the Department of Electronic and Telecommunication Engineering at the University of Moratuwa, Sri Lanka. I have a strong academic foundation and a passion for
            <strong> Software Engineering</strong>, <strong>Computer Vision</strong>, and <strong>Machine Learning</strong>.
            I am a quick learner, continuously seeking to expand my knowledge and skill set. As a team player, I am enthusiastic about collaborating with others to develop innovative applications. I am eager to explore and adapt to new technologies.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <div
                key={index}
                className={`border rounded-lg p-6 cursor-pointer hover:shadow-lg transition-all duration-300 cursor-pointer hover:bg-lightHover hover:-translate-y-1 hover:shadow-black
                duration-500'${
                  activeIndex === index ? 'max-h-[350px]' : 'max-h-[120px]'
                }`}
                onClick={() => toggleCard(index)}
              >
                <div className='flex items-center'>
                  <Image src={icon} alt={title} className='mr-4 w-10 h-10' />
                  <h3 className='text-xl font-semibold'>{title}</h3>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? 'max-h-[300px] mt-4' : 'max-h-0'
                  }`}
                >
                  <p className='text-base'>
                    {description.split('\n').map((line, i) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            ))}
            <h4 className='my-6 text-gray-700 font-Ovo text-2xl'> Tech stacks I use</h4>
            <ul className='flex items-center gap-3 sm:gap-5'>
              {toolsData.map((tool, index) => (
                <li className='flex items-ceneter justify-center
                w-12 sm:w-14 aspect-square border border-gray-400
                rounded-lg cursor-pointer hover:-translate-y-1
                duration-500' key={index}>
                  <Image src={tool} alt={`Tool ${index + 1}`} className='w-8 h-8 sm:w-10 sm:h-10' />
                </li>

              ))}
            </ul>

          </div>
        </div>
      </div> 
    </div>
  );
};

export default About;
