import React from 'react';
import { workData } from '@/assets/assets';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const Work = () => {
  return (
    <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>My portfolio</h4>
      <h2 className='text-center text-5xl font-Ovo'>My latest work</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.
      </p>

      <div className='grid grid-cols-auto my-10 gap-5'>
        {workData.map((project, index) => (
          <div
            key={index}
            className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
            style={{ backgroundImage: `url(${project.bgImage})` }}
            onClick={() => window.open(project.githublink, '_blank')}
          >
            <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
              <div>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
              <div>
                <Image src={assets.send_icon} alt='send icon' className='w-5'/>
              </div>
            </div>
          </div>
        ))}
      </div>

      <a
        href='https://github.com/GishanDaminduDK' target='_blank' rel='noopener noreferrer'
        className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500'
      >
        Show more <Image src={assets.right_arrow_bold} alt='Right arrow' className='w-4'/>
      </a>
    </div>
  );
}

export default Work;
