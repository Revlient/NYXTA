import React, { useEffect, useRef, useState, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Filter, ZoomIn, Grid, Search } from 'lucide-react';

export const Gallery = () => {
  const sectionRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  // 1. Define missing state variables: searchTerm and isLoading
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop',
      title: 'Modern Bedroom',
      category: 'Rooms',
      description: 'Spacious bedroom with modern amenities'
    },
    {
      src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop',
      title: 'Luxury Bathroom',
      category: 'Bathroom',
      description: 'Premium bathroom with marble finishes'
    },
    {
      src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop',
      title: 'Living Room',
      category: 'Rooms',
      description: 'Comfortable living space with modern furniture'
    },
    {
      src: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=500&fit=crop',
      title: 'Garden Balcony',
      category: 'Balcony',
      description: 'Beautiful balcony with garden view'
    },
    {
      src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop',
      title: 'Outdoor Terrace',
      category: 'Outdoor',
      description: 'Relaxing outdoor terrace area'
    },
    {
      src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop',
      title: 'Kitchen',
      category: 'Rooms',
      description: 'Modern kitchen with island counter'
    },
    {
      src: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=600&h=400&fit=crop',
      title: 'Swimming Pool',
      category: 'Water',
      description: 'Crystal clear swimming pool'
    },
    {
      src: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&h=500&fit=crop',
      title: 'Master Bathroom',
      category: 'Bathroom',
      description: 'Elegant master bathroom with bathtub'
    },
    {
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
      title: 'Rooftop View',
      category: 'Outdoor',
      description: 'Stunning rooftop with city view'
    },
    {
      src: 'https://images.unsplash.com/photo-1551298370-9c50423746bb?w=600&h=400&fit=crop',
      title: 'Hot Tub',
      category: 'Water',
      description: 'Relaxing hot tub area'
    },
    {
      src: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&h=500&fit=crop',
      title: 'Private Balcony',
      category: 'Balcony',
      description: 'Intimate balcony space'
    },
    {
      src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop',
      title: 'Dining Room',
      category: 'Rooms',
      description: 'Elegant dining area'
    }
  ];

  const categories = ['Rooms', 'Bathroom', 'Outdoor', 'Balcony', 'Water'];

  // Filter images based on active filter and search term
  const filteredImages = images.filter(image => {
    const matchesFilter = activeFilter === 'all' || image.category === activeFilter;
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Animation effects
  useEffect(() => {
    // 2. The `isLoading` state is defined above, so this now works.
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const openLightbox = useCallback((index) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  }, []);

  const nextImage = useCallback(() => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  }, [selectedImage, filteredImages.length]);

  const prevImage = useCallback(() => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length);
    }
  }, [selectedImage, filteredImages.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage !== null) {
        switch (e.key) {
          case 'Escape':
            closeLightbox();
            break;
          case 'ArrowRight':
            nextImage();
            break;
          case 'ArrowLeft':
            prevImage();
            break;
          default:
            break; // Add a default case to satisfy linting
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, closeLightbox, nextImage, prevImage]);

  // Handle click outside to close lightbox
  const handleLightboxClick = useCallback((e) => {
    if (e.target === e.currentTarget) {
      closeLightbox();
    }
  }, [closeLightbox]);

  return (
    <section id="gallery" ref={sectionRef} className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header Section */}
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
            Explore our stunning collection of spaces designed for modern living. Each image tells a story of comfort, luxury, and style.
          </p>
        </div>

        {/* Controls Section */}
        <div className="mb-12">
          {/* <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-8">
            {/* Search Bar */}
            {/* <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search images..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
            </div> */}

            {/* View Mode Toggle */}
            {/* <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl p-1 border border-white/20">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === 'grid'
                    ? 'bg-blue-500 text-white'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
            </div>
          </div> */} 

          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-white/10 backdrop-blur-sm text-slate-300 border border-white/20 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category}
                <span className="ml-2 text-xs opacity-70">
                  ({images.filter(img => img.category === category).length})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="text-center mb-8">
          <p className="text-slate-400">
            Showing {filteredImages.length} of {images.length} images
            {searchTerm && (
              <span className="text-blue-400"> for "{searchTerm}"</span>
            )}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* 3. Wrap this conditional rendering in a single block */}
          {isLoading ? (
             <div className="text-center py-20 col-span-full">
              <div className="text-6xl mb-4 animate-spin">⏳</div>
              <h3 className="text-2xl font-bold text-white mb-4">Loading images...</h3>
              <p className="text-slate-400 mb-8">
                Please wait a moment.
              </p>
            </div>
          ) : filteredImages.length > 0 ? (
            filteredImages.map((image, index) => (
              <div
                key={`${image.src}-${index}`}
                className="group cursor-pointer transform hover:scale-105 transition-all duration-500"
                onClick={() => openLightbox(index)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Zoom Icon */}
                    <div className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-medium rounded-full">
                      {image.category}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {image.title}
                    </h3>
                    <p className="text-slate-400 text-sm line-clamp-2 group-hover:text-slate-300 transition-colors duration-300">
                      {image.description}
                    </p>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </div>
            ))
          ) : (
             <div className="text-center py-20 col-span-full">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-4">No images found</h3>
              <p className="text-slate-400 mb-8">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={() => {
                  setActiveFilter('all');
                  setSearchTerm('');
                }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Enhanced Lightbox Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={handleLightboxClick}
        >
          <div className="relative max-w-6xl max-h-full w-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-16 right-0 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
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

            {/* Image Container */}
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20">
              <img
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />

              {/* Image Information Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-8">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-full">
                      {filteredImages[selectedImage].category}
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

            {/* Thumbnail Navigation */}
            {filteredImages.length > 1 && (
              <div className="absolute -bottom-24 left-0 right-0 flex justify-center">
                <div className="flex gap-2 max-w-md overflow-x-auto p-2 bg-white/5 backdrop-blur-sm rounded-xl border border-white/20">
                  {filteredImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        idx === selectedImage
                          ? 'border-blue-500 scale-110'
                          : 'border-white/20 hover:border-white/40'
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
    </section>
  );
};