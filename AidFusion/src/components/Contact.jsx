import React from 'react';
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Button } from './ui/button';

export const Contact = () => {
    return (
        <div className='bg-secondary text-white p-10 flex flex-col md:flex-row gap-10'>
            <div className='md:text-left md:w-1/2'>
                <h1 className='text-4xl font-semibold'>Contact Us</h1>
                <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita ducimus, delectus officia corporis architecto magnam veritatis velit aspernatur quia modi eius iusto ipsum deserunt? Accusamus id neque deserunt quas distinctio!</div>
            </div>
            <form className='flex flex-col gap-6 w-full text-lg font-light'>
                <div className='gap-6 flex flex-col md:flex-row md:items-center'>
                    <label htmlFor="name">Name</label>
                    <Input type="text" name="name" placeholder="Name" required />

                    <label htmlFor="email">Email</label>
                    <Input type="email" name="email" placeholder="Email Address" required />

                </div>
                <label htmlFor="message">Your Message</label>
                <Textarea placeholder="Type your message here." id="message" />
                <Button type="submit" className="w-1/2 mx-auto bg-transparent border hover:bg-accent hover:border-transparent text-lg">Submit</Button>
            </form>
        </div>
    );
}