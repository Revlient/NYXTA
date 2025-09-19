import React, { useEffect, useRef, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'New York, USA',
      rating: 5,
      text: 'Absolutely incredible experience! The staff was friendly, facilities were spotless, and the location couldn\'t be better. The 3D building design is stunning and the amenities exceeded my expectations.',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
      stay: '5 nights'
    },
    {
      id: 2,
      name: 'Marco Rodriguez',
      location: 'Barcelona, Spain',
      rating: 5,
      text: 'This hostel redefined my expectations of budget travel. The glassmorphism design elements and modern amenities make it feel like a luxury hotel. Perfect for digital nomads!',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
      stay: '2 weeks'
    },
    {
      id: 3,
      name: 'Emma Chen',
      location: 'Singapore',
      rating: 5,
      text: 'The social atmosphere here is amazing! Met so many fellow travelers in the beautiful common areas. The rooms are comfortable and the dark theme aesthetic is so modern and cool.',
      avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=200',
      stay: '1 week'
    },
    {
      id: 4,
      name: 'David Thompson',
      location: 'London, UK',
      rating: 5,
      text: 'Exceptional value for money! The 3D animations and smooth user experience on their website matched the actual hostel perfectly. Professional service and premium facilities.',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
      stay: '3 nights'
    },
    {
      id: 5,
      name: 'Lisa Wong',
      location: 'Toronto, Canada',
      rating: 5,
      text: 'The attention to detail is remarkable. From the gradient lighting to the glassmorphism effects in the design, everything feels premium. Will definitely stay here again!',
      avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=200',
      stay: '4 nights'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.testimonials-title',
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

      gsap.fromTo('.testimonial-card',
        { y: 80, opacity: 0, rotateY: 15 },
        {
          y: 0,
          opacity: 1,
          rotateY: 0,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Auto rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-tl from-blue-500/10 to-teal-500/10 rounded-full blur-2xl" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="testimonials-title text-5xl font-bold mb-6">
            What Our
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Guests Say
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Don't just take our word for it - hear from travelers who experienced our hospitality
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="testimonial-card bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl border border-white/20 p-8 md:p-12 shadow-2xl">
            {/* Quote icon */}
            <div className="text-purple-400 mb-6">
              <Quote className="w-12 h-12" />
            </div>

            {/* Testimonial content */}
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl text-white leading-relaxed italic">
                "{testimonials[currentTestimonial].text}"
              </p>

              {/* Rating */}
              <div className="flex items-center space-x-1">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Author info */}
              <div className="flex items-center space-x-4 pt-6 border-t border-white/10">
                <img
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
                />
                <div>
                  <div className="text-xl font-semibold text-white">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-white/60">
                    {testimonials[currentTestimonial].location}
                  </div>
                  <div className="text-purple-400 text-sm">
                    Stayed for {testimonials[currentTestimonial].stay}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Testimonial thumbnails */}
        <div className="flex justify-center space-x-4 mb-8">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => goToTestimonial(index)}
              className={`relative w-16 h-16 rounded-full overflow-hidden border-2 transition-all duration-300 ${
                index === currentTestimonial
                  ? 'border-purple-400 scale-110'
                  : 'border-white/20 hover:border-white/40'
              }`}
            >
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
              {index === currentTestimonial && (
                <div className="absolute inset-0 bg-purple-400/20" />
              )}
            </button>
          ))}
        </div>

        {/* Progress dots */}
        <div className="flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500'
                  : 'bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="testimonial-card text-center bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-lg rounded-2xl border border-white/20 p-8">
            <div className="text-4xl font-bold text-white mb-2">4.9/5</div>
            <div className="text-white/60">Average Rating</div>
            <div className="flex justify-center mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
          <div className="testimonial-card text-center bg-gradient-to-br from-blue-600/20 to-teal-600/20 backdrop-blur-lg rounded-2xl border border-white/20 p-8">
            <div className="text-4xl font-bold text-white mb-2">500+</div>
            <div className="text-white/60">Happy Guests</div>
          </div>
          <div className="testimonial-card text-center bg-gradient-to-br from-teal-600/20 to-purple-600/20 backdrop-blur-lg rounded-2xl border border-white/20 p-8">
            <div className="text-4xl font-bold text-white mb-2">98%</div>
            <div className="text-white/60">Would Recommend</div>
          </div>
        </div>
      </div>
    </section>
  );
};