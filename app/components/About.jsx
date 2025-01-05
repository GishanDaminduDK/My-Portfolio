import React from 'react'
import Image from 'next/image'
import { assets, infoList } from '@/assets/assets'

const About = () => {
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
                <strong>Software Engineering</strong>, <strong>Computer Vision</strong>, and <strong>Machine Learning</strong>.  
                I am a quick learner, continuously seeking to expand my knowledge and skill set. As a team player, I am enthusiastic about collaborating with others to develop innovative applications. I am eager to explore and adapt to new technologies.
            </p>


                <ul>
                    {infoList.map(({ icon, iconDark, title, description }, index) => (
                        <li key={index} className='flex items-start mb-6'>
                            <Image src={icon} alt={title} className='mr-4 w-10 h-10' />
                            <div>
                                <h3 className='text-xl font-semibold'>{title}</h3>
                                <p className='text-base'>
                                    {description.split('\n').map((line, i) => (
                                        <span key={i}>
                                            {line}
                                            <br />
                                        </span>
                                    ))}
                                </p>
                            </div>
                        </li>
                    ))}

                </ul>
            </div>
        </div>
    </div>

  )
}

export default About
