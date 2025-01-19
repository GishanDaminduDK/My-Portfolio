
import React, { useState } from 'react';
import Image from 'next/image';
import { assets, infoList, toolsData } from '@/assets/assets';
import { motion } from 'framer-motion';

const About = ({ isDarkMode }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCard = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <motion.div
      id="about-me"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-5xl font-Ovo"
      >
        About me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none"
        >
          <Image src={assets.user_image} alt="User" className="w-full rounded-3xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1"
        >
          <p className="mb-10 max-w-2xl font-Ovo">
            I am currently a final-year undergraduate student in the Department of Electronic and Telecommunication Engineering at the University of Moratuwa, Sri Lanka. I have a strong academic foundation and a passion for
            <strong> Software Engineering</strong>, <strong>Computer Vision</strong>, and <strong>Machine Learning</strong>. I am a quick learner, continuously seeking to expand my knowledge and skill set. As a team player, I am enthusiastic about collaborating with others to develop innovative applications. I am eager to explore and adapt to new technologies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`border rounded-lg p-6 cursor-pointer hover:shadow-lg transition-all duration-300 cursor-pointer hover:bg-none hover:-translate-y-1 hover:shadow-black
                duration-500 hover:shadow-black dark:border-white
                dark:hover:shadow-white dark:hover:bg-darkHover/50'${
                  activeIndex === index ? 'max-h-[350px]' : 'max-h-[120px]'
                }`}
                onClick={() => toggleCard(index)}
              >
                <div className="flex items-center">
                  <Image src={isDarkMode ? iconDark : icon} alt={title} className="mr-4 w-10 h-10" />
                  <h3 className="text-xl font-semibold text-gray-700 dark:text-white">{title}</h3>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? 'max-h-[300px] mt-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-base">
                    {description.split('\n').map((line, i) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                </div>
              </motion.div>
            ))}

            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="my-6 text-gray-700 font-Ovo text-2xl"
            >
              Tech stacks I use
            </motion.h4>
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3 sm:gap-5"
            >
              {toolsData.map((tool, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex items-center justify-center
                  w-12 sm:w-14 aspect-square border border-gray-400
                  rounded-lg cursor-pointer hover:-translate-y-1
                  duration-500"
                >
                  <Image src={tool} alt={`Tool ${index + 1}`} className="w-8 h-8 sm:w-10 sm:h-10" />
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;

