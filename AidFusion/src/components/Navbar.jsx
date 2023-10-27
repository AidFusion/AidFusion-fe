import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { Button } from './ui/button'

export const Navbar = () => {
    return (
        <>
        {/* //medium screens and above */}
            <div className='py-4 px-5 gap-5 justify-between items-center hidden md:flex'>
                <div className='text-xl'>AidFusion</div>
                <div className='w-1/2'>
                    <ul className='flex flex-row justify-around'>
                        <li>About Us</li>
                        <li>How it Works</li>
                        <li>Contact us</li>
                    </ul>
                </div>
                <div>
                    <Button variant="outline" className="bg-accent border-0">Sign Up</Button>
                </div>
            </div>
            {/* //small screens and below */}
            <div className='py-4 px-5 gap-5 justify-between items-center flex flex-col md:flex-row'>
      <div className='text-xl text-center mb-4 md:mb-0'>AidFusion</div>
      <div className='w-full md:w-auto flex justify-center mb-4 md:mb-0'>
        <Button variant="outline" className="bg-accent border-0">Toggle</Button>
      </div>
      <div className='text-center md:text-left md:w-1/2'>
        <ul className='flex flex-col md:flex-row md:justify-around md:items-center'>
          <li>About Us</li>
          <li>How it Works</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div className='text-center md:text-right w-full md:w-auto mt-4 md:mt-0'>
        <Button variant="outline" className="bg-accent border-0">Sign Up</Button>
      </div>
    </div>
        </>
    )
}
