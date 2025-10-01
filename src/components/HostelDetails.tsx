import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Star,
  Phone,
  Calendar,
  Shield,
  Home,
  CheckCircle,
  Wifi,
  X,
} from "lucide-react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

export const HostelDetails: React.FC = () => {
  const { branchId } = useParams();
  const navigate = useNavigate();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const branches = [
    {
      id: 0,
      name: "NYXTA LADIES HOSTEL - NEAR LULU MALL",
      place: "Edapally",
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
          price: 4500,
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
      roomsPrice: {
        "single sharing": 4500,
        "2 sharing": 3250,
        "3 sharing": 3000,
        "4 sharing": 2800,
        "6 sharing": 2500,
      },
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
    // Additional branches omitted for brevity
  ];

  const selectedBranchData = branches.find((b) => b.id === parseInt(branchId || "0"));

  if (!selectedBranchData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">
            Branch not found
          </h1>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-gradient-to-r from-[#A08647] to-[#D1C0B2] rounded-xl text-white font-semibold hover:shadow-lg transition-all duration-300"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  // Sort roomsPrice in descending order of capacity
  const sortedRoomsPrice = Object.entries(selectedBranchData.roomsPrice)
    .sort(([, priceA], [, priceB]) => priceB - priceA);

  const openLightbox = (image: string) => {
    setSelectedImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section with Branch Image */}
      <div className="container mx-auto mt-40 px-6 py-8">
        <div className="relative h-80 w-[80%] mx-auto rounded-3xl overflow-hidden shadow-2xl">
          <img
            src={selectedBranchData.heroImage}
            alt={selectedBranchData.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

          {/* Back Button */}
          <button
            onClick={() => navigate("/")}
            className="absolute top-4 left-4 flex items-center space-x-2 bg-[#A08647]/90 backdrop-blur-sm border border-[#A08647]/20 rounded-full px-4 py-2 text-white hover:bg-[#A08647] transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </button>

          {/* Branch Info Overlay */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Welcome to {selectedBranchData.place}
              </h1>
              <p className="text-lg text-white/90 mb-3">
                {selectedBranchData.description}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-white/80">
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
      </div>

      {/* Rates Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-5">
            Room Rates
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {sortedRoomsPrice.map(([sharingType, price], index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-white/5 to-white/10 rounded-2xl border border-white/10 p-5"
              >
                <div className="text-white font-semibold capitalize">
                  {sharingType}
                </div>
                <div className="text-[#A08647] text-xl font-bold">
                  ₹{price.toLocaleString()}/month
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Branch Details Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Branch Header */}
          <div className="mb-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-5">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Branch {selectedBranchData.branchNumber}
                </h2>
                <p className="text-white/70 text-base md:text-lg">
                  {selectedBranchData.description}
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-r from-white/5 to-white/10 rounded-2xl border border-white/10 p-5">
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

          {/* Branch Images Gallery */}
          <div className="mb-10">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-5">Branch Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {selectedBranchData.rooms.reduce<string[]>((acc, room) => {
                return [...acc, ...room.images];
              }, []).map((image, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 cursor-pointer"
                  onClick={() => openLightbox(image)}
                >
                  <img
                    src={image}
                    alt={`Branch ${selectedBranchData.branchNumber} - Image ${index + 1}`}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>

          {/* Lightbox Modal */}
          {lightboxOpen && selectedImage && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={closeLightbox}>
              <div className="relative max-w-4xl w-full mx-4">
                <img
                  src={selectedImage}
                  alt="Lightbox Image"
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
                <button
                  className="absolute top-4 right-4 bg-[#A08647]/90 backdrop-blur-sm border border-[#A08647]/20 rounded-full p-2 text-white hover:bg-[#A08647] transition-all duration-300"
                  onClick={closeLightbox}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
          )}

          {/* Detailed Information */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Location Perks */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-5 flex items-center">
                <MapPin className="w-6 h-6 mr-2 text-[#A08647]" />
                Prime Location Perks
              </h3>
              <div className="space-y-3">
                {selectedBranchData.locationPerks.map((perk, index) => (
                  <div
                    key={index}
                    className="bg-white/5 rounded-lg p-3 border border-white/10 hover:bg-white/10 transition-colors duration-300"
                  >
                    <div className="font-semibold text-white">{perk.name}</div>
                    <div className="text-white/60 text-sm">
                      {perk.distance} • {perk.walk}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-5 flex items-center">
                <Wifi className="w-6 h-6 mr-2 text-[#A08647]" />
                Included Amenities
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {selectedBranchData.amenities.map((amenity, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 text-white/80 p-2 bg-white/5 rounded-lg border border-white/10"
                  >
                    <CheckCircle className="w-5 h-5 text-[#A08647] flex-shrink-0" />
                    <span className="text-sm">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Section */}
          <div className="mt-12 bg-gradient-to-r from-[#A08647]/10 to-[#D1C0B2]/10 rounded-2xl border border-white/10 p-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Ready to Book Your Stay?
              </h3>
              <p className="text-white/70 text-base md:text-lg">
                Secure your spot in this premium accommodation today
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
                <Calendar className="w-7 h-7 text-[#A08647] mx-auto mb-2" />
                <div className="text-white font-semibold">
                  Flexible Check-in
                </div>
                <div className="text-white/60 text-sm">Available 24/7</div>
              </div>
              <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
                <Shield className="w-7 h-7 text-[#A08647] mx-auto mb-2" />
                <div className="text-white font-semibold">Secure & Safe</div>
                <div className="text-white/60 text-sm">CCTV Monitored</div>
              </div>
              <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
                <Home className="w-7 h-7 text-[#A08647] mx-auto mb-2" />
                <div className="text-white font-semibold">
                  Home-like Comfort
                </div>
                <div className="text-white/60 text-sm">All Amenities</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => {
                  const phone = "918848574001";
                  const message = `Hello, I'd like to book a room at Branch ${selectedBranchData.branchNumber}.`;
                  const encoded = encodeURIComponent(message);
                  const url = `https://wa.me/${phone}?text=${encoded}`;
                  window.open(url, "_blank", "noopener,noreferrer");
                }}
                className="px-6 py-3 bg-gradient-to-r from-[#A08647] to-[#D1C0B2] rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-[#A08647]/20 transition-all duration-300 transform hover:scale-105"
              >
                Book Now via WhatsApp
              </button>
              <button
                onClick={() => {
                  const phone = selectedBranchData.phone;
                  window.open(`tel:${phone}`, "_self");
                }}
                className="px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white font-semibold hover:bg-white/20 transition-all duration-300"
              >
                Call Now
              </button>
            </div>

            <div className="text-center mt-5 p-3 bg-white/5 rounded-lg border border-white/10">
              <p className="text-white/80 mb-1">
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

      <Footer />
    </div>
  );
};