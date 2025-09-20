import React, { useEffect, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Download, ZoomIn, ZoomOut } from 'lucide-react';
import { gsap } from 'gsap';

interface TermsAndConditionsProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const termsImages = [
    {
      src: '/terms-and-conditions-1.jpg',
      alt: 'Terms and Conditions - Page 1',
      title: 'Rules & Regulations'
    },
    {
      src: '/terms-and-conditions-2.jpg',
      alt: 'Terms and Conditions - Page 2', 
      title: 'Additional Terms'
    }
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      
      // Animate modal entrance
      gsap.fromTo(modalRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.3, ease: 'power2.out' }
      );
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % termsImages.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + termsImages.length) % termsImages.length);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div 
        ref={modalRef}
        className="relative max-w-5xl w-full max-h-[95vh] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl border border-white/20 overflow-hidden shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div>
            <h2 className="text-2xl font-bold text-white">Terms & Conditions</h2>
            <p className="text-white/60 text-sm">Nyxta Hostels - Rules & Regulations</p>
          </div>
          
          <div className="flex items-center space-x-3">
            {/* Page indicator */}
            <div className="flex items-center space-x-2 px-3 py-1 bg-white/10 rounded-full">
              <span className="text-white/80 text-sm">
                {currentPage + 1} of {termsImages.length}
              </span>
            </div>
            
            {/* Zoom toggle */}
            <button
              onClick={toggleZoom}
              className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
              title={isZoomed ? 'Zoom Out' : 'Zoom In'}
            >
              {isZoomed ? <ZoomOut className="w-5 h-5" /> : <ZoomIn className="w-5 h-5" />}
            </button>
            
            {/* Download button */}
            <button
              onClick={() => {
                const link = document.createElement('a');
                link.href = termsImages[currentPage].src;
                link.download = `nyxta-terms-page-${currentPage + 1}.jpg`;
                link.click();
              }}
              className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
              title="Download"
            >
              <Download className="w-5 h-5" />
            </button>
            
            {/* Close button */}
            <button
              onClick={onClose}
              className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="relative">
          {/* Navigation buttons */}
          {termsImages.length > 1 && (
            <>
              <button
                onClick={prevPage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextPage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Image container */}
          <div className="p-6 flex justify-center">
            <div className={`relative transition-all duration-300 ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}>
              <img
                src={termsImages[currentPage].src}
                alt={termsImages[currentPage].alt}
                className={`max-w-full h-auto rounded-xl shadow-2xl transition-all duration-300 ${
                  isZoomed ? 'scale-150 max-h-none' : 'max-h-[70vh]'
                }`}
                onClick={toggleZoom}
                style={{
                  transformOrigin: 'center center'
                }}
              />
            </div>
          </div>

          {/* Page title */}
          <div className="px-6 pb-4">
            <h3 className="text-lg font-semibold text-white text-center">
              {termsImages[currentPage].title}
            </h3>
          </div>
        </div>

        {/* Footer with page dots */}
        {termsImages.length > 1 && (
          <div className="flex justify-center space-x-2 p-4 border-t border-white/10">
            {termsImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentPage
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 scale-125'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        )}

        {/* Instructions */}
        <div className="px-6 pb-4">
          <p className="text-white/60 text-xs text-center">
            Use arrow keys or buttons to navigate • Click image to zoom • ESC to close
          </p>
        </div>
      </div>
    </div>
  );
};