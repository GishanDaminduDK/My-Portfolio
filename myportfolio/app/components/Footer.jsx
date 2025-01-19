// import React from 'react'
// import Image from 'next/image'
// import { assets } from '@/assets/assets'

// const Footer = () => {
//   return (
//     <div className='mt-20'>
//         <div className='text-ceneter'>
//             <Image src={assets.logo} alt='Footer' className='w-36 mx-auto mb-2'/>
//         </div>
//         <div className='w-max flex items-center gap-2 mx-auto'>
//             <Image src={assets.mail_icon} alt='Email' className='w-6'/>
//             gishankalasinghe1999@gmail.com
//         </div>

//         <div className='text-ceneter sm:flex items-center justify-between border-t border gray-400 mx-[100%] mt-12 py-6'>
//             <p >Gishan Damindu 2025. All rights reserved.</p>
//             <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0' >
//                 <li>
//                     <a href='https://www.linkedin.com/in/gishan-damindu-6a4b881b7/' target='_blank'>
//                         <Image src={assets.abc_image} alt='Linkedin' className='w-6'/>Linkedin
//                     </a>
//                 </li>
//                 <li>

//                     <a href='https://www.linkedin.com/in/gishan-damindu-6a4b881b7/' target='_blank'>
//                         <Image src={assets.abc_image} alt='Linkedin' className='w-6'/>GitHUb
//                     </a>
//                 </li>
//                 <li>

//                     <a href='https://www.linkedin.com/in/gishan-damindu-6a4b881b7/' target='_blank'>
//                         <Image src={assets.abc_image} alt='Linkedin' className='w-6'/>Twitter
//                     </a>
//                 </li>
//             </ul>
          
//         </div>
//     </div>
    
//   )
// }

// export default Footer
import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Footer = ({isDarkMode}) => {
  return (
    <div className="mt-20">
      {/* Logo */}
      <div className="text-center">
        <Image src={isDarkMode? assets.logo_dark: assets.logo} alt="Footer Logo" className="w-36 mx-auto mb-2" />
      </div>

      {/* Contact Information */}
      <div className="w-max flex items-center gap-2 mx-auto">
        <Image src={isDarkMode? assets.mail_icon_dark:assets.mail_icon} alt="Email" className="w-6" />
        <span>gishankalasinghe1999@gmail.com</span>
      </div>

      {/* Footer Section */}
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-auto mt-12 py-6">
        <p>Gishan Damindu 2025. All rights reserved.</p>

        {/* Social Links */}
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a
              href="https://www.linkedin.com/in/gishan-damindu-6a4b881b7/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={assets.linkedin_icon} alt="LinkedIn" className="w-6 inline" /> LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/gishan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={assets.github_icon} alt="GitHub" className="w-6 inline" /> GitHub
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/gishan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={assets.twitter_icon} alt="Twitter" className="w-6 inline" /> Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer

