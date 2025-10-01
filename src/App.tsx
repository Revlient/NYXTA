import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Hostels } from './components/Hostels';
import { HostelDetails } from './components/HostelDetails';
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
    <div className="text-white overflow-x-hidden">
      <Routes>
        <Route path="/" element={
          <div className="relative z-10">
            <Navigation />
            <Hero />
            <About />
            <Hostels />
            <Amenities />
            <Gallery />
            <Contact />
            <Footer />
          </div>
        } />
        <Route path="/hostel/:branchId/" element={<HostelDetails />} />
      </Routes>
    </div>
  );
}

export default App;