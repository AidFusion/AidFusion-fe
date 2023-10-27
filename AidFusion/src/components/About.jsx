import React from 'react'

export const About = () => {
  return (
    <div className='p-10 flex flex-col gap-10'>
      <div className='text-2xl text-center font-semibold p-5'>ABOUT US</div>
      <div className='flex gap-10 items-center'>
        <div className='w-[50%] h-80 rounded-md bg-secondary object-contain'>
          <img className='object-contain rounded-md' src="" alt="" />
        </div>
        <div className='w-[50%]'>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempore culpa laboriosam veritatis! Incidunt, mollitia dolorem vitae debitis iste veritatis aliquam magni laboriosam, a expedita error culpa in inventore cupiditate?Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo assumenda officiis, facere sint id, voluptate amet voluptatem tempore porro inventore sunt aspernatur commodi corporis quos dolorum aliquid harum, a numquam.lorem</div>
        </div>
      </div>
    </div>
  )
}
