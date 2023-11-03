import Layout from '@/components/Layout'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

export const ForgotPassword = () => {
    return (
        <>
            <div className='bg-primary'>
                <Layout>
                    <div className='p-5'>
                        <div className='bg-white px-10 py-5 md:w-2/3 flex flex-col gap-6 mx-auto justify-center'>
                        <label htmlFor="" className='text-3xl font-bold text-center'>Forgot Password</label>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="new password">New Password</label>
                                <Input type="password" placeholder="Enter new password" required />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="confrim password">Confirm Password</label>
                                <Input type="password" placeholder="Confirm password" required />
                            </div>
                            <Button variant="outline" className="bg-accent my-6 cursor-pointer">Save Password</Button>
                        </div>
                    </div>
                </Layout>
            </div>
        </>
    )
}