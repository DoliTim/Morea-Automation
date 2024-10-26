// src/components/ProductSection.js
import React from 'react';

function ProductSection() {
  const productImages = [
    '/images/bag-holder-1.jpg',
    '/images/bag-holder-2.jpg',
    '/images/bag-holder-3.jpg'
  ];

  return (
    <section id="product" className="pt-20 pb-12 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between py-20">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img 
              src="/images/morea-logo.jpg" 
              alt="Morea Logo" 
              className="h-12 mb-8"
            />
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Revolutionary Bag Holder
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Keep your bags secure and within reach with our innovative table-edge holder.
            </p>
            <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Shop Now
            </button>
          </div>
          <div className="md:w-1/2">
            <video 
              src="/videos/Handbag holder 1.mp4" 
              autoPlay 
              loop 
              muted 
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>

        {/* Product Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
          {productImages.map((image, index) => (
            <div key={index} className="relative group">
              <img 
                src={image}
                alt={`Ring Bag Holder view ${index + 1}`}
                className="rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div id="features" className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Easy Installation</h3>
            <p className="text-gray-600">Securely attaches to any table edge in seconds.</p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
            <p className="text-gray-600">Made with high-grade materials for lasting durability.</p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Stylish Design</h3>
            <p className="text-gray-600">Elegant appearance that complements any setting.</p>
          </div>
        </div>
      </div> 
      
    </section>
  );
}

export default ProductSection;