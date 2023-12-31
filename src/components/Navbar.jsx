import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { NavLink } from 'react-router-dom'
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
import { Menu, MenuIcon, X } from 'lucide-react'

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
                        <NavLink to="/" className='cursor-pointer hover:text-secondary hover:border-b-secondary border-b-2 border-transparent'
                        >Home</NavLink>
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='cursor-pointer hover:text-secondary hover:border-b-secondary border-b-2 border-transparent'
                        >
                            About Us
                        </Link>
                        <Link
                            activeClass="active"
                            to="how-it-works"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='cursor-pointer hover:text-secondary hover:border-b-secondary border-b-2 border-transparent'
                        >
                            How it Works
                        </Link>
                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='cursor-pointer hover:text-secondary hover:border-b-secondary border-b-2 border-transparent'
                        >
                            Contact us
                        </Link>
                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='cursor-pointer hover:text-secondary hover:border-b-secondary border-b-2 border-transparent'
                        >
                            Testimonials
                        </Link>
                    </ul>
                </div>
                <div>
                    <Button variant="outline" className="bg-accent border-0">
                        <NavLink to="/sign-up">Sign Up</NavLink>
                    </Button>
                </div>
            </div>
            {/* //small screens and below */}
            <div className='py-4 px-5 gap-5 justify-between items-center flex md:hidden'>
                <div className='flex'>
                    <Button
                        variant="outline"
                        onClick={toggle} className="bg-transparent border-0"
                    >
                        {isToggled ? <X /> : <MenuIcon />}
                    </Button>
                </div>
                <div className='text-xl text-center'>AidFusion</div>
                <div className='text-center'>
                    <Button variant="outline" className="bg-accent border-0">
                        <NavLink to="/sign-up">Sign Up</NavLink>
                    </Button>
                </div>
            </div>
            {isToggled && (
                <div className='text-center bg-secondary text-lg p-4 w-[70%] h-full absolute top-0 text-primary'>
                    <div className='flex'>
                        <Button
                            variant="outline"
                            className="bg-transparent border-0"
                            onClick={toggle}
                        >
                            {isToggled ? <X /> : <Menu />}
                        </Button>
                    </div>
                    <ul className='flex flex-col items-center gap-5 py-6'>
                    <NavLink to="/" className='hover:border-b-primary cursor-pointer border-b-2 border-transparent'>Home</NavLink>
                        <Link
                            onClick={toggle}
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='hover:border-b-primary cursor-pointer border-b-2 border-transparent'
                        >
                            About Us
                        </Link>
                        <Link
                            onClick={toggle}
                            activeClass="active"
                            to="how-it-works"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='hover:border-b-primary cursor-pointer border-b-2 border-transparent'
                        >
                            How it Works
                        </Link>
                        <Link
                            onClick={toggle}
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='hover:border-b-primary cursor-pointer border-b-2 border-transparent'
                        >
                            Contact us
                        </Link>
                        <Link
                            onClick={toggle}
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='hover:border-b-primary cursor-pointer border-b-2 border-transparent'
                        >
                            Testimonials
                        </Link>
                    </ul>
                </div>
            )}
        </>
    )
}
