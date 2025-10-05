import React, { useEffect, useRef } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-tile",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".location-section",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      gsap.fromTo(
        ".quick-stats",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: ["Behind Nice Chemicals", "Edappally Cochin 24", "PIN 682024"],
      gradient: "from-purple-500 to-blue-500",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["8921-111503", "884-8574001"],
      gradient: "from-blue-500 to-teal-500",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["nyxtahostels@gmail.com"],
      gradient: "from-teal-500 to-purple-500",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Reception Hours",
      details: ["24/7 Front Desk", "Time: 6:30 AM - 11:30 PM"],
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  const quickStats = [
    { value: "5 min", label: "To Metro" },
    { value: "2 min", label: "To Restaurants" },
    { value: "24/7", label: "Reception" },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="contact-title text-5xl font-bold text-white mb-6">
            Get In
            <span className="block bg-gradient-to-r from-[#D1C0B2] to-[#A08647] bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Ready to experience homely hostel living? Contact us today!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="contact-tile bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl border border-white/20 p-6 hover:border-white/30 transition-all duration-300 h-full"
            >
              <div
                className={`w-12 h-12 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center text-white mb-4`}
              >
                {info.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {info.title}
              </h3>
              <div className="space-y-1">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-white/70 text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          {/* Left Side - WhatsApp Button */}
          <div className="flex flex-col items-center justify-center space-y-12">
            <a
              href="https://wa.me/918921111503"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-10 py-6 rounded-2xl font-semibold hover:bg-green-600 transition-all duration-300 flex items-center space-x-4 shadow-2xl hover:shadow-2xl transform hover:scale-105 w-full max-w-md h-64"
            >
              <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
                <MessageCircle className="w-10 h-10" />
                <span className="text-xl">Chat with Us on WhatsApp</span>
                <p className="text-sm text-white/70">
                  Get instant support or book your stay now!
                </p>
                <span className="text-xs text-white/60">Available 24/7</span>
              </div>
            </a>
          </div>

          {/* Right Side - Contact Info and Location */}
          <div className="space-y-8">
            {/* Contact Tiles */}

            {/* Location Section */}
            <div className="location-section bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden">
              <div className="p-6 border-b border-white/10">
                <h3 className="text-xl font-semibold text-white">
                  Our Location
                </h3>
                <p className="text-white/70 mt-2">
                  Located in the heart of downtown, walking distance to all
                  major attractions
                </p>
              </div>
              <div className="relative h-64 flex items-center justify-center">
                <div className="text-center text-white/60">
                  <MapPin className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                  <p className="text-lg font-medium">Interactive Map</p>
                  <p className="text-sm">123 Downtown Street, City Center</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-900/50 to-transparent" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-6 h-6 bg-red-500 rounded-full border-4 border-white shadow-lg animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 text-center">
          <div className="quick-stats grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {quickStats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl border border-white/20 p-6"
              >
                <div className="text-2xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
