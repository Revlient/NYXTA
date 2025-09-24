import React, { useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Hostels } from './components/Hostels';
import { Amenities } from './components/Amenities';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Smooth scrolling
    const lenis = {
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    };

    // Initialize scroll animations
    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="bg-[#13261E] text-white overflow-x-hidden">
      {/* Flowing Wave Background */}
      <div className="flowing-waves">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
      
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Hostels />
        <Amenities />
        <Gallery />
        {/* <Testimonials /> */}
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;