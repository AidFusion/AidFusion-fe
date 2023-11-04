import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Bell, Home, LogOutIcon, Search, Settings, User2, UserCircle2, X } from 'lucide-react';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll'

export const DashNavbar = () => {
    const [isToggled, setIsToggled] = useState(false);

    const toggle = () => {
        setIsToggled(!isToggled);
    };
    return (
        <>
            {/* //small screens and below */}
            <div className='py-4 px-5 gap-2 items-center flex justify-between'>
                <div className='text-xl text-center'>AidFusion</div>
                <div className='flex justify-around md:gap-5 lg:gap-0 lg:w-2/5 items-center'>
                    <div className='flex items-center bg-white rounded-lg focus-within:border-secondary border'>
                        <Input type="text" placeholder="Browse restaurants" className="focus-visible:ring-0 bg-transparent border-0 rounded-r-none focus-visible:ring-offset-0" />
                        <Search className='border-0 mr-3 cursor-pointer text-secondary' />
                    </div>
                    <Button variant="outline" className="bg-accent hidden md:block border-0">
                        <Link to="/">Log out</Link>
                    </Button>
                    <Bell className='hover:cursor-pointer hidden md:block hover:text-secondary' />
                    <div className='flex'>
                        <Button
                            variant="outline"
                            className='bg-transparent border-none hover:text-secondary hover:bg-transparent'
                            onClick={toggle}
                        >
                            {isToggled ? 'Open' :
                                <div className='flex items-center gap-2'>
                                    <UserCircle2 />
                                    <div>User</div>
                                </div>
                            }
                        </Button>
                    </div>
                </div>
            </div>
            {isToggled && (
                <div className='bg-secondary text-lg p-4 w-[70%] md:w-1/3 h-full absolute top-0 right-0 text-primary'>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center justify-evenly md:justify-normal md:gap-2 w-full md:px-6'>
                            <div className='bg-primary rounded-full p-1 md:p-2 flex items-center border justify-center border-primary'>
                                <UserCircle2 className='text-black' />
                            </div>
                            <div className='font-light text-sm md:text-lg'>Hello, FirstName!</div>
                        </div>
                        <Button
                            variant="outline"
                            className='border-0 bg-transparent hover:bg-transparent hover:text-white cursor-pointer'
                            onClick={toggle}
                        >
                            {isToggled ? <X /> : 'Close'}
                        </Button>
                    </div>
                    <ul className='flex flex-col gap-5 p-6 lg:w-1/2'>
                        <Link
                            onClick={toggle}
                            activeClass="active"
                            to="how-it-works"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='cursor-pointer border-b-2 border-transparent hover:bg-primary hover:text-secondary items-center p-2 rounded-md flex gap-2'
                        >
                            <Home />
                            <div>Home</div>
                        </Link>
                        <Link
                            onClick={toggle}
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='cursor-pointer border-b-2 border-transparent hover:bg-primary hover:text-secondary items-center p-2 rounded-md flex gap-2'
                        >
                                <User2 />
                                <div>Profile</div>
                        </Link>
                        <Link
                            onClick={toggle}
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='cursor-pointer border-b-2 border-transparent hover:bg-primary hover:text-secondary items-center p-2 rounded-md flex gap-2'
                        >
                            <Settings />
                            <div>Settings</div>
                        </Link>
                        <Link
                            onClick={toggle}
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='cursor-pointer border-b-2 border-transparent hover:bg-primary hover:text-secondary items-center p-2 rounded-md flex gap-2'
                        >
                            <Bell />
                            <div>Notifications</div>
                        </Link>
                        <NavLink to="/" className='border-b-2 border-transparent hover:bg-primary hover:text-secondary items-center p-2 rounded-md bg-primary text-secondary flex gap-2'>
                            <LogOutIcon />
                            <div>Log out</div>
                        </NavLink>
                    </ul>
                </div>
            )}
        </>
    )
}
