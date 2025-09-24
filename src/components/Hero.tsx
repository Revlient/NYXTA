import React, { useEffect, useRef } from "react";
import { ArrowRight, MapPin, Star } from "lucide-react";
import { gsap } from "gsap";

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const buildingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text animations
      gsap.fromTo(
        ".hero-title",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.3 }
      );

      gsap.fromTo(
        ".hero-subtitle",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.6 }
      );

      gsap.fromTo(
        ".hero-cta",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.9 }
      );

      // 3D Building animation
      gsap.fromTo(
        ".building-layer",
        { y: 50, opacity: 0, rotateX: 45 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.5,
          ease: "power3.out",
          stagger: 0.2,
          delay: 1.2,
        }
      );

      // Floating animation for building
      gsap.to(".building-container", {
        y: -20,
        duration: 3,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        delay: 2,
      });

      // Parallax effect
      gsap.to(".hero-bg", {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="hero-bg absolute inset-0 bg-gradient-to-br from-[#13261E] via-transparent to-blue-900/30" />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              {/* <div className="flex items-center space-x-2 text-purple-400">
                <MapPin size={20} />
                <span className="text-sm font-medium">Downtown City Center</span>
              </div> */}
              <h1 className="hero-title text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block bg-gradient-to-r from-[#D1C0B2] via-pink-400 to-[#A08647] bg-clip-text text-transparent">
                  NYXTA  
                </span>
                HOSTELS
              </h1>
              <p className="hero-subtitle text-xl text-white/80 max-w-lg">
                – the trusted space for budget friendly, safe, and
                comfortable stays in the heart of Kochi
              </p>
            </div>

            <div className="hero-cta flex flex-col sm:flex-row gap-4">
              <button className="group px-8 py-4 bg-gradient-to-r from-[#D1C0B2] via-pink-400 to-[#A08647] rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Book Your Stay</span>
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              {/* <button className="px-8 py-4 border border-white/20 rounded-full text-white font-semibold backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                Virtual Tour
              </button> */}
            </div>

            {/* Stats */}
            <div className="hero-cta flex gap-8 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">4.9</div>
                <div className="text-sm text-white/60 flex items-center gap-1">
                  <Star size={14} className="fill-current text-yellow-400" />
                  Rating
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">500+</div>
                <div className="text-sm text-white/60">Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400">24/7</div>
                <div className="text-sm text-white/60">Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - 3D Building Illustration */}
          <div className="building-container relative" ref={buildingRef}>
            <div className="relative w-full max-w-lg mx-auto">
              {/* Modern geometric illustration */}
              <div className="building-layer relative">
                {/* Main geometric shape */}
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-12 shadow-2xl">
                  {/* Geometric patterns */}
                  <div className="space-y-8">
                    {/* Top section - Logo area */}
                    <div className="text-center space-y-4">
                      <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#D1C0B2] via-pink-400 to-[#A08647] rounded-2xl flex items-center justify-center shadow-lg">
                        <div className="text-3xl font-bold text-white">N</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                          Nyxta Hostels
                        </div>
                        <div className="text-white/60 text-sm">
                          Premium Experience
                        </div>
                      </div>
                    </div>

                    {/* Feature highlights */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                        <span className="text-white/80">24/7 Service</span>
                        <div
                          className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"
                          style={{ animationDelay: "1s" }}
                        />
                      </div>
                    </div>

                    {/* Bottom accent */}
                    <div className="h-2 bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 rounded-full" />
                  </div>
                </div>

                {/* Floating decorative elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl backdrop-blur-sm border border-white/10 animate-bounce" />
                <div
                  className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-xl backdrop-blur-sm border border-white/10 animate-bounce"
                  style={{ animationDelay: "1s" }}
                />
                <div
                  className="absolute top-1/4 -left-4 w-6 h-6 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-lg backdrop-blur-sm border border-white/10 animate-bounce"
                  style={{ animationDelay: "2s" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/40 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};
