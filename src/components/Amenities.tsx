import React, { useEffect, useRef } from 'react';
import { Wifi, Coffee, Car, Utensils, Gamepad2, Dumbbell, WashingMachine as Washing, Shield, Clock, MapPin, Users, Headphones } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const Amenities: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const amenities = [
    { 
      icon: <Wifi className="w-8 h-8" />, 
      title: 'High-Speed WiFi', 
      description: 'Complimentary ultra-fast internet throughout the property',
      gradient: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: <Coffee className="w-8 h-8" />, 
      title: 'Coffee Lounge', 
      description: 'Premium coffee bar open 24/7 with barista service',
      gradient: 'from-amber-500 to-orange-500'
    },
    { 
      icon: <Car className="w-8 h-8" />, 
      title: 'Parking', 
      description: 'Secure covered parking available for guests',
      gradient: 'from-green-500 to-emerald-500'
    },
    { 
      icon: <Utensils className="w-8 h-8" />, 
      title: 'Full Kitchen', 
      description: 'Modern communal kitchen with all appliances',
      gradient: 'from-red-500 to-pink-500'
    },
    { 
      icon: <Gamepad2 className="w-8 h-8" />, 
      title: 'Gaming Zone', 
      description: 'Console gaming area with latest games and VR',
      gradient: 'from-purple-500 to-violet-500'
    },
    { 
      icon: <Dumbbell className="w-8 h-8" />, 
      title: 'Fitness Center', 
      description: 'Fully equipped gym with modern equipment',
      gradient: 'from-orange-500 to-red-500'
    },
    { 
      icon: <Washing className="w-8 h-8" />, 
      title: 'Laundry', 
      description: 'Self-service laundry facilities with detergent',
      gradient: 'from-teal-500 to-blue-500'
    },
    { 
      icon: <Shield className="w-8 h-8" />, 
      title: '24/7 Security', 
      description: 'Round-the-clock security with CCTV monitoring',
      gradient: 'from-gray-500 to-slate-500'
    },
    { 
      icon: <Clock className="w-8 h-8" />, 
      title: 'Reception', 
      description: '24-hour front desk assistance and concierge',
      gradient: 'from-indigo-500 to-blue-500'
    },
    { 
      icon: <MapPin className="w-8 h-8" />, 
      title: 'Tour Desk', 
      description: 'Local tours and attraction booking service',
      gradient: 'from-pink-500 to-rose-500'
    },
    { 
      icon: <Users className="w-8 h-8" />, 
      title: 'Social Events', 
      description: 'Regular social activities and networking events',
      gradient: 'from-cyan-500 to-teal-500'
    },
    { 
      icon: <Headphones className="w-8 h-8" />, 
      title: 'Silent Areas', 
      description: 'Quiet zones for work and relaxation',
      gradient: 'from-violet-500 to-purple-500'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.amenities-title',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%'
          }
        }
      );

      gsap.fromTo('.amenity-card',
        { y: 80, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'bottom 30%'
          }
        }
      );

      // Hover animations
      document.querySelectorAll('.amenity-card').forEach((card) => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, { 
            scale: 1.05, 
            duration: 0.3, 
            ease: 'power2.out' 
          });
        });
        
        card.addEventListener('mouseleave', () => {
          gsap.to(card, { 
            scale: 1, 
            duration: 0.3, 
            ease: 'power2.out' 
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="amenities" ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="amenities-title text-5xl font-bold mb-6">
            Premium
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Amenities
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Enjoy world-class facilities and services designed to make your stay comfortable and memorable
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="amenity-card group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl border border-white/20 p-6 hover:border-white/30 transition-all duration-300 cursor-pointer"
            >
              {/* Background gradient effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${amenity.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
              
              {/* Icon container */}
              <div className={`relative mb-4 w-16 h-16 bg-gradient-to-br ${amenity.gradient} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                {amenity.icon}
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-white transition-colors duration-300">
                  {amenity.title}
                </h3>
                <p className="text-white/60 group-hover:text-white/80 transition-colors duration-300">
                  {amenity.description}
                </p>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-purple-400/30 to-blue-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-gradient-to-tr from-blue-400/30 to-purple-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75" />
            </div>
          ))}
        </div>

        {/* Additional Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="amenity-card bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-lg rounded-2xl border border-white/20 p-8 text-center">
            <div className="text-4xl font-bold text-white mb-2">100+</div>
            <div className="text-white/60">Premium Amenities</div>
          </div>
          <div className="amenity-card bg-gradient-to-br from-blue-600/20 to-teal-600/20 backdrop-blur-lg rounded-2xl border border-white/20 p-8 text-center">
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-white/60">Available Services</div>
          </div>
          <div className="amenity-card bg-gradient-to-br from-teal-600/20 to-purple-600/20 backdrop-blur-lg rounded-2xl border border-white/20 p-8 text-center">
            <div className="text-4xl font-bold text-white mb-2">5★</div>
            <div className="text-white/60">Facility Rating</div>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-tl from-blue-500/10 to-teal-500/10 rounded-full blur-xl" />
    </section>
  );
};