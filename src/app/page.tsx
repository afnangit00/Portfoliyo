import Hero from '@/components/hero';
import Navbar from '@/components/navbar';
import About from '@/components/about';
import Skills from '@/components/skills';
import React from 'react';
import Projects from '@/components/projects';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

const page = () => {
  return (
    <main className="bg-[#0B0B0C] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills/>
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

export default page