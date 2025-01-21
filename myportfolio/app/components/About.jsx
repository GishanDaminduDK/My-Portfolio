
import React, { useState } from 'react';
import Image from 'next/image';
import { assets, infoList, toolsData } from '@/assets/assets';
import { motion } from 'framer-motion';


const About = ({ isDarkMode }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedInfo, setSelectedInfo] = useState(null);
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
          Hello! My name is Gishan Damindu, and I am in my final year pursuing a bachelor's degree in Electronic and Telecommunication Engineering at the University of Moratuwa. Throughout my academic journey, I have developed a solid foundation in both electronic and computer science engineering principles, continuously seeking opportunities to expand my knowledge and skills.
          <br /><br />
          I am deeply passionate about leveraging my expertise to contribute meaningfully to the industry and society. My goal is to develop innovative solutions that address real-world challenges while continuously learning and evolving. I am sincerely grateful to my parents, professors, schools, university, and training organizations for their guidance and support. Their encouragement has shaped me into the person I am today, instilling in me a strong foundation, a positive mindset, and the drive to make a lasting impact in my field.
        </p>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           
           {infoList.map(({ icon, iconDark, title, description }, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 
                          cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300
                          transform hover:-translate-y-2 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800"
                onClick={() => setSelectedInfo({ title, description })}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Image
                      src={isDarkMode ? iconDark : icon}
                      alt={title}
                      className="mr-4 w-12 h-12"
                    />
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                      {title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* ✨ Popup Modal with Glassmorphism Effect ✨ */}
            {selectedInfo && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg 
                            max-w-lg w-full border border-gray-200 dark:border-gray-700
                            bg-opacity-80 dark:bg-opacity-90 backdrop-filter backdrop-blur-lg"
                >
                  <button
                    className="absolute top-4 right-4 text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-all"
                    onClick={() => setSelectedInfo(null)}
                  >
                    ✖
                  </button>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {selectedInfo.title}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {selectedInfo.description}
                  </p>
                  <button
                    className="mt-6 px-5 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-all"
                    onClick={() => setSelectedInfo(null)}
                  >
                    Close
                  </button>
                </motion.div>
              </div>
            )}

            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="my-6 text-gray-700 font-Ovo text-2xl dark:text-white"
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

