import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className=' font-semibold text-lg text-gray-600'>VISIT OUR OFFICE</p>
          <p className=' text-gray-500'>MediLink Headquarters <br /> 123 Harmony Lane, Suite 400, Hyderabad, India</p>
          <p className=' text-gray-500'>Phone: +91 9996663330 <br /> Email: support@medilink.com</p>
          <p className=' font-semibold text-lg text-gray-600'>JOIN OUR TEAM</p>
          <p className=' text-gray-500'>Be part of our mission to revolutionize healthcare. <br/> Discover opportunities to grow and innovate with MediLink.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Careers</button>
        </div>
      </div>

    </div>
  )
}

export default Contact
