import React, { useEffect, useRef, useState } from 'react';
import { Bed, Users, Wifi, MapPin, Star, X, Clock, Shield, Car, Utensils, ChevronRight } from 'lucide-react';

export const Rooms: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null);

  const rooms = [
    {
      id: 1,
      name: 'Single Sharing',
      price: 4000,
      capacity: 1,
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Private Space', 'Individual Locker', 'Attached Bathroom', 'City View'],
      rating: 4.9,
      description: 'Premium single occupancy room with complete privacy'
    },
    {
      id: 2,
      name: 'Double Sharing',
      price: 3250,
      capacity: 2,
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Shared Room', 'Individual Lockers', 'Attached Bathroom', 'Double-Decker Beds'],
      rating: 4.8,
      description: 'Comfortable shared accommodation with modern amenities'
    },
    {
      id: 3,
      name: 'Triple Sharing',
      price: 3000,
      capacity: 3,
      image: 'https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Shared Room', 'Individual Lockers', 'Attached Bathroom', 'Budget Friendly'],
      rating: 4.7,
      description: 'Affordable option with all essential amenities'
    }
  ];

  const locationPerks = [
    { name: 'Lulu Mall & Edappally Metro', distance: '1.5 km', walk: '18 mins' },
    { name: 'Lulu Group Head Office', distance: '300 m', walk: '4 mins' },
    { name: 'Let\'s Update Academy', distance: '500 m', walk: '7 mins' },
    { name: 'Future Ace Hospital', distance: '500 m', walk: '7 mins' },
    { name: 'Bus Stop & Aster Cab Pick Point', distance: '250 m', walk: '3 mins' },
    { name: 'Ajinorah Institute', distance: '1.0 km', walk: '12 mins' },
    { name: 'ISSD Edappally', distance: '1.0 km', walk: '12 mins' },
    { name: 'Aritha Hospital', distance: '1.2 km', walk: '16 mins' }
  ];

  const amenities = [
    'High-Speed WiFi', 'Double-Decker Beds', 'Individual Lockers/Cupboards',
    'Parking Facility', 'Attached Bathrooms', 'Optional Cooking Facility',
    'Refrigerator', 'Purified Drinking Water', 'Electricity Charges Included',
    'Regular Cleaning Service', 'CCTV Surveillance', 'Bed Bug Control',
    'Traditional Washing Area', 'Waste Disposal System'
  ];

  const nearbyEssentials = [
    'Bus Stop', 'Metro', 'Auto Stand', 'Hospitals', 'Medical Shops',
    'ATMs', 'Banks', 'Railway Station', 'Petrol Pump', 'EV Charging',
    'Restaurants', 'Temple', 'Church', 'Mosque'
  ];

  const openRoomDetails = (roomId: number) => {
    setSelectedRoom(roomId);
    document.body.style.overflow = 'hidden';
  };

  const closeRoomDetails = () => {
    setSelectedRoom(null);
    document.body.style.overflow = 'unset';
  };

  // Close modal when clicking outside
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeRoomDetails();
    }
  };

  // Close modal with Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedRoom !== null) {
        closeRoomDetails();
      }
    };

    if (selectedRoom !== null) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [selectedRoom]);

  return (
    <div className="min-h-screen ">
      <section id="rooms" ref={sectionRef} className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="rooms-title text-5xl font-bold mb-6">
              Choose Your
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Perfect Stay
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Nyxta Ladies Hostel - Near Lulu Mall, Edappally. Premium accommodation with modern amenities
            </p>
          </div>

          {/* Room Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {rooms.map((room) => (
              <div
                key={room.id}
                className="room-card transition-all duration-500 transform hover:scale-105"
              >
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl border border-white/20 overflow-hidden shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 h-full">
                  {/* Room Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={room.image} 
                      alt={room.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white text-sm font-semibold">{room.rating}</span>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center space-x-2 mb-2">
                        <Users className="w-4 h-4" />
                        <span className="text-sm">{room.capacity} person{room.capacity > 1 ? 's' : ''}</span>
                      </div>
                    </div>
                  </div>

                  {/* Room Content */}
                  <div className="p-6 space-y-4 flex flex-col flex-grow">
                    <div className="flex justify-between items-start">
                      <div className="flex-grow">
                        <h3 className="text-2xl font-bold text-white mb-2">{room.name}</h3>
                        <p className="text-white/60 text-sm">{room.description}</p>
                      </div>
                      <div className="text-right ml-4">
                        <div className="text-3xl font-bold text-white">₹{room.price.toLocaleString()}</div>
                        <div className="text-white/60 text-sm">per month</div>
                      </div>
                    </div>

                    {/* Quick Features */}
                    <div className="grid grid-cols-2 gap-2">
                      {room.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-white/70 text-sm">
                          <div className="w-2 h-2 bg-purple-400 rounded-full" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="space-y-3 mt-auto">
                      <button 
                        onClick={() => openRoomDetails(room.id)}
                        className="w-full py-3 rounded-xl font-semibold transition-all duration-300 bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:border-purple-400/50 flex items-center justify-center space-x-2"
                      >
                        <span>View Details</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                      <button 
                        className="w-full py-3 rounded-xl font-semibold transition-all duration-300 bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105"
                      >
                        Book Room
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="text-center mt-12 p-6 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-lg rounded-2xl border border-white/20 max-w-4xl mx-auto">
            <p className="text-white/80 mb-2">
              <span className="font-semibold">Registration Fee:</span> ₹500 (One-time, Non-refundable)
            </p>
            <p className="text-white/80 mb-2">
              <span className="font-semibold">Optional Cooking Facility:</span> ₹300/month
            </p>
            <p className="text-white/60 text-sm">
              <Clock className="w-4 h-4 inline mr-1" />
              Curfew: 11:30 PM | Payments are non-refundable for early checkout
            </p>
          </div>
        </div>

        {/* Room Details Modal */}
        {selectedRoom !== null && (
          <div 
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={handleBackdropClick}
          >
            <div className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Close button - Fixed positioning
              <button
                onClick={closeRoomDetails}
                className="fixed top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 z-[60] shadow-lg"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button> */}

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl border border-white/20 overflow-hidden shadow-2xl">
                {/* Header */}
                <div className="p-8 border-b border-white/10 relative">
                  Additional close button in header
                  <button
                    onClick={closeRoomDetails}
                    className="absolute top-4 right-4 w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
                    aria-label="Close"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  
                  <div className="flex items-center justify-between mb-4 pr-12">
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-2">
                        Nyxta Hostel - Near Lulu Mall
                      </h2>
                      <p className="text-white/70">Branch No: 31 (Edappally)</p>
                    </div>
                    <div className="text-right">
                      <div className="text-4xl font-bold text-white">
                        ₹{rooms.find(r => r.id === selectedRoom)?.price.toLocaleString()}
                      </div>
                      <div className="text-white/60">per month</div>
                    </div>
                  </div>
                </div>

                <div className="p-8 space-y-8">
                  {/* Location Perks */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                      <MapPin className="w-6 h-6 mr-2 text-purple-400" />
                      Prime Location Perks
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {locationPerks.map((perk, index) => (
                        <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/10">
                          <div className="font-semibold text-white">{perk.name}</div>
                          <div className="text-white/60 text-sm">
                            {perk.distance} • {perk.walk} walk
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Included Amenities */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                      <Wifi className="w-6 h-6 mr-2 text-blue-400" />
                      Included Amenities
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center space-x-2 text-white/80">
                          <div className="w-2 h-2 bg-green-400 rounded-full" />
                          <span className="text-sm">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Nearby Essentials */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Nearby Essentials
                    </h3>
                    <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-3">
                      {nearbyEssentials.map((essential, index) => (
                        <div key={index} className="bg-white/5 rounded-lg p-3 text-center border border-white/10">
                          <span className="text-white/80 text-sm">{essential}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Cooking Facility */}
                  <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-xl p-6 border border-white/20">
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                      <Utensils className="w-5 h-5 mr-2 text-orange-400" />
                      Optional Cooking Facility - ₹300/month
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="flex items-center space-x-2 text-white/80">
                        <div className="w-2 h-2 bg-orange-400 rounded-full" />
                        <span>Gas & Stove</span>
                      </div>
                      <div className="flex items-center space-x-2 text-white/80">
                        <div className="w-2 h-2 bg-orange-400 rounded-full" />
                        <span>Fridge Access</span>
                      </div>
                      <div className="flex items-center space-x-2 text-white/80">
                        <div className="w-2 h-2 bg-orange-400 rounded-full" />
                        <span>Basic Cooking Vessels</span>
                      </div>
                    </div>
                    <p className="text-white/60 text-sm mt-3">
                      Mess food is also available upon request for interested residents.
                    </p>
                  </div>

                  {/* House Rules */}
                  <div className="bg-gradient-to-r from-red-600/20 to-pink-600/20 rounded-xl p-6 border border-white/20">
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                      <Shield className="w-5 h-5 mr-2 text-red-400" />
                      House Rules
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-white/80">
                        <Clock className="w-4 h-4 text-red-400" />
                        <span>Curfew: 11:30 PM</span>
                      </div>
                      <div className="flex items-center space-x-2 text-white/80">
                        <div className="w-4 h-4 text-red-400">💰</div>
                        <span>Rent + Registration Fee required at check-in</span>
                      </div>
                      <div className="flex items-center space-x-2 text-white/80">
                        <div className="w-4 h-4 text-red-400">🚫</div>
                        <span>Payments are non-refundable in case of early checkout</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <button className="flex-1 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
                      Book This Room
                    </button>
                    <button className="flex-1 py-4 bg-white/10 border border-white/20 rounded-xl text-white font-semibold hover:bg-white/20 transition-all duration-300">
                      Contact for More Info
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};