import React from 'react'
import { Link } from 'react-router-dom'

export const DashFooter = () => {
  return (
    <div className='p-10 flex flex-col mx-auto md:flex-row md:gap-10 gap-10 md:space-x-20 '>
      <div className='flex justify-evenly gap-10 md:gap-14'>
        <div className='flex flex-col gap-2'>
          <div className='font-semibold text-xl'>Mobile App</div>
          <ul className='flex flex-col gap-2'>
            <li>
              <Link to="">Download the App</Link>
            </li>
            <li>
              <Link to="">App features</Link>
            </li>
          </ul>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='font-semibold text-xl'>Privacy & Terms</div>
          <ul className='flex flex-col gap-2'>
          <li>
              <Link to="">Privacy Policy</Link>
            </li>
            <li>
              <Link to="">Terms of Service</Link>
            </li>
            <li>
              <Link to="">Cookies Policy</Link>
            </li>
            <li>
              <Link to="">Data Protection</Link>
            </li>
            <li>
              <Link to="">Code of Conduct</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='flex justify-evenly gap-10 md:gap-14'>
        <div className='flex flex-col gap-2'>
          <div className='font-semibold text-xl'>About us</div>
          <ul className='flex flex-col gap-2'>
            <li>
              <Link to="">Our Team</Link>
            </li>
            <li>
              <Link to="">Contact Us</Link>
            </li>
            <li>
              <Link to="">Blog & News</Link>
            </li>
            <li>
              <Link to="">Testimonials</Link>
            </li>
          </ul>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='font-semibold text-xl'>Support & Resources</div>
          <ul className='flex flex-col gap-2'>
            <li>
              <Link to="">Help Center</Link>
            </li>
            <li>
              <Link to="">Donate</Link>
            </li>
            <li>
              <Link to="">Volunteer</Link>
            </li>
            <li>
              <Link to="">Partner with Us</Link>
            </li>
            <li>
              <Link to="">Resources for Restaurants</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
          }
