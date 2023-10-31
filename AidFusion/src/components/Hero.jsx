import React from 'react'
import { Button } from './ui/button'

export const Hero = ({sectionId}) => {
  return (
    <div className='p-10 bg-white justify-between' id={sectionId}>
      <div className='flex flex-col gap-10'>
        <div className='gap-4 flex flex-col'>
        <p className='text-4xl'>LOREM IPSUM DoLOR SIT AMET.</p> 
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, sequi totam iusto fuga dicta nulla?</p>
        </div>
        <div className='flex gap-4'>
          <Button className="bg-secondary rounded-full">Learn more</Button>
          <Button className="bg-accent rounded-full">Learn more</Button>
        </div>
      </div>
    </div>
  )
}
