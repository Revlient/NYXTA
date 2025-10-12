import React, { useEffect, useRef } from "react";
import {
  Award,
  Globe,
  BedDouble,
  Wifi,
  Shield,
  Wallet,
  Users,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const WhyNyxta: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-card",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
          },
        }
      );

      gsap.fromTo(
        ".about-feature",
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Prime Location",
      description:
        "Stay right at the heart of Edappally — just minutes away from Lulu Mall, metro stations, Ajinorah Institutions, ISSD, and major clinics. With supermarkets, eateries, and daily essentials within walking distance, everything you need is just around the corner.",
    },
    {
      icon: <BedDouble className="w-6 h-6" />,
      title: "Comfort That Feels Like Home",
      description:
        "Spacious rooms with double-decker beds, individual lockers, attached bathrooms, and balconies offering beautiful city views make everyday living pleasant and hassle-free.",
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Essential Amenities Included",
      description:
        "Enjoy high-speed WiFi, purified water, CCTV surveillance, parking, electricity, and regular cleaning — all included in your stay. Optional facilities like cooking arrangements and mess food give you complete flexibility.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safe & Secure",
      description:
        "Your safety is our top priority. With 24x7 CCTV monitoring, controlled access, and friendly on-site staff, Nyxta ensures a secure environment for every resident.",
    },
    {
      icon: <Wallet className="w-6 h-6" />,
      title: "Affordable & Transparent Pricing",
      description:
        "Choose from 3, 4, or 5 sharing options — starting at just ₹3,000/month — with no hidden costs. Electricity, cleaning, and maintenance are all covered.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Living with Comfort",
      description:
        "Experience the warmth of a close-knit community while enjoying personal privacy. Whether you’re studying, working, or exploring Kochi, Nyxta offers the perfect blend of independence and belonging.",
    },
  ];

  return (
    <section
      id="why-nyxta"
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="about-card space-y-6">
              <h2 className="text-5xl font-bold leading-tight">
                WHY CHOOSE
                <span className="block bg-gradient-to-r from-[#D1C0B2] via-pink-400 to-[#A08647] bg-clip-text text-transparent">
                  NYXTA
                </span>
              </h2>
              <p className="text-xl text-white/70 leading-relaxed">
                Looking for a Best Hostels & Short Stay Rooms in Edappally,
                Changampuzha, and Palarivattom for a comfortable, secure, and
                affordable hostel in Kochi? <br /><br />
                NYXTA offers, well-managed rooms and bed spaces in prime
                locations Edappally, Changampuzha, and Palarivattom all near
                major metro stations. <br /><br />
                Whether you need a monthly rental room, weekly accommodation,
                daily stay bed space, or a quick fresh-up room near Lulu Mall,
                NYXTA provides complete flexibility for your lifestyle and
                budget <br /> <br />
                Our Edappally location is just minutes from Lulu Mall, Ajinorah
                Institutions, ISSD, and leading hospitals, while our
                Changampuzha and Palarivattom hostels are ideally placed near
                metro access, making travel across Kochi simple and convenient.
                <br /> <br />
                Each NYXTA property is designed for comfort and functionality,
                featuring spacious double-decker beds, attached bathrooms,
                personal lockers, high-speed WiFi, and balconies with refreshing
                city views.
                <br />  <br />
                Enjoy essential amenities included in your stay purified water,
                electricity, CCTV surveillance, regular cleaning, and parking.
                Optional facilities such as mess food and self cooking access
                add extra flexibility for your daily needs.
                <br /><br />
                Safety and comfort come first at NYXTA. With 24x7 CCTV
                monitoring, controlled entry, and friendly on-site staff, you
                can feel secure and supported throughout your stay. Our
                affordable and transparent pricing starts from just ₹3,000 per
                month with no hidden costs. Whether you’re a student, working
                professional, or traveler exploring Kochi, NYXTA offers the
                perfect balance of privacy, community, and convenience.
                <br /><br />
                Choose NYXTA your trusted choice for hostels, PG rooms, and
                short stay accommodations near Edappally, Changampuzha, and
                Palarivattom metro stations in Kochi
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="about-feature group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="text-purple-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold mb-2 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-white/60">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
