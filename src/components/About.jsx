import React from 'react'

export const About = ({sectionId}) => {
  return (
    <div className='p-10 flex flex-col gap-10' id={sectionId}>
      <div className='text-2xl text-center font-semibold p-5'>ABOUT US</div>
      <div className='flex flex-col md:flex-row gap-10 items-center'>
        <div className='md:w-[50%] w-full h-80 rounded-md bg-secondary object-contain'>
          <img className='object-contain rounded-md' src="" alt="" />
        </div>
        <div className='md:w-[50%] w-full'>
          <div>AidFusion is a groundbreaking charitable food donation app that reimagines how we tackle food in security. At it's core, AidFusion's mission is to empower individuals and businesses to make a significant impact on the lives of less privileged inidividuals. <br /><br />
          AidFusion operates on a unique model where donors contribute money, which is then channelled to registered restaurants. These restaurants, committed to supporting their communities, provide meals to registered users who are in need. What sets AidFusion apart is its use of QR Code technology for secure and transparent transactions. This ensures that donors have full confidence that their contributions are used exclusively for food support.
          </div>
        </div>
      </div>
    </div>
  )
}
