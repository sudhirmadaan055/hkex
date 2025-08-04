import React from 'react';
import Image from 'next/image';

const Community = ({contentRight = false}) => {
  return (
    <section className="relative overflow-hidden flex items-center justify-center bg-gray-900 text-white p-5" style={{maxHeight: '380px'}}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/community.jpg"
          alt="Community hands background"
          fill
          className="object-fit"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className={`relative z-10 container mx-auto px-4 py-16 lg:py-24 `}>
        <div className={`max-w-4xl ${contentRight ? 'ml-auto text-end': ''}`}>
          {/* Main Heading */}
          <h1 className="text-4xl lg:text-6xl text-white mb-6">
            <span><b>HKEX</b> <span className='font-thin'>in the Community</span></span>
            {/* <span className="block text-3xl lg:text-5xl font-semibold">in the Community</span> */}
          </h1>
          
          {/* Description */}
          <p className={`text-lg lg:text-xl text-white mb-8 max-w-3xl leading-relaxed font-thin ${contentRight ? 'ml-auto' : 'mr-auto'}`}>
            As an active and responsible global financial markets leader, we are committed to 
            adopting Corporate Responsibility best-practices, promoting the global sustainability 
            agenda and supporting the prosperity of all within the communities in which we operate.
          </p>
          
          {/* Call-to-Action Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 ${contentRight ? 'justify-end' : 'justify-start'}`}>
            <button className="border-2 border-white text-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg" style={{borderRadius: '22px',backgroundColor: 'rgba(20, 67, 107, 0.40)'}}>
              Our Sustainability Journey
            </button>
            <button className="border-2 border-white text-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg" style={{borderRadius: '22px',backgroundColor: 'rgba(20, 67, 107, 0.40)'}}>
              HKEX in the Community
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community; 