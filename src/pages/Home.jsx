import React from 'react';
import { About } from '@/components/About';
import { Howitworks } from '@/components/Howitworks';
import { Testimonials } from '@/components/Testimonials';
import { Hero } from '@/components/Hero';
import { Contact } from '@/components/Contact';
import Layout from '@/components/Layout';


export const Home = ({sectionId}) => {
  // const scrollToSection = (sectionId) => {
  //   const section = document.getElementById(sectionId);
  //   if (section) {
  //     section.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };
  return (
    <div className='bg-primary'>
      <Layout>
        <div className=''>
          <Hero sectionId="hero" />
          <About sectionId="about" />
          <Howitworks sectionId="how-it-works" />
          <Testimonials sectionId="testionials" />
          <Contact sectionId="contact" />
        </div>
      </Layout>
    </div>
  );
}