import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube,
  Wifi,
  Shield,
  Award
} from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Rooms & Pricing', href: '#rooms' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  const policies = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cancellation Policy', href: '#' },
    { name: 'House Rules', href: '#' },
    { name: 'Safety Guidelines', href: '#' }
  ];

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: '#', name: 'Instagram' },
    { icon: <Facebook className="w-5 h-5" />, href: '#', name: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', name: 'Twitter' },
    { icon: <Youtube className="w-5 h-5" />, href: '#', name: 'YouTube' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black border-t border-white/10 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand & Description */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <img 
                    src="/nyxta_hostels_pdf_page-0001-removebg-preview.png" 
                    alt="Nyxta Hostels Logo" 
                    className="h-20 w-auto"
                  />
                </div>
                <p className="text-white/70 leading-relaxed">
                  Experience premium hostel living with modern amenities, stunning design, 
                  and unparalleled hospitality at Nyxta Hostels in the heart of the city.
                </p>
              </div>

              {/* Awards & Certifications */}
              <div className="space-y-3">
                <h4 className="text-white font-semibold">Certified Excellence</h4>
                <div className="flex space-x-4">
                  <div className="flex items-center space-x-2 text-white/60">
                    <Award className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm">Best Hostel 2023</span>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="flex items-center space-x-2 text-white/60">
                    <Shield className="w-4 h-4 text-green-400" />
                    <span className="text-sm">Safety Certified</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-white font-semibold mb-3">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.name}
                      className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 hover:border-purple-400/50 transition-all duration-300 group"
                    >
                      <div className="group-hover:scale-110 transition-transform duration-300">
                        {social.icon}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-white">Quick Links</h4>
              <nav className="space-y-3">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-white/70 hover:text-white hover:translate-x-2 transition-all duration-300"
                  >
                    {link.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Policies & Legal */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-white">Policies</h4>
              <nav className="space-y-3">
                {policies.map((policy, index) => (
                  <a
                    key={index}
                    href={policy.href}
                    className="block text-white/70 hover:text-white hover:translate-x-2 transition-all duration-300"
                  >
                    {policy.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-white">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white/70 text-sm">
                      123 Downtown Street<br />
                      City Center, State 12345
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <a href="tel:+15551234567" className="text-white/70 hover:text-white transition-colors">
                    +1 (555) 123-4567
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-teal-400" />
                  <a href="mailto:info@nyxtahostels.com" className="text-white/70 hover:text-white transition-colors">
                    info@nyxtahostels.com
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <Wifi className="w-5 h-5 text-green-400" />
                  <span className="text-white/70 text-sm">Free High-Speed WiFi</span>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-4">
                <h5 className="text-white font-medium mb-2">Newsletter</h5>
                <p className="text-white/60 text-sm mb-3">Get special offers & updates</p>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 text-sm focus:outline-none focus:border-purple-400"
                  />
                  <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white text-sm font-medium hover:shadow-lg transition-all duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-white/60 text-sm">
                © {currentYear} Nyxta Hostels. All rights reserved.
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-white/60">
                <span>Made with ❤️ for travelers</span>
                <span>•</span>
                <span>Premium Hosting Experience</span>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white/60 text-sm">Online Booking Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};