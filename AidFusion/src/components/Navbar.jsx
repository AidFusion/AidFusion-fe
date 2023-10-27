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
        <div className='py-4 px-5 gap-5 justify-between items-center sm:hidden md:flex'>
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
    )
}
