import Layout from '@/components/Layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Signup = () => {
    const TabSelector = ({ activeTab, handleTabChange }) => {
        return (
            <div className="flex flex-row mt-4">
                <Button
                    variant="outline"
                    className={`rounded-none focus:bg-txtSecondary focus:text-white text-lg font-normal text-black cursor-pointer active:bg-txtSecondary ${activeTab === 'beneficiary' ? 'active-tab' : ''}`}
                    onClick={() => handleTabChange('beneficiary')}
                >
                    Beneficiary
                </Button>
                <Button
                    variant="outline"
                    className={`rounded-none focus:bg-txtSecondary focus:text-white text-lg font-normal text-black active:bg-txtSecondary cursor-pointer ${activeTab === 'restaurant' ? 'active-tab' : ''}`}
                    onClick={() => handleTabChange('restaurant')}
                >
                    Restaurant
                </Button>
            </div>
        );
    };

    const TabContent = ({ activeTab }) => {
        if (activeTab === 'beneficiary') {
            return (
                <>
                    <div className='flex flex-col md:flex-row gap-6'>
                        <div className='flex flex-col gap-2 w-full'>
                            <label htmlFor="first name">First Name</label>
                            <Input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label htmlFor="last name">Last Name</label>
                            <Input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="email">Email Address</label>
                        <Input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="password">Password</label>
                        <Input type="password" placeholder="Password" value={password} onChange={(e) => setPasswordPassword(e.target.value)} required />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="confirm password">Confirm Password</label>
                        <Input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                    </div>

                    <Button variant="outline" className="bg-accent my-6 cursor-pointer" onClick={handleSignup}>Sign up</Button>
                    <div className='border-b border-txtSecondary flex justify-center mb-4'>
                        <div className='absolute -mt-[0.8em] bg-white'>Already have an account? <span><Link to="/sign-up" className="text-txtSecondary border-b border-b-transparent hover:border-b-txtPrimary">Sign up</Link></span></div>
                    </div>
                </>
            );
        } else if (activeTab === 'restaurant') {
            return (
                <>
                    <div className='flex flex-col gap-2 w-full'>
                        <label htmlFor="restaurant name">Restaurant Name</label>
                        <Input type="text" placeholder="First Name" value={resName} onChange={(e) => setResName(e.target.value)} required />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="email">Email Address</label>
                        <Input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="password">Password</label>
                        <Input type="password" placeholder="Password" value={password} onChange={(e) => setPasswordPassword(e.target.value)} required />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="confirm password">Confirm Password</label>
                        <Input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                    </div>

                    <Button variant="outline" className="bg-accent my-6 cursor-pointer" onClick={handleSignup}>Sign Up</Button>
                    <div className='border-b border-txtSecondary flex justify-center mb-4'>
                        <div className='absolute -mt-[0.8em] bg-white'>Already have an account? <span><Link to="/sign-up" className="text-txtSecondary border-b border-b-transparent hover:border-b-txtPrimary">Sign up</Link></span></div>
                    </div>
                </>
            );
        }
    }

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [resName, setResName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [activeTab, setActiveTab] = useState('beneficiary');

    const handleSignup = () => {
        // Validation: Check if all fields are filled
        if (firstName && lastName && email && password && confirmPassword) {
            if (password !== confirmPassword) {
                alert("Passwords don't match");
                return;
            }

            // Assuming validation passes, create user object
            const newUser = {
                firstName,
                lastName,
                email,
                password,
            };

            // Save the user data to local storage
            // For demonstration purposes, the data is saved as a JSON string
            localStorage.setItem('user', JSON.stringify(newUser));

            // Optionally, you can navigate the user to a different page upon successful signup
            // Example: history.push('/dashboard');
        } else {
            alert('Please fill in all the fields');
        }
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    }

    return (
        <>
            <div className='bg-primary'>
                <Layout>
                    <div className='p-5'>
                        <Card className='bg-white px-10 py-5 md:w-2/3 flex flex-col gap-6 mx-auto justify-center'>
                            <CardHeader>
                                <CardTitle className='text-3xl font-bold'>Sign Up</CardTitle>
                                <CardDescription>
                                    <TabSelector activeTab={activeTab} handleTabChange={handleTabChange} />
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex flex-col gap-6">
                                <TabContent activeTab={activeTab} />

                                <Button variant="outline" className="bg-txtSecondary text-white cursor-pointer">Sign Up with Google</Button>
                                <Button variant="outline" className="bg-txtSecondary text-white cursor-pointer">Sign Up with Phone Number</Button>
                            </CardContent>
                        </Card>

                        <div >
                            <label htmlFor="" ></label>




                        </div>
                    </div>
                </Layout>
            </div>
        </>
    )
}