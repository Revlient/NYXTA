import React, { useEffect, useRef, useState } from "react";
import {
  Bed,
  Users,
  Wifi,
  MapPin,
  Star,
  Clock,
  Shield,
  Car,
  Utensils,
  ChevronRight,
  Building,
  ArrowLeft,
  Phone,
  Mail,
  Calendar,
  CheckCircle,
  Home,
} from "lucide-react";

export const Hostels: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedBranch, setSelectedBranch] = useState<number>(0);
  const [selectedRoom, setSelectedRoom] = useState<{
    branchId: number;
    roomId: number;
  } | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  const branches = [
    {
      id: 0,
      name: "NYXTA LADIES HOSTEL - NEAR LULU MALL",
      place:"Edapally",
      branchNumber: "31",
      location: "https://g.co/kgs/ZESuc9z",
      phone: "+918848807930",
      address:
        "📍 Address: Behind Nice Chemicals, Edappally, Kochi, Ernakulam, Kerala – 682024.",
      image: "/hostels/frontbranch31.jpg",
      heroImage: "/locations/edapally.jpg",
      description:
        "Experience premium hostel living in the heart of Kochi, just minutes away from Lulu Mall and major attractions.",
      rooms: [
        {
          id: 1,
          name: "Single Sharing",
          price: 4000,
          capacity: 1,
          image: "/gallery/branch31/room1.jpg",
          images: [
            "/gallery/branch31/room1.jpg",
            "/gallery/branch31/room2.jpg",
            "/gallery/branch31/room3.jpg",
          ],
          features: [
            "Private Space",
            "Individual Locker",
            "Attached Bathroom",
            "City View",
          ],
          rating: 4.9,
          description:
            "Premium single occupancy room with complete privacy and modern amenities. Perfect for professionals and students who value personal space.",
        },
        {
          id: 2,
          name: "4 Sharing",
          price: 3250,
          capacity: 4,
          image: "/gallery/branch31/room2.jpg",
          images: [
            "/gallery/branch31/room2.jpg",
            "/gallery/branch31/room1.jpg",
            "/gallery/branch31/room3.jpg",
          ],
          features: [
            "Shared Room",
            "Individual Lockers",
            "Attached Bathroom",
            "Double-Decker Beds",
          ],
          rating: 4.8,
          description:
            "Comfortable shared accommodation with modern amenities, perfect for building friendships while maintaining privacy.",
        },
        {
          id: 3,
          name: "6 Sharing",
          price: 3000,
          capacity: 6,
          image: "/gallery/branch31/room3.jpg",
          images: [
            "/gallery/branch31/room3.jpg",
            "/gallery/branch31/room1.jpg",
            "/gallery/branch31/room2.jpg",
          ],
          features: [
            "Shared Room",
            "Individual Lockers",
            "Attached Bathroom",
            "Budget Friendly",
          ],
          rating: 4.7,
          description:
            "Most affordable option with all essential amenities, ideal for budget-conscious students and travelers.",
        },
      ],
      locationPerks: [
        {
          name: "Lulu Mall & Edappally Metro Station",
          distance: "1.5 km",
          walk: "18 mins",
        },
        {
          name: "Lulu Group India Head Office",
          distance: "300 m",
          walk: "4 mins",
        },
        { name: "Let's Update Academy", distance: "500 m", walk: "7 mins" },
        { name: "Future Ace Hospital", distance: "500 m", walk: "7 mins" },
        {
          name: "Bus Stop & Aster Cab Pick Point",
          distance: "250 m",
          walk: "3 mins",
        },
        {
          name: "Ajinorah Institute Edappally",
          distance: "1.0 km",
          walk: "12 mins",
        },
        { name: "ISSD Edappally", distance: "1.0 km", walk: "12 mins" },
        {
          name: "Aritha Hospital Edappally",
          distance: "1.2 km",
          walk: "16 mins",
        },
      ],
      amenities: [
        "High-Speed WiFi",
        "Double-Decker Beds",
        "Individual Lockers/Cupboards",
        "Parking Facility",
        "Attached Bathrooms",
        "Optional Cooking Facility",
        "Refrigerator",
        "Purified Drinking Water",
        "Electricity Charges Included",
        "Regular Cleaning Service",
        "CCTV Surveillance",
        "Bed Bug Control",
        "Traditional Washing Area",
        "Waste Disposal System",
      ],
      nearbyEssentials: [
        "Bus Stop",
        "Metro",
        "Auto Stand",
        "Hospitals",
        "Medical Shops",
        "ATMs",
        "Banks",
        "Railway Station",
        "Petrol Pump",
        "EV Charging",
        "Restaurants",
        "Temple",
        "Church",
        "Mosque",
      ],
      cookingFee: 300,
    },
    {
      id: 1,
      name: "NYXTA LADIES HOSTEL - NEAR LULU MALL",
      place:"Edapally",
      branchNumber: "32",
      location: "https://maps.app.goo.gl/RSVNvLjDigj9DK398",
      phone: "+919446922048",
      address:
        "📍 Address: Chandrathil Road Opposite Edappally Post Office Kochi, Ernakulam, Kerala 682024",
      image: "/hostels/frontbranch32.jpg",
      heroImage: "/locations/edapally.jpg",
      description:
        "Modern hostel accommodation with excellent connectivity to educational institutions and shopping centers.",
      rooms: [
        {
          id: 1,
          name: "Single Coat",
          price: 3250,
          capacity: 1,
          image: "/gallery/branch32/room2.jpg",
          images: [
            "/gallery/branch32/room2.jpg",
            "/gallery/branch32/room3.jpg",
            "/gallery/branch32/front.jpg",
          ],
          features: [
            "Private Space",
            "Individual Locker",
            "Attached Bathroom",
            "City View",
          ],
          rating: 4.9,
          description:
            "Affordable single occupancy room with privacy and all essential amenities for comfortable living.",
        },
        {
          id: 2,
          name: "3 Sharing",
          price: 3500,
          capacity: 3,
          image: "/gallery/branch32/room3.jpg",
          images: [
            "/gallery/branch32/room3.jpg",
            "/gallery/branch32/room2.jpg",
            "/gallery/branch32/kitchen.jpg",
          ],
          features: [
            "Shared Room",
            "Individual Lockers",
            "Attached Bathroom",
            "Double-Decker Beds",
          ],
          rating: 4.8,
          description:
            "Comfortable 3-person accommodation with modern amenities and great community atmosphere.",
        },
        {
          id: 3,
          name: "4 Sharing",
          price: 3250,
          capacity: 4,
          image: "/gallery/branch32/kitchen.jpg",
          images: [
            "/gallery/branch32/kitchen.jpg",
            "/gallery/branch32/room2.jpg",
            "/gallery/branch32/room3.jpg",
          ],
          features: [
            "Shared Room",
            "Individual Lockers",
            "Attached Bathroom",
            "Double-Decker Beds",
          ],
          rating: 4.8,
          description:
            "Popular 4-person shared accommodation with excellent facilities and prime location.",
        },
        {
          id: 4,
          name: "5 Sharing",
          price: 3000,
          capacity: 5,
          image: "/gallery/branch32/bathroom.jpg",
          images: [
            "/gallery/branch32/bathroom.jpg",
            "/gallery/branch32/kitchen.jpg",
            "/gallery/branch32/room2.jpg",
          ],
          features: [
            "Shared Room",
            "Individual Lockers",
            "Attached Bathroom",
            "Budget Friendly",
          ],
          rating: 4.7,
          description:
            "Most affordable option with all essential amenities and great connectivity.",
        },
      ],
      locationPerks: [
        {
          name: "Ajinorah Institutions Edappally",
          distance: "500 m",
          walk: "6 mins",
        },
        {
          name: "Lulu Mall & Edappally Metro Station",
          distance: "1.0 km",
          walk: "10 mins",
        },
        {
          name: "Changampuzha Park Metro Station",
          distance: "800 m",
          walk: "10 mins",
        },
        {
          name: "Keyhole Clinic Edappally",
          distance: "600 m",
          walk: "10 mins",
        },
        {
          name: "Skin Secrets Clinic Edappally",
          distance: "800 m",
          walk: "15 mins",
        },
        { name: "ISSD Edappally", distance: "800 m", walk: "10 mins" },
        { name: "Oberon Mall Edappally", distance: "1.5 km", walk: "15 mins" },
      ],
      amenities: [
        "High-Speed WiFi",
        "Double-Decker Beds",
        "Individual Lockers/Cupboards",
        "Parking Facility",
        "Attached Bathrooms",
        "Optional Cooking Facility",
        "Refrigerator",
        "Purified Drinking Water",
        "Electricity Charges Included",
        "Regular Cleaning Service",
        "CCTV Surveillance",
        "Bed Bug Control",
        "Traditional Washing Area",
        "Waste Disposal System",
      ],
      nearbyEssentials: [
        "Bus Stop",
        "Metro",
        "Auto Stand",
        "Hospitals",
        "Medical Shops",
        "ATMs",
        "Banks",
        "Railway Station",
        "Petrol Pump",
        "EV Charging",
        "Restaurants",
        "Temple",
        "Church",
        "Mosque",
      ],
      cookingFee: 300,
    },
    {
      id: 2,
      name: "NYXTA LADIES HOSTEL - PALARIVATTOM",
      place:"Palarivattom",
      branchNumber: "33",
      location: "https://maps.app.goo.gl/c41oJXBqXUotLLFL9",
      phone: "+919446441533",
      address:
        "📍 Address: Behind EMC Hospital, Alinchuvadu, Vennala,Kochi, Ernakulam, Kerala – 682028",
      image: "/hostels/frontbranch33.jpg",
      heroImage: "/locations/Palarivattom.avif",
      description:
        "Premium location hostel with excellent connectivity to hospitals, educational institutions, and shopping centers.",
      rooms: [
        {
          id: 1,
          name: "2 Sharing",
          price: 3500,
          capacity: 2,
          image: "/gallery/branch33/room.jpg",
          images: [
            "/gallery/branch33/room.jpg",
            "/gallery/branch33/room1.jpg",
            "/gallery/branch33/room2.jpg",
          ],
          features: [
            "Shared Room",
            "Individual Lockers",
            "Attached Bathroom",
            "Premium Location",
          ],
          rating: 4.8,
          description:
            "Comfortable 2-person sharing in prime location with excellent connectivity and modern amenities.",
        },
        {
          id: 2,
          name: "8 Sharing",
          price: 3000,
          capacity: 8,
          image: "/gallery/branch33/room1.jpg",
          images: [
            "/gallery/branch33/room1.jpg",
            "/gallery/branch33/room2.jpg",
            "/gallery/branch33/room3.jpg",
          ],
          features: [
            "Shared Room",
            "Individual Lockers",
            "Attached Bathroom",
            "Budget Option",
          ],
          rating: 4.6,
          description:
            "Most economical option with great connectivity and all essential amenities for comfortable living.",
        },
      ],
      locationPerks: [
        {
          name: "Triple i Commerce Academy",
          distance: "200 m",
          walk: "3 mins",
        },
        { name: "Ernakulam Medical Centre", distance: "500 m", walk: "8 mins" },
        { name: "Jayalakshmi Silks", distance: "600 m", walk: "9 mins" },
        {
          name: "Lisie College of Pharmacy",
          distance: "700 m",
          walk: "10 mins",
        },
        {
          name: "MAX Fashion Palarivattom",
          distance: "700 m",
          walk: "10 mins",
        },
        {
          name: "Xylem Learning Palarivattom Center",
          distance: "700 m",
          walk: "10 mins",
        },
        { name: "Q1 Mall by Nippon", distance: "800 m", walk: "10 mins" },
        {
          name: "GIIMS Institute of Logistics",
          distance: "950 m",
          walk: "12 mins",
        },
        {
          name: "Palarivattom Junction (Police Station)",
          distance: "1.2 km",
          walk: "12 mins",
        },
        { name: "Oberon Mall Edappally", distance: "1.2 km", walk: "15 mins" },
        {
          name: "Prestige Mall Edappally",
          distance: "1.2 km",
          walk: "15 mins",
        },
      ],
      amenities: [
        "High-Speed WiFi",
        "Double-Decker Beds",
        "Individual Lockers/Cupboards",
        "Parking Facility",
        "Attached Bathrooms",
        "Optional Cooking Facility",
        "Refrigerator",
        "Purified Drinking Water",
        "Electricity Charges Included",
        "Regular Cleaning Service",
        "CCTV Surveillance",
        "Bed Bug Control",
        "Traditional Washing Area",
        "Waste Disposal System",
      ],
      nearbyEssentials: [
        "Bus Stop",
        "Metro",
        "Auto Stand",
        "Hospitals",
        "Medical Shops",
        "ATMs",
        "Banks",
        "Railway Station",
        "Petrol Pump",
        "EV Charging",
        "Restaurants",
        "Temple",
        "Church",
        "Mosque",
      ],
      cookingFee: 350,
    },
    {
      id: 3,
      name: "NYXTA MEN'S HOSTEL",
      place:"Edapally",
      branchNumber: "05",
      location: "https://goo.gl/maps/7Rrqp3gHS59jkJMX6",
      phone: "",
      address: "",
      image: "/hostels/frontbranch05.jpg",
      heroImage: "/locations/edapally.jpg", 
      description:
        "Comfortable and affordable accommodation for men with modern amenities and excellent connectivity.",
      rooms: [
        {
          id: 1,
          name: "Single Cot",
          price: 3000,
          capacity: 1,
          image: "/gallery/branch05/room.jpg",
          images: [
            "/gallery/branch05/room.jpg",
            "/gallery/branch05/room2.jpg",
            "/gallery/branch05/room3.jpg",
          ],
          features: [
            "Private Cot",
            "Shared Room",
            "Attached Bathroom",
            "Budget Friendly",
          ],
          rating: 4.7,
          description:
            "Affordable single cot accommodation for men with all essential amenities and great location.",
        },
        {
          id: 2,
          name: "Shared Cot",
          price: 3000,
          capacity: 2,
          image: "/gallery/branch05/room2.jpg",
          images: [
            "/gallery/branch05/room2.jpg",
            "/gallery/branch05/room3.jpg",
            "/gallery/branch05/stair.jpg",
          ],
          features: [
            "Shared Cot",
            "Shared Room",
            "Attached Bathroom",
            "Budget Option",
          ],
          rating: 4.6,
          description:
            "Most economical shared cot option for men with comfortable living arrangements.",
        },
      ],
      locationPerks: [
        {
          name: "Lulu Mall & Edappally Metro Station",
          distance: "1.5 km",
          walk: "18 mins",
        },
        { name: "Kochi Marriott Hotel", distance: "1.6 km", walk: "20 mins" },
        { name: "Futureace Hospital", distance: "1.2 km", walk: "15 mins" },
        { name: "MAJ Hospital Edappally", distance: "1.2 km", walk: "15 mins" },
        { name: "Changampuzha Park", distance: "1.3 km", walk: "16 mins" },
        { name: "I Hub Edappally", distance: "1.3 km", walk: "16 mins" },
        {
          name: "Ajinorah Institute Edappally",
          distance: "1.4 km",
          walk: "17 mins",
        },
        {
          name: "Edappally Toll Junction",
          distance: "1.5 km",
          walk: "18 mins",
        },
        { name: "Grand Mall", distance: "1.8 km", walk: "22 mins" },
        { name: "Oberon Mall", distance: "2.5 km", walk: "30 mins" },
        {
          name: "Palarivattom Junction",
          distance: "3.5 km",
          walk: "10 mins drive",
        },
      ],
      amenities: [
        "High-Speed WiFi",
        "Double & Single Decker Beds",
        "Parking Facility",
        "Attached Bathrooms",
        "Purified Drinking Water",
        "Electricity Charges Included",
        "Regular Cleaning Services",
        "CCTV Surveillance",
        "Bed Bug Treatment",
        "Traditional Washing Area",
      ],
      nearbyEssentials: [
        "Bus Stop",
        "Metro",
        "Auto Stand",
        "Hospitals",
        "Medical Shops",
        "ATMs",
        "Banks",
        "Railway Station",
        "Petrol Pump",
        "EV Charging Station",
        "Restaurants",
        "Mosque",
        "Church",
        "Temple",
      ],
      cookingFee: 0,
    },
  ];

  const openRoomDetails = (branchId: number, roomId: number) => {
    setSelectedRoom({ branchId, roomId });
    setShowDetails(true);
  };

  const closeRoomDetails = () => {
    setSelectedRoom(null);
    setShowDetails(false);
  };

  const currentBranch = branches[selectedBranch];
  const selectedRoomData = selectedRoom
    ? branches[selectedRoom.branchId].rooms.find(
        (r) => r.id === selectedRoom.roomId
      )
    : null;
  const selectedBranchData = selectedRoom
    ? branches[selectedRoom.branchId]
    : null;

  if (showDetails && selectedRoomData && selectedBranchData) {
    return (
      <div className="min-h-screen">
        {/* Hero Section with Branch Image */}
        <div className="relative h-96 overflow-hidden">
          <img
            src={selectedBranchData.heroImage}
            alt={selectedBranchData.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          {/* Back Button */}
          <button
            onClick={closeRoomDetails}
            className="absolute top-6 left-6 flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white hover:bg-white/20 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Hostels</span>
          </button>

          {/* Branch Info Overlay */}
          <div className="absolute bottom-8 left-8 right-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {/* Welcome to Branch {selectedBranchData.branchNumber} */}
                {selectedBranchData.place}
              </h1>
              <p className="text-xl text-white/90 mb-4">
                {selectedBranchData.description}
              </p>
              <div className="flex items-center space-x-4 text-white/80">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span>Prime Location in Kochi</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span>4.8+ Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Room Details Section */}
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Room Header */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">
                    {selectedRoomData.name}
                  </h2>
                  <p className="text-white/70 text-lg">
                    {selectedRoomData.description}
                  </p>
                </div>
                <div className="mt-4 md:mt-0 text-right">
                  <div className="text-4xl font-bold text-[#A08647]">
                    ₹{selectedRoomData.price.toLocaleString()}
                  </div>
                  <div className="text-white/60">per month</div>
                </div>
              </div>

              {/* Room Features */}
              <div className="flex flex-wrap gap-3 mb-6">
                {selectedRoomData.features.map((feature, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[#A08647]/20 border border-[#A08647]/30 rounded-full text-[#D1C0B2] text-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Contact Info */}
              <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-[#A08647]" />
                    <div>
                      <div className="text-white font-medium">Contact</div>
                      <div className="text-white/70">
                        {selectedBranchData.phone}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-[#A08647]" />
                    <div>
                      <div className="text-white font-medium">Location</div>
                      <a
                        href={selectedBranchData.location}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D1C0B2] hover:underline"
                      >
                        View on Map
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Room Images Gallery */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">
                Room Gallery
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {selectedRoomData.images.map((image, index) => (
                  <div
                    key={index}
                    className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20"
                  >
                    <img
                      src={image}
                      alt={`${selectedRoomData.name} - Image ${index + 1}`}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Information */}
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Location Perks */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <MapPin className="w-6 h-6 mr-2 text-[#A08647]" />
                  Prime Location Perks
                </h3>
                <div className="space-y-4">
                  {selectedBranchData.locationPerks.map((perk, index) => (
                    <div
                      key={index}
                      className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors duration-300"
                    >
                      <div className="font-semibold text-white">
                        {perk.name}
                      </div>
                      <div className="text-white/60 text-sm">
                        {perk.distance} • {perk.walk}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Wifi className="w-6 h-6 mr-2 text-[#A08647]" />
                  Included Amenities
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {selectedBranchData.amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 text-white/80 p-3 bg-white/5 rounded-lg border border-white/10"
                    >
                      <CheckCircle className="w-5 h-5 text-[#A08647] flex-shrink-0" />
                      <span className="text-sm">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Booking Section */}
            <div className="mt-16 bg-gradient-to-r from-[#A08647]/20 to-[#D1C0B2]/20 rounded-3xl border border-white/20 p-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Ready to Book Your Stay?
                </h3>
                <p className="text-white/70 text-lg">
                  Secure your spot in this premium accommodation today
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                  <Calendar className="w-8 h-8 text-[#A08647] mx-auto mb-2" />
                  <div className="text-white font-semibold">
                    Flexible Check-in
                  </div>
                  <div className="text-white/60 text-sm">Available 24/7</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                  <Shield className="w-8 h-8 text-[#A08647] mx-auto mb-2" />
                  <div className="text-white font-semibold">Secure & Safe</div>
                  <div className="text-white/60 text-sm">CCTV Monitored</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                  <Home className="w-8 h-8 text-[#A08647] mx-auto mb-2" />
                  <div className="text-white font-semibold">
                    Home-like Comfort
                  </div>
                  <div className="text-white/60 text-sm">All Amenities</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    const phone = "918848574001";
                    const message = `Hello, I'd like to book ${selectedRoomData.name} at Branch ${selectedBranchData.branchNumber}.`;
                    const encoded = encodeURIComponent(message);
                    const url = `https://wa.me/${phone}?text=${encoded}`;
                    window.open(url, "_blank", "noopener,noreferrer");
                  }}
                  className="px-8 py-4 bg-gradient-to-r from-[#A08647] to-[#D1C0B2] rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-[#A08647]/25 transition-all duration-300 transform hover:scale-105"
                >
                  Book Now via WhatsApp
                </button>
                <button
                  onClick={() => {
                    const phone = selectedBranchData.phone;
                    window.open(`tel:${phone}`, "_self");
                  }}
                  className="px-8 py-4 bg-white/10 border border-white/20 rounded-xl text-white font-semibold hover:bg-white/20 transition-all duration-300"
                >
                  Call Now
                </button>
              </div>

              <div className="text-center mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
                <p className="text-white/80 mb-2">
                  <span className="font-semibold">Registration Fee:</span> ₹500
                  (One-time, Non-refundable)
                </p>
                <p className="text-white/80">
                  <span className="font-semibold">
                    Optional Cooking Facility:
                  </span>{" "}
                  ₹{selectedBranchData.cookingFee}/month
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen ">
      <section
        id="hostels"
        ref={sectionRef}
        className="py-20 relative overflow-hidden"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-white">
              Choose Your
              <span className="block bg-gradient-to-r from-[#D1C0B2] to-[#A08647] bg-clip-text text-transparent">
                Perfect Branch & Stay
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Nyxta Hostels across prime locations in Kochi. Premium
              accommodation with modern amenities
            </p>
          </div>

          {/* Branch Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {branches.map((branch, index) => (
              <button
                key={branch.id}
                onClick={() => setSelectedBranch(index)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  selectedBranch === index
                    ? "bg-gradient-to-r from-[#A08647] to-[#D1C0B2] text-white shadow-lg"
                    : "bg-white/10 border border-white/20 text-white hover:bg-white/20"
                }`}
              >
                <Building className="w-4 h-4" />
                <span>Branch {branch.branchNumber}</span>
              </button>
            ))}
          </div>

          {/* Room Cards Grid */}
          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-6xl mx-auto">
            {currentBranch.rooms.map((room) => (
              <div
                key={room.id}
                className="room-card transition-all duration-500 transform hover:scale-105"
              >
                <div className="bg-gradient-to-br flex flex-row from-white/10 to-white/5 backdrop-blur-lg rounded-3xl border border-white/20 overflow-hidden shadow-2xl hover:shadow-[#A08647]/10 transition-all duration-300 h-full">
                  {/* Room Image */}
                  <div className="relative h-full overflow-hidden">
                    <div>
                      <img
                        src={room.image}
                        alt={room.name}
                        className="w-full h-80 object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white text-sm font-semibold">
                          {room.rating}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="flex items-center space-x-2 mb-2">
                          <Users className="w-4 h-4" />
                          <span className="text-sm">
                            {room.capacity} person{room.capacity > 1 ? "s" : ""}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Room Content */}
                  <div className="p-6 space-y-4 flex flex-col flex-grow">
                    <div className="flex justify-between items-start">
                      <div className="flex-grow">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {room.name}
                        </h3>
                        <p className="text-white/60 text-sm">
                          {room.description}
                        </p>
                      </div>
                      <div className="text-right ml-4">
                        <div className="text-3xl font-bold text-white">
                          ₹{room.price.toLocaleString()}
                        </div>
                        <div className="text-white/60 text-sm">per month</div>
                      </div>
                    </div>

                    {/* Contact and location */}
                    <div className="address">
                      <p className="text-white/80 mb-2">
                        <span className="font-semibold">Contact: </span>{" "}
                        {currentBranch.phone}
                      </p>
                      <p className="text-white/80">
                        <span className="font-semibold">Address: </span>{" "}
                        {currentBranch.address}
                      </p>
                      <a
                        href={currentBranch.location}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[#D1C0B2] hover:underline mt-1"
                      >
                        <MapPin className="w-4 h-4 mr-1" />
                        View on Map
                      </a>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-row gap-3 mt-auto w-full">
                      <button
                        onClick={() => openRoomDetails(selectedBranch, room.id)}
                        className="flex-1 py-3 rounded-xl font-semibold transition-all duration-300 bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:border-purple-400/50 flex items-center justify-center space-x-2"
                      >
                        <span>View Details</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => {
                          const phone = "918848574001";
                          const message = "Hello, I’d like to book a room.";
                          const encoded = encodeURIComponent(message);
                          const url = `https://wa.me/${phone}?text=${encoded}`;
                          window.open(url, "_blank", "noopener,noreferrer");
                        }}
                        className="flex-1 py-3 rounded-xl font-semibold transition-all duration-300 bg-gradient-to-r from-[#917432] to-[#A08647] text-white hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105"
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
          <div className="text-center mt-12 p-6 bg-gradient-to-r from-[#A08647]/20 to-[#D1C0B2]/20 backdrop-blur-lg rounded-2xl border border-white/20 max-w-4xl mx-auto">
            <p className="text-white/80 mb-2">
              <span className="font-semibold">Registration Fee:</span> ₹500
              (One-time, Non-refundable)
            </p>
            <p className="text-white/80 mb-2">
              <span className="font-semibold">Optional Cooking Facility:</span>{" "}
              ₹{currentBranch.cookingFee}/month
            </p>
            <p className="text-white/60 text-sm">
              <Clock className="w-4 h-4 inline mr-1" />
              Curfew: 11:30 PM | Payments are non-refundable for early checkout
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
