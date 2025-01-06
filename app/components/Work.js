import React, { useState } from "react";
import { workData, assets } from "@/assets/assets";
import Image from "next/image";

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const handleNext = () => {
    if (currentIndex + itemsPerPage < workData.length) {
      setCurrentIndex((prev) => prev + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex((prev) => prev - itemsPerPage);
    }
  };

  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My latest work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end development.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {workData.slice(currentIndex, currentIndex + itemsPerPage).map((project, index) => (
          <div
            key={project.id || `${project.title}-${index}`}
            className="flex flex-col items-center relative bg-white shadow-lg rounded-lg overflow-hidden h-[550px] transition-all duration-300 hover:ring-2 hover:ring-gray-300 group "
          >
            <div
              className="aspect-square bg-no-repeat bg-cover bg-center relative cursor-pointer w-full"
              style={{ backgroundImage: `url(${project.bgImage})` }}
              onClick={() => window.open(project.githublink, "_blank")}
            >
              <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                <div>
                  <h2 className="font-bold text-lg">{project.title}</h2>
                </div>
                <div>
                  <Image
                    src={assets.send_icon}
                    alt="Send to GitHub"
                    className="w-5"
                  />
                </div>
              </div>
            </div>

            <div className="w-full absolute bottom-0 left-0">
              <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white p-4 rounded-lg">
                <p className="text-gray-700 text-sm">{project.description}</p>
              </div>

              <div className="bg-black bg-opacity-70 p-4 rounded-b-lg transition-all duration-300 hover:bg-opacity-90 justify-center">
                <div className="flex flex-wrap justify-center gap-2">
                  {project.techStacks.split(",").map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-yellow-500 text-black text-xs font-semibold px-2 py-1 rounded-full"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-10">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`py-2 px-5 border rounded ${
            currentIndex === 0
              ? "bg-gray-200 cursor-not-allowed"
              : "hover:bg-gray-100"
          }`}
        >
          Back
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex + itemsPerPage >= workData.length}
          className={`py-2 px-5 border rounded ${
            currentIndex + itemsPerPage >= workData.length
              ? "bg-gray-200 cursor-not-allowed"
              : "hover:bg-gray-100"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Work;
// import React, { useState } from "react";
// import { workData, assets } from "@/assets/assets";
// import Image from "next/image";

// const Work = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const itemsPerPage = 3; // Items to show at once (desktop view)

//   const handleNext = () => {
//     if (currentIndex + itemsPerPage < workData.length) {
//       setCurrentIndex((prev) => prev + itemsPerPage);
//     }
//   };

//   const handlePrev = () => {
//     if (currentIndex - itemsPerPage >= 0) {
//       setCurrentIndex((prev) => prev - itemsPerPage);
//     }
//   };

//   return (
//     <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
//       <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
//       <h2 className="text-center text-5xl font-Ovo">My latest work</h2>
//       <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
//         Welcome to my web development portfolio! Explore a collection of
//         projects showcasing my expertise in front-end development.
//       </p>

//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
//         {workData.slice(currentIndex, currentIndex + itemsPerPage).map((project, index) => (
//           <div
//             key={project.id || `${project.title}-${index}`}
//             className="flex flex-col items-center relative bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:ring-2 hover:ring-gray-300 group"
//           >
//             {/* Image Section */}
//             <div
//               className="aspect-square bg-no-repeat bg-cover bg-center relative cursor-pointer w-full"
//               style={{ backgroundImage: `url(${project.bgImage})` }}
//               onClick={() => window.open(project.githublink, "_blank")}
//             >
//               <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
//                 <div>
//                   <h2 className="font-bold text-lg">{project.title}</h2>
//                 </div>
//                 <div>
//                   <Image
//                     src={assets.send_icon}
//                     alt="Send to GitHub"
//                     className="w-5"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Project Description and Tech Stack */}
//             <div className="w-full p-4 flex flex-col justify-between">
//               {/* Project Description */}
//               <div
//                 className="max-h-0 opacity-0 overflow-hidden transition-all duration-300 group-hover:max-h-40 group-hover:opacity-100"
//               >
//                 <p className="text-gray-700 text-sm">{project.description}</p>
//               </div>

//               {/* Tech Stack */}
//               <div className="bg-black bg-opacity-70 p-4 mt-4 rounded-b-lg transition-all duration-300 hover:bg-opacity-90">
//                 <div className="flex flex-wrap justify-center gap-2">
//                   {project.techStacks.split(",").map((tech, techIndex) => (
//                     <span
//                       key={techIndex}
//                       className="bg-yellow-500 text-black text-xs font-semibold px-2 py-1 rounded-full"
//                     >
//                       {tech.trim()}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Pagination Buttons */}
//       <div className="flex justify-center gap-4 mt-10">
//         <button
//           onClick={handlePrev}
//           disabled={currentIndex === 0}
//           className={`py-2 px-5 border rounded ${
//             currentIndex === 0
//               ? "bg-gray-200 cursor-not-allowed"
//               : "hover:bg-gray-100"
//           }`}
//         >
//           Previous
//         </button>
//         <button
//           onClick={handleNext}
//           disabled={currentIndex + itemsPerPage >= workData.length}
//           className={`py-2 px-5 border rounded ${
//             currentIndex + itemsPerPage >= workData.length
//               ? "bg-gray-200 cursor-not-allowed"
//               : "hover:bg-gray-100"
//           }`}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Work;
