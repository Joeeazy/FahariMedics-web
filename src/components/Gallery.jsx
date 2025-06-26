import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-blue-800 mb-4"
        >
          Our Medical Facility Gallery
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-2xl mx-auto"
        >
          Explore our modern healthcare facilities and see the environment where we provide exceptional medical care to our patients.
        </motion.p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
            onClick={() => openLightbox(image)}
          >
            <img
              src={image.url}
              alt={image.caption || "Hospital facility"}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              onError={(e) => {
                e.target.style.backgroundColor = '#f0f9ff';
                e.target.style.display = 'flex';
                e.target.style.justifyContent = 'center';
                e.target.style.alignItems = 'center';
                e.target.innerHTML = '<p class="text-blue-700">Image not available</p>';
              }}
            />
            <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-center p-4">
                <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
                {image.caption && (
                  <p className="font-medium">{image.caption}</p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full bg-white rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.caption || "Hospital facility"}
                className="w-full h-auto max-h-[70vh] object-contain"
                onError={(e) => {
                  e.target.style.backgroundColor = '#f0f9ff';
                  e.target.style.display = 'flex';
                  e.target.style.justifyContent = 'center';
                  e.target.style.alignItems = 'center';
                  e.target.innerHTML = '<p class="text-blue-700">Image not available</p>';
                }}
              />
              {selectedImage.caption && (
                <div className="bg-white p-4 border-t border-blue-100">
                  <p className="text-center text-gray-700 font-medium">{selectedImage.caption}</p>
                </div>
              )}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 bg-white/80 hover:bg-white text-blue-800 rounded-full p-2 transition-colors shadow-md"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;