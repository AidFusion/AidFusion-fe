import { Button } from '@/components/ui/button';
import React, { useState } from 'react'
import { Link } from 'react-scroll'

export const DashNavbar = () => {
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
                    <Button variant="outline" className="bg-accent border-0">
                        <Link to="/sign-up">Sign Up</Link>
                    </Button>
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
