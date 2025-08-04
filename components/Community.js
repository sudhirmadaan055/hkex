import React from 'react';
import Image from 'next/image';

const Community = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/community.jpg"
          alt="Community hands background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-4xl">
          {/* Main Heading */}
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            <span className="block">HKEX</span>
            <span className="block text-3xl lg:text-5xl font-semibold">in the Community</span>
          </h1>
          
          {/* Description */}
          <p className="text-lg lg:text-xl text-white mb-8 max-w-3xl leading-relaxed">
            As an active and responsible global financial markets leader, we are committed to 
            adopting Corporate Responsibility best-practices, promoting the global sustainability 
            agenda and supporting the prosperity of all within the communities in which we operate.
          </p>
          
          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Our Sustainability Journey
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg">
              HKEX in the Community
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community; 