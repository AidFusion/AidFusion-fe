import React, { useState } from 'react'
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
    const [isToggled, setIsToggled] = useState(false);

    const toggle = () => {
        setIsToggled(!isToggled);
    };
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
            <div className='py-4 px-5 gap-5 justify-between items-center flex md:hidden'>
                <div className='flex'>
                    <Button
                        variant="outline"
                        className={`bg-accent border-0 ${isToggled ? 'bg-green-500' : 'bg-red-500'}`}
                        onClick={toggle}
                    >
                        {isToggled ? 'Open' : 'Close'}
                    </Button>
                </div>
                <div className='text-xl text-center'>AidFusion</div>
                <div className='text-center'>
                    <Button variant="outline" className="bg-accent border-0">Sign Up</Button>
                </div>
            </div>
            {isToggled && (
                    <div className='text-center bg-secondary text-lg p-4 w-[70%] h-full absolute top-0 text-primary'>
                        <div className='flex'>
                    <Button
                        variant="outline"
                        className={`bg-accent border-0 ${isToggled ? 'bg-green-500' : 'bg-red-500'}`}
                        onClick={toggle}
                    >
                        {isToggled ? 'Open' : 'Close'}
                    </Button>
                </div>
                        <ul className='flex flex-col items-center gap-5 py-6'>
                            <li className='border-transparent border-b-2 hover:border-b-2 hover:border-primary'>About Us</li>
                            <li className='border-transparent border-b-2 hover:border-b-2 hover:border-primary'>How it Works</li>
                            <li className='border-transparent border-b-2 hover:border-b-2 hover:border-primary'>Contact us</li>
                        </ul>
                    </div>
                )}
        </>
    )
}
