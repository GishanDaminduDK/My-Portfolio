
import React, { useState } from "react";
import { workData, assets } from "@/assets/assets";
import Image from "next/image";
import { motion } from "framer-motion";

const Work = ({ isDarkMode }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const scaleUp = {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 },
  };

  const overlayFade = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-gray-50 dark:bg-darkTheme dark:text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        {...fadeInUp}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My Projects
      </motion.h4>
      <motion.h2
        {...fadeInUp}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center text-5xl font-Ovo"
      >
        Featured Work
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {workData.map((project, index) => (
          <motion.div
            key={project.id || `${project.title}-${index}`}
            className="bg-white dark:bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 dark:shadow-white/5"
            {...scaleUp}
          >
            {/* Project Image */}
            <motion.div
              className="relative h-48 overflow-hidden"
              {...scaleUp}
            >
              <Image
                src={project.bgImage}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="transform hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            {/* Content Container */}
            <div className="p-6">
              <motion.div
                className="text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-2"
                {...fadeInUp}
              >
                {project.category || "Development"}
              </motion.div>

              <motion.h3
                className="text-xl font-semibold mb-3 dark:text-black"
                {...fadeInUp}
              >
                {project.title}
              </motion.h3>

              <motion.p
                className="text-gray-600 dark:text-gray-800 text-sm mb-4 line-clamp-2"
                {...fadeInUp}
              >
                {project.description}
              </motion.p>

              {/* Tech Stack Tags */}
              <motion.div
                className="flex flex-wrap gap-2 mb-4"
                {...fadeInUp}
              >
                {project.techStacks
                  .split(",")
                  .slice(0, 4)
                  .map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-darkTheme text-gray-600 dark:text-gray-300 rounded-full text-xs"
                    >
                      {tech.trim()}
                    </span>
                  ))}
              </motion.div>

              {/* Action Button */}
              <motion.div
                className="flex justify-between items-center"
                {...fadeInUp}
              >
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-sm font-medium text-indigo-900 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
                >
                  Read More
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.githublink, "_blank");
                  }}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-darkTheme rounded-full transition-colors"
                >
                  <Image
                    src={assets.send_icon}
                    alt="View Project"
                    className="w-4 h-4"
                  />
                </button>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          variants={overlayFade}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            className="bg-white dark:bg-darkHover rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-2">
                    {selectedProject.category || "Development"}
                  </div>
                  <h3 className="text-2xl font-semibold dark:text-white">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-darkTheme dark:text-white rounded-full"
                >
                  ×
                </button>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {selectedProject.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.techStacks.split(",").map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-100 dark:bg-darkTheme text-gray-600 dark:text-gray-300 rounded-full text-xs"
                  >
                    {tech.trim()}
                  </span>
                ))}
              </div>

              <button
                onClick={() => window.open(selectedProject.githublink, "_blank")}
                className="w-full py-2 bg-indigo-600 dark:bg-indigo-700 text-white rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-800 transition-colors"
              >
                View Project
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Work;
