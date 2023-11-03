import React from 'react';
import { About } from '@/components/About';
import { Howitworks } from '@/components/Howitworks';
import { Testimonials } from '@/components/Testimonials';
import { Hero } from '@/components/Hero';
import { Contact } from '@/components/Contact';
import Layout from '@/components/Layout';
import { DashLayout } from '../components/DashLayout';


export const DashHome = ({sectionId}) => {
  // const scrollToSection = (sectionId) => {
  //   const section = document.getElementById(sectionId);
  //   if (section) {
  //     section.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };
  return (
    <div className='bg-primary'>
      <DashLayout>
        <div className='text-5xl font-bold h-screen bg-white text-center justify-center items-center flex mx-4'>
          Coming Soon!
          {/* <Hero sectionId="hero" />
          <About sectionId="about" />
          <Howitworks sectionId="how-it-works" />
          <Testimonials sectionId="testionials" />
          <Contact sectionId="contact" /> */}
        </div>
      </DashLayout>
    </div>
  );
}