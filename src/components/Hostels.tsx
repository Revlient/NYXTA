import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { branchApi } from "../services/api";
import { mapBranchToFrontend, FrontendBranch } from "../services/dataAdapter";
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
  Loader2,
} from "lucide-react";

export const Hostels: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [expandedBranches, setExpandedBranches] = useState<number[]>([]);
  const [branches, setBranches] = useState<FrontendBranch[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBranches = async () => {
      try {
        setLoading(true);
        const apiBranches = await branchApi.getAll();
        
        
        // @ts-ignore
        const frontendBranches = apiBranches.data.map(mapBranchToFrontend);
        setBranches(frontendBranches);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch branches:', err);
        setError('Failed to load hostels. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBranches();
  }, []);

  const toggleDetails = (branchId: number) => {
    setExpandedBranches((prev) =>
      prev.includes(branchId)
        ? prev.filter((id) => id !== branchId)
        : [...prev, branchId]
    );
  };

  const openBranchDetails = (branchId: number) => {
    navigate(`/hostel/${branchId}`);
  };

  return (
    <div className="min-h-screen">
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
              Nyxta Hostels across prime locations in Kochi. budget
              accommodation with modern amenities
            </p>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-12 h-12 text-[#A08647] animate-spin" />
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="max-w-2xl mx-auto bg-red-500/10 border border-red-500/20 rounded-xl p-6 text-center">
              <p className="text-red-400 mb-4">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-2 bg-red-500/20 hover:bg-red-500/30 rounded-lg text-white transition-all"
              >
                Retry
              </button>
            </div>
          )}

          {/* Branch Cards Flex Column */}
          {!loading && !error && (
            <div className="flex flex-col gap-8 max-w-6xl mx-auto">
              {branches.map((branch) => (
              <div
                key={branch.id}
                className="branch-card transition-all duration-500 transform hover:scale-105"
              >
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl border border-white/20 overflow-hidden shadow-2xl hover:shadow-[#A08647]/10 transition-all duration-300 flex flex-col md:flex-row h-full">
                  {/* Branch Image */}
                  {(branch.thumbnail || branch.image) && (
                    <div className="relative w-full md:w-1/2 h-64 md:h-full overflow-hidden ">
                      <img
                        src={branch.thumbnail || branch.image}
                        alt={`Branch ${branch.branchNumber}`}
                        className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                        onError={(e) => {
                          // Fallback to branch.image if thumbnail fails to load
                          if (branch.image && e.currentTarget.src !== branch.image) {
                            e.currentTarget.src = branch.image;
                          }
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold md:hidden">
                         {branch.name}
                      </div>
                      <button
                        onClick={() => toggleDetails(branch.id)}
                        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#A08647] to-[#D1C0B2] text-white px-4 py-2 rounded-xl font-semibold md:hidden flex items-center space-x-2"
                      >
                        <span>
                          {expandedBranches.includes(branch.id)
                            ? "Hide Details"
                            : "View Details"}
                        </span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}

                  {/* Branch Content - Always visible on md+, toggle on mobile */}
                  <div
                    className={`p-6 space-y-4 flex flex-col flex-grow ${
                      expandedBranches.includes(branch.id) ? "block" : "hidden"
                    } md:block`}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-grow">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {branch.name}
                        </h3>
                        {/* Badges for branch type and features */}
                        <div className="flex flex-wrap gap-2 mb-2">
                          {branch.ladies ? (
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-pink-500/20 text-pink-300 border border-pink-500/30">
                              👩 Ladies Hostel
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                              👨 Gents Hostel
                            </span>
                          )}
                          {branch.isCooking && (
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-500/20 text-green-300 border border-green-500/30">
                              👨‍🍳 Cooking Available
                            </span>
                          )}
                        </div>
                        <p className="text-white/60 text-sm">
                          Budget accommodation in prime location
                        </p>
                      </div>
                    </div>

                    {/* Cooking Fee Info */}
                    {branch.isCooking && branch.cookingFee && (
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-green-300 font-semibold text-sm">
                              Cooking Facility Available
                            </p>
                            <p className="text-white/60 text-xs">
                              Includes: Gas & Stove, Fridge, Basic Cooking Vessel
                            </p>
                          </div>
                          <div className="text-green-400 font-bold text-lg">
                            ₹{branch.cookingFee}/mo
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Contact and location */}
                    <div className="address">
                      <p className="text-white/80 mb-2">
                        <span className="font-semibold">Contact: </span>{" "}
                        {branch.phone}
                      </p>
                      <p className="text-white/80">
                        <span className="font-semibold">Address: </span>{" "}
                        {branch.address}
                      </p>
                      <a
                        href={branch.location}
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
                        onClick={() => openBranchDetails(branch.id)}
                        className="flex-1 py-3 rounded-xl font-semibold transition-all duration-300 bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:border-[#A08647]/50 flex items-center justify-center space-x-2"
                      >
                        <span>View Branch Details</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => {
                          const phone = "918848574001";
                          const message = "Hello, I'd like to book a room.";
                          const encoded = encodeURIComponent(message);
                          const url = `https://wa.me/${phone}?text=${encoded}`;
                          window.open(url, "_blank", "noopener,noreferrer");
                        }}
                        className="flex-1 py-3 rounded-xl font-semibold transition-all duration-300 bg-gradient-to-r from-[#A08647] to-[#D1C0B2] text-white hover:shadow-lg hover:shadow-[#A08647]/25 transform hover:scale-105"
                      >
                        Book Room
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          )}

          {/* Additional Info */}
          {/* <div className="text-center mt-12 p-6 bg-gradient-to-r from-[#A08647]/20 to-[#D1C0B2]/20 backdrop-blur-lg rounded-2xl border border-white/20 max-w-4xl mx-auto">
            <p className="text-white/80 mb-2">
              <span className="font-semibold">Registration Fee:</span> ₹500
              (One-time, Non-refundable)
            </p>
            <p className="text-white/80 mb-2">
              <span className="font-semibold">Optional Cooking Facility:</span>{" "}
              ₹{branches[0].cookingFee}/month
            </p>
            <p className="text-white/60 text-sm">
              <Clock className="w-4 h-4 inline mr-1" />
              Curfew: 11:30 PM | Payments are non-refundable for early checkout
            </p>
          </div> */}
        </div>
      </section>
    </div>
  );
};
