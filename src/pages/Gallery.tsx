import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryCategories = [
    {
      title: 'Equipment Showcase',
      images: [
        'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=500',
        'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=500',
        'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=500',
        'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=500'
      ]
    },
    {
      title: 'Work Sites',
      images: [
        'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=500',
        'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=500',
        'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=500',
        'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=500'
      ]
    },
    {
      title: 'Service Centers',
      images: [
        'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=500',
        'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=500',
        'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=500',
        'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=500'
      ]
    },
    {
      title: 'Customer Events',
      images: [
        'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=500',
        'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=500',
        'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=500',
        'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=500'
      ]
    }
  ];

  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Gallery</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our visual journey through equipment showcases, work sites, service centers, 
            and customer events. See our commitment to excellence in action.
          </p>
        </div>

        {/* Gallery Categories */}
        <div className="space-y-12 sm:space-y-16">
          {galleryCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">{category.title}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {category.images.map((image, imageIndex) => (
                  <div 
                    key={imageIndex} 
                    className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                    onClick={() => setSelectedImage(image)}
                  >
                    <img 
                      src={image} 
                      alt={`${category.title} ${imageIndex + 1}`}
                      className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                      <ZoomIn className="h-6 w-6 sm:h-8 sm:w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Video Section */}
        <div className="bg-gray-50 rounded-lg p-6 sm:p-8 mt-12 sm:mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Featured Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-40 sm:h-48 bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg sm:text-2xl">▶</span>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base">EX210 LC Prime Launch Event</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Product Launch Highlights</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Watch the highlights from our latest product launch event featuring the EX210 LC Prime excavator.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-40 sm:h-48 bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg sm:text-2xl">▶</span>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base">Customer Success Stories</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Customer Testimonials</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Hear from our satisfied customers about their experience with Mitra Commercial and Tata Hitachi equipment.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-orange-500 text-white rounded-lg p-6 sm:p-8 mt-12 sm:mt-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Want to Feature Your Project?</h2>
          <p className="text-lg sm:text-xl text-orange-100 mb-4 sm:mb-6 max-w-2xl mx-auto">
            We love showcasing our customers' successful projects. Share your photos and stories with us 
            to be featured in our gallery and social media.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-500 hover:bg-gray-100 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-colors">
              Submit Photos
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-orange-500 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <X className="h-4 w-4 sm:h-6 sm:w-6 text-gray-900" />
            </button>
            <img 
              src={selectedImage} 
              alt="Enlarged view"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;