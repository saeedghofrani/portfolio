import React, { useRef, useEffect, useState } from 'react';

interface AlbumImage {
  src: string;
  alt: string;
}

interface AlbumCategory {
  title: string;
  images: AlbumImage[];
}

const albumData: AlbumCategory[] = [
  {
    title: 'Nature Landscapes',
    images: [
      { src: 'https://via.placeholder.com/600x400/87CEEB/FFFFFF?text=Mountain', alt: 'Mountain Landscape' },
      { src: 'https://via.placeholder.com/600x400/90EE90/FFFFFF?text=Forest', alt: 'Forest View' },
      { src: 'https://via.placeholder.com/600x400/ADD8E6/FFFFFF?text=Lake', alt: 'Calm Lake' },
      { src: 'https://via.placeholder.com/600x400/FFD700/000000?text=Sunset', alt: 'Golden Sunset' },
      { src: 'https://via.placeholder.com/600x400/A0522D/FFFFFF?text=Desert', alt: 'Desert Dunes' },
    ],
  },
  {
    title: 'Cityscapes',
    images: [
      { src: 'https://via.placeholder.com/600x400/A9A9A9/FFFFFF?text=Skyscrapers', alt: 'City Skyscrapers' },
      { src: 'https://via.placeholder.com/600x400/6A5ACD/FFFFFF?text=Night+City', alt: 'City at Night' },
      { src: 'https://via.placeholder.com/600x400/4682B4/FFFFFF?text=Urban', alt: 'Urban Street' },
      { src: 'https://via.placeholder.com/600x400/708090/FFFFFF?text=Bridge', alt: 'City Bridge' },
    ],
  },
  {
    title: 'Abstract Designs',
    images: [
      { src: 'https://via.placeholder.com/600x400/FFB6C1/000000?text=Pattern+1', alt: 'Abstract Pattern 1' },
      { src: 'https://via.placeholder.com/600x400/FFA07A/000000?text=Pattern+2', alt: 'Abstract Pattern 2' },
      { src: 'https://via.placeholder.com/600x400/E0FFFF/000000?text=Pattern+3', alt: 'Abstract Pattern 3' },
    ],
  },
];

const AlbumSection: React.FC = () => {
  const scrollContainerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [selectedImage, setSelectedImage] = useState<AlbumImage | null>(null);

  useEffect(() => {
    scrollContainerRefs.current.forEach((container) => {
      if (container) {
        const handleWheel = (e: WheelEvent) => {
          e.preventDefault();
          container.scrollLeft += e.deltaY;
        };
        container.addEventListener('wheel', handleWheel);
        return () => {
          container.removeEventListener('wheel', handleWheel);
        };
      }
    });
  }, []);

  const openImageModal = (image: AlbumImage) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="album" className="p-8 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-blue-600 dark:text-blue-400">My Album</h1>
      <div className="max-w-7xl mx-auto space-y-12 w-full">
        {albumData.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-8">
            <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white text-center">{category.title}</h2>
            <div
              className="flex overflow-x-auto snap-x snap-mandatory py-4 scrollbar-hide"
              ref={(el) => (scrollContainerRefs.current[categoryIndex] = el)}
            >
              {category.images.map((image, imageIndex) => (
                <div key={imageIndex} className="flex-shrink-0 w-80 h-56 snap-center mx-4 rounded-lg shadow-xl overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105"
                  onClick={() => openImageModal(image)}
                >
                  <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={closeImageModal}
        >
          <div className="relative max-w-4xl max-h-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
            <button
              className="absolute top-4 right-4 text-white text-3xl z-10 hover:text-gray-300 transition-colors duration-200"
              onClick={closeImageModal}
            >
              &times;
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} className="max-w-full max-h-[80vh] object-contain" />
            <div className="p-4 text-center bg-gray-900 text-white">
              <p>{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AlbumSection;
