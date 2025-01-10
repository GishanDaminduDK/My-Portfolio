import React from 'react'
import Image from 'next/image'
import {assets} from '@/assets/assets'


const Header = () => {
  return (
    <div 
    className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col 
      items-center justify-center gap-4 relative' 
    style={{ paddingTop: '2cm' }}>
      <div>
        <Image src={assets.profile_img} alt="Background header color" className="rounded-full w-40" />
      </div>
      <h3 className = 'flex items-end gap-2 text-xl md:text-2xl mb-3 front-Ovo'>
        Hi! I'm Gishan Damindu <Image src={assets.hand_icon} alt='profile_icon' className='w-6'/>
      </h3>
      <h1 className='text-3xl sm: text-6xl lg:text-[66px] font-Ovo'>
      I am a technology enthusiast.
      </h1>
      <p className='max-w-2xl mx-auto font-Ovo'>
        As a self-motivated final-year undergraduate with a solid foundation of knowledge, I am passionate
        about tackling real-world problems and enthusiastic about making contributions to the fields of 
        <strong> Software Engineering</strong>, <strong>Computer Vision</strong>, and <strong>Machine Learning</strong>.
      </p>
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <a href='#contact'
            className='px-10 py-3 border border-white rounded-full bg-black
            text-white flex items-cwnter gap-2 dark:bg-transparent'>
        contact me<Image src={assets.right_arrow_white} alt='Arrow' className='w-4'/>
        </a>
        <a href="/sample-resume.pdf" download
        className='px-10 py-3 border rounded-full  border-gray 500 flex items-center gap-2 bg-white dark:text-black'>
        my resume<Image src={assets.download_icon} alt='download' className='w-4'/>

        </a>

      </div>
    </div>
  )
}

export default Header
