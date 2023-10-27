import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div className='p-10 flex flex-col mx-auto md:flex-row md:gap-10 gap-10 md:space-x-20 '>
      <div className='flex justify-evenly gap-10 md:gap-14'>
        <div className='flex flex-col gap-2'>
          <div className='font-semibold text-xl'>About us</div>
          <ul className=''>
            <li>
              <Link to="">Our Team</Link>
            </li>
            <li>
              <Link to="">Our Team</Link>
            </li>
            <li>
              <Link to="">Our Team</Link>
            </li>
            <li>
              <Link to="">Our Team</Link>
            </li>
          </ul>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='font-semibold text-xl'>About us</div>
          <ul className=''>
            <li>
              <Link to="">Our Team</Link>
            </li>
            <li>
              <Link to="">Our Team</Link>
            </li>
            <li>
              <Link to="">Our Team</Link>
            </li>
            <li>
              <Link to="">Our Team</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='flex justify-evenly gap-10 md:gap-14'>
        <div className='flex flex-col gap-2'>
          <div className='font-semibold text-xl'>About us</div>
          <ul className=''>
            <li>
              <Link to="">Our Team</Link>
            </li>
            <li>
              <Link to="">Our Team</Link>
            </li>
            <li>
              <Link to="">Our Team</Link>
            </li>
            <li>
              <Link to="">Our Team</Link>
            </li>
          </ul>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='font-semibold text-xl'>About us</div>
          <ul className=''>
            <li>
              <Link to="">Our Team</Link>
            </li>
            <li>
              <Link to="">Our Team</Link>
            </li>
            <li>
              <Link to="">Our Team</Link>
            </li>
            <li>
              <Link to="">Our Team</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
