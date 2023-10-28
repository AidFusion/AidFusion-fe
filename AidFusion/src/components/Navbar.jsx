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
        if (isToggled) {
            // Logic when the toggle is ON
            console.log('Toggled ON');
            // Perform actions for ON state
        } else {
            // Logic when the toggle is OFF
            console.log('Toggled OFF');
            // Perform actions for OFF state
        }
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

                {isToggled && (
                    <div className='text-center md:text-left md:w-1/2'>
                        <ul className='flex flex-col md:flex-row md:justify-around md:items-center'>
                            <li>About Us</li>
                            <li>How it Works</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                )}
                <div className='text-xl text-center'>AidFusion</div>

                <div className='text-center'>
                    <Button variant="outline" className="bg-accent border-0">Sign Up</Button>
                </div>
            </div>
        </>
    )
}
