import Layout from '@/components/Layout'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <>
            <div className='bg-primary'>
                <Layout>
                    <div className='p-5'>
                        <div className='bg-white p-10 py-5 md:w-2/3 flex flex-col gap-6 mx-auto justify-center'>
                            <label htmlFor="" className='text-3xl font-bold text-center'>Log In</label>
                            
                            <div>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="email">Email Address</label>
                                <Input type="email" placeholder="Email Address" required />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="password">Password</label>
                                <Input type="password" placeholder="Password" required />
                            </div>

                            <Button variant="outline" className="bg-accent my-6 cursor-pointer">Log In</Button>

                            <div className='border-b border-txtSecondary flex justify-center mb-4'>
                                <div className='absolute -mt-[0.8em] bg-white'>Already have an account? <span><Link to="/sign-up" className="text-txtSecondary border-b border-b-transparent hover:border-b-txtPrimary">Sign up</Link></span></div>
                            </div>
                            </div>

                            <Button variant="outline" className="bg-txtSecondary text-white">Sign up with Google</Button>
                            <Button variant="outline" className="bg-txtSecondary text-white">
                                <Link>Log In with Phone Number</Link>
                            </Button>
                            <div>
                                <Link to="/forgot-password" className="text-txtSecondary border-b border-b-transparent hover:border-b-txtPrimary">Forgot Password?</Link>
                            </div>
                        </div>
                    </div>
                </Layout>
            </div>
        </>
    )
}