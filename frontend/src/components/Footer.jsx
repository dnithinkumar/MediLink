import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>MediLink is your trusted partner in connecting you with expert medical professionals. Our platform ensures a seamless appointment booking experience while prioritizing your health and convenience. With a focus on trust, transparency, and technology, we ensure you can easily connect with verified and experienced medical professionals. Your health and convenience are at the heart of everything we do.</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>ABOUT MEDILINK</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>Our Story</li>
            <li>How it Works</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>CONNECT WITH US</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+1-999-666-3330</li>
            <li>support@medilink.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024 © Medilink. Empowering your health journey. All Rights Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
