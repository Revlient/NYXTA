import React, { useEffect, useRef, useState, useCallback } from "react";
import { createRoot } from "react-dom/client";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Filter,
  ZoomIn,
  Grid,
  Search,
} from "lucide-react";

export const Gallery: React.FC = () => {
  const sectionRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const images = [
    //branch 31 edapally ladies
    {
      src: "/gallery/branch31/front.jpg",
      title: "Front",
      branch: "Edapally Ladies Branch 31",
      description: "",
    },
    {
      src: "/gallery/branch31/kitchen.jpg",
      title: "Kitchen",
      branch: "Edapally Ladies Branch 31",
      description: "",
    },
    {
      src: "/gallery/branch31/bathroom.jpg",
      title: "Bathroom",
      branch: "Edapally Ladies Branch 31",
      description: "",
    },
    {
      src: "/gallery/branch31/balcony.jpg",
      title: "Balcony",
      branch: "Edapally Ladies Branch 31",
      description: "",
    },
    {
      src: "/gallery/branch31/room1.jpg",
      title: "Room",
      branch: "Edapally Ladies Branch 31",
      description: "",
    },
    {
      src: "/gallery/branch31/room2.jpg",
      title: "Room",
      branch: "Edapally Ladies Branch 31",
      description: "",
    },
    {
      src: "/gallery/branch31/room3.jpg",
      title: "Room",
      branch: "Edapally Ladies Branch 31",
      description: "",
    },
    {
      src: "/gallery/branch31/stair.jpg",
      title: "Stairs",
      branch: "Edapally Ladies Branch 31",
      description: "",
    },

    //branch 32 edapally ladies
    {
      src: "/gallery/branch32/front.jpg",
      title: "Front",
      branch: "Edapally Ladies Branch 32",
      description: "",
    },
    {
      src: "/gallery/branch32/front2.jpg",
      title: "Front",
      branch: "Edapally Ladies Branch 32",
      description: "",
    },
    {
      src: "/gallery/branch32/kitchen.jpg",
      title: "Kitchen",
      branch: "Edapally Ladies Branch 32",
      description: "",
    },
    {
      src: "/gallery/branch32/kitchen2.jpg",
      title: "Kitchen",
      branch: "Edapally Ladies Branch 32",
      description: "",
    },
    {
      src: "/gallery/branch32/bathroom.jpg",
      title: "Bathroom",
      branch: "Edapally Ladies Branch 32",
      description: "",
    },
    {
      src: "/gallery/branch32/room2.jpg",
      title: "Room",
      branch: "Edapally Ladies Branch 32",
      description: "",
    },

    {
      src: "/gallery/branch32/room3.jpg",
      title: "Room",
      branch: "Edapally Ladies Branch 32",
      description: "",
    },

    //branch 33 palarivattom ladies
    {
      src: "/gallery/branch33/front.jpg",
      title: "Front",
      branch: "Palarivattom Ladies Branch 33",
      description: "",
    },
    {
      src: "/gallery/branch33/room.jpg",
      title: "Room",
      branch: "Palarivattom Ladies Branch 33",
      description: "",
    },
    {
      src: "/gallery/branch33/room1.jpg",
      title: "Room",
      branch: "Palarivattom Ladies Branch 33",
      description: "",
    },
    {
      src: "/gallery/branch33/room2.jpg",
      title: "Room",
      branch: "Palarivattom Ladies Branch 33",
      description: "",
    },
    {
      src: "/gallery/branch33/room3.jpg",
      title: "Room",
      branch: "Palarivattom Ladies Branch 33",
      description: "",
    },
    {
      src: "/gallery/branch33/stair.jpg",
      title: "Stair",
      branch: "Palarivattom Ladies Branch 33",
      description: "",
    },
    {
      src: "/gallery/branch33/bathroom2.jpg",
      title: "Bathroom",
      branch: "Palarivattom Ladies Branch 33",
      description: "",
    },

    //Edapally mens branch 05
    {
      src: "/gallery/branch05/front.jpg",
      title: "Bathroom",
      branch: "Edapally Mens Branch 05",
      description: "",
    },
    {
      src: "/gallery/branch05/room.jpg",
      title: "Room",
      branch: "Edapally Mens Branch 05",
      description: "",
    },
    {
      src: "/gallery/branch05/room2.jpg",
      title: "Room",
      branch: "Edapally Mens Branch 05",
      description: "",
    },
    {
      src: "/gallery/branch05/room3.jpg",
      title: "Room",
      branch: "Edapally Mens Branch 05",
      description: "",
    },
    {
      src: "/gallery/branch05/stair.jpg",
      title: "Stair",
      branch: "Edapally Mens Branch 05",
      description: "",
    },
    {
      src: "/gallery/branch05/purifier.jpg",
      title: "Purifier",
      branch: "Edapally Mens Branch 05",
      description: "",
    },
  ];

  const branches = [
    "Edapally Mens Branch 05",
    "Edapally Ladies Branch 31",
    "Edapally Ladies Branch 32",
    "Palarivattom Ladies Branch 33",
  ];

  const filteredImages = images.filter((image) => {
    const matchesFilter =
      activeFilter === "all" || image.branch === activeFilter;
    const matchesSearch =
      image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.branch.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const openLightbox = useCallback((index) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  }, []);

  const nextImage = useCallback(() => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  }, [selectedImage, filteredImages.length]);

  const prevImage = useCallback(() => {
    if (selectedImage !== null) {
      setSelectedImage(
        (selectedImage - 1 + filteredImages.length) % filteredImages.length
      );
    }
  }, [selectedImage, filteredImages.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage !== null) {
        switch (e.key) {
          case "Escape":
            closeLightbox();
            break;
          case "ArrowRight":
            nextImage();
            break;
          case "ArrowLeft":
            prevImage();
            break;
          default:
            break;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, closeLightbox, nextImage, prevImage]);

  const handleLightboxClick = useCallback(
    (e) => {
      if (e.target === e.currentTarget) {
        closeLightbox();
      }
    },
    [closeLightbox]
  );

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 min-h-screen"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              Gallery
            </span>
          </div>
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            Visual Journey
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Explore our stunning collection of spaces across our hostel
            branches. Each image showcases the comfort and style of our
            facilities.
          </p>
        </div>

        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {branches.map((branch) => (
              <button
                key={branch}
                onClick={() => setActiveFilter(branch)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === branch
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                    : "bg-white/10 backdrop-blur-sm text-slate-300 border border-white/20 hover:bg-white/20 hover:text-white"
                }`}
              >
                {branch}
                <span className="ml-2 text-xs opacity-70">
                  ({images.filter((img) => img.branch === branch).length})
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="text-center mb-8">
          <p className="text-slate-400">
            Showing {filteredImages.length} of {images.length} images
            {searchTerm && (
              <span className="text-blue-400"> for "{searchTerm}"</span>
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {isLoading ? (
            <div className="text-center py-20 col-span-full">
              <div className="text-6xl mb-4 animate-spin">⏳</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Loading images...
              </h3>
              <p className="text-slate-400 mb-8">Please wait a moment.</p>
            </div>
          ) : filteredImages.length > 0 ? (
            filteredImages.map((image, index) => (
              <div
                key={`${image.src}-${index}`}
                className="group cursor-pointer transform hover:scale-105 transition-all duration-500"
                onClick={() => openLightbox(index)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>
                    <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-medium rounded-full">
                      {image.branch}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {image.title}
                    </h3>
                    <p className="text-slate-400 text-sm line-clamp-2 group-hover:text-slate-300 transition-colors duration-300">
                      {image.description}
                    </p>
                  </div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 col-span-full">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                No images found
              </h3>
              <p className="text-slate-400 mb-8">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={() => {
                  setActiveFilter("all");
                  setSearchTerm("");
                }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={handleLightboxClick}
          >
            <div className="relative max-w-6xl max-h-full w-full">
              <button
                onClick={closeLightbox}
                className="absolute -top-16 right-0 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 z-10"
              >
                <X className="w-6 h-6" />
              </button>
              {filteredImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 z-10"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 z-10"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20">
                <img
                  src={filteredImages[selectedImage].src}
                  alt={filteredImages[selectedImage].title}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-8">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-full">
                        {filteredImages[selectedImage].branch}
                      </span>
                      <span className="text-white/60 text-sm">
                        {selectedImage + 1} of {filteredImages.length}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-3">
                      {filteredImages[selectedImage].title}
                    </h3>
                    <p className="text-white/80 text-lg leading-relaxed">
                      {filteredImages[selectedImage].description}
                    </p>
                  </div>
                </div>
              </div>
              {filteredImages.length > 1 && (
                <div className="absolute -bottom-24 left-0 right-0 flex justify-center">
                  <div className="flex gap-2 max-w-md overflow-x-auto p-2 bg-white/5 backdrop-blur-sm rounded-xl border border-white/20">
                    {filteredImages.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImage(idx)}
                        className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                          idx === selectedImage
                            ? "border-blue-500 scale-110"
                            : "border-white/20 hover:border-white/40"
                        }`}
                      >
                        <img
                          src={img.src}
                          alt={img.title}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
