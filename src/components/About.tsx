import React, { useEffect, useRef } from "react";
import { Award, Users, Globe, Shield } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const About: React.FC = () => {
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
    // {
    //   icon: <Award className="w-6 h-6" />,
    //   title: "Award Winning",
    //   description:
    //     "Recognized as the best hostel in the city for 3 consecutive years",
    // },
    // {
    //   icon: <Users className="w-6 h-6" />,
    //   title: "Community Focused",
    //   description:
    //     "Connect with travelers from around the world in our social spaces",
    // },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Prime Location",
      description:
        "Steps away from major attractions, restaurants, and nightlife",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safe & Secure",
      description:
        "24/7 security, lockers, and keycard access throughout the facility",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="about-card space-y-6">
              <h2 className="text-5xl font-bold leading-tight">
                Your Home
                <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Away From Home
                </span>
              </h2>
              <p className="text-xl text-white/70 leading-relaxed">
                At Nyxta, we believe a hostel is more than just a place to stay
                – it's your home away from home. Founded with the vision to
                provide clean, secure, and budget friendly accommodations for
                students, working professionals, and travelers, Nyxta Hostels
                has grown into a trusted name across Kochi.
              </p>
              <p className="text-white/60">
                our mission is to provide safe, comfortable, and affordable
                accommodation that feels like home while fostering a vibrant
                community for students and young professionals. We strive to
                combine modern amenities with a welcoming atmosphere, creating a
                space where our residents can live, learn, and grow together.
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

          {/* Right Content - Glass Card */}
          <div className="about-card relative">
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl border border-white/20 p-8 shadow-2xl">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-xl" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Excellence in Hospitality
                    </h3>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/10">
                    <span className="text-white/80">Guest Satisfaction</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
                      </div>
                      <span className="text-white font-semibold">98%</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/10">
                    <span className="text-white/80">Cleanliness Score</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full" />
                      </div>
                      <span className="text-white font-semibold">99%</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/10">
                    <span className="text-white/80">Return Guests</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="w-4/5 h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
                      </div>
                      <span className="text-white font-semibold">85%</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-white/60 text-sm italic">
                    "Creating connections and memories that last a lifetime"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
