import Layout from '@/components/Layout'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <>
            <div className='bg-primary'>
                <Layout>
                    <div className='p-5'>
                        <Card className='bg-white px-2 md:px-10 py-5 md:w-2/3 flex flex-col gap-6 mx-auto justify-center'>
                            <CardHeader>
                                <CardTitle className='text-3xl font-bold'>Log In</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col gap-6">
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="email">Email Address</label>
                                    <Input type="email" placeholder="Email Address" required />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="password">Password</label>
                                    <Input type="password" placeholder="Password" required />
                                </div>

                                <Button variant="outline" className="bg-accent my-6 cursor-pointer">
                                    <Link to="/dashboard">Join the Waitlist!</Link>
                                </Button>

                                <div className='border-b border-txtSecondary flex justify-center mb-4'>
                                    <div className='absolute -mt-[0.8em] bg-white'>Already have an account? <span><Link to="/sign-up" className="text-txtSecondary border-b border-b-transparent hover:border-b-txtPrimary">Sign up</Link></span></div>
                                </div>
                            {/* <Button variant="outline" className="bg-txtSecondary text-white">Sign up with Google</Button>
                            <Button variant="outline" className="bg-txtSecondary text-white">
                                <Link>Log In with Phone Number</Link>
                            </Button> */}
                            <div>
                                <Link to="/forgot-password" className="text-txtSecondary border-b border-b-transparent hover:border-b-txtPrimary">Forgot Password?</Link>
                            </div>
                        </CardContent>
                    </Card>
            </div>
        </Layout >
            </div >
        </>
    )
}