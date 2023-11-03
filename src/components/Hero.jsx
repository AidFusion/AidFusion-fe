import React from 'react'
import { Button } from './ui/button'
import { Link } from 'react-scroll'
import { NavLink } from 'react-router-dom'

export const Hero = ({ sectionId }) => {
  return (
    <div className='p-10 bg-white justify-between' id={sectionId}>
      <div className='flex flex-col gap-10'>
        <div className='gap-4 flex flex-col'>
          <p className='text-4xl'>Reinventing Charitable Food Donations.</p>
          <p>AidFusion is not just a platform. It's a movement that is changing the world for the better.</p>
        </div>
        <div className='flex gap-4'>
          <Button className="bg-secondary rounded-full">
            <Link activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={500}>Learn more</Link>
          </Button>
          <Button className="bg-accent rounded-full">
            <NavLink to='/sign-up'>Join us</NavLink>
          </Button>
        </div>
      </div>
    </div>
  )
}
