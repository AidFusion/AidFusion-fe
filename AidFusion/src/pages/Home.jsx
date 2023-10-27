import React from 'react';
import { About } from '@/components/About';
import { Howitworks } from '@/components/Howitworks';
import { Testimonials } from '@/components/Testimonials';
import { Hero } from '@/components/Hero';
import { Contact } from '@/components/Contact';
import Layout from '@/components/Layout';


export const Home = () => {
  return (
    <div className='bg-primary'>
      <Layout>
        <div className=''>
          <Hero />
          <About />
          <Howitworks />
          <Testimonials />
          <Contact />
        </div>
      </Layout>
    </div>
  );
}