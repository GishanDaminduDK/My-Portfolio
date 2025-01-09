import React, { useState } from "react";
import { workData, assets } from "@/assets/assets";
import Image from "next/image";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20 bg-gray-50">
      <h4 className="text-gray-600 uppercase tracking-wider text-sm mb-2">My Projects</h4>
      <h2 className="text-4xl font-semibold mb-8">Featured Work</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {workData.map((project, index) => (
          <div
            key={project.id || `${project.title}-${index}`}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
              <div 
                className="absolute inset-0 bg-center bg-cover transform hover:scale-105 transition-transform duration-500"
                style={{ backgroundImage: `url(${project.bgImage})` }}
              />
            </div>

            {/* Content Container */}
            <div className="p-6">
              {/* Category */}
              <div className="text-indigo-600 text-sm font-medium mb-2">
                {project.category || "Development"}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

              {/* Description Preview */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {project.description}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStacks.split(",").slice(0, 3).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                  >
                    {tech.trim()}
                  </span>
                ))}
              </div>

              {/* Action Button */}
              <div className="flex justify-between items-center">
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
                >
                  Learn More
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.githublink, "_blank");
                  }}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <Image
                    src={assets.send_icon}
                    alt="View Project"
                    className="w-4 h-4"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="text-indigo-600 text-sm font-medium mb-2">
                    {selectedProject.category || "Development"}
                  </div>
                  <h3 className="text-2xl font-semibold">{selectedProject.title}</h3>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  ×
                </button>
              </div>
              
              <p className="text-gray-600 mb-6">
                {selectedProject.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.techStacks.split(",").map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                  >
                    {tech.trim()}
                  </span>
                ))}
              </div>

              <button
                onClick={() => window.open(selectedProject.githublink, "_blank")}
                className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                View Project
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Work;