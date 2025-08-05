import React from 'react';

const Q1Results = () => {
  try {
    return (
      <div 
        className="min-h-screen flex items-center justify-center py-8 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: 'url(/market.jpg)' }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-900/60 to-transparent"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl w-full mx-auto px-8 relative z-10">
          {/* Left Section - Text Content */}
          <div className="text-white pr-8">
            <h1 className="text-5xl lg:text-6xl font-light leading-tight mb-8">
              Latest <span className="font-bold">2025 Q1</span> Result.
            </h1>
            
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                HKEX has had a strong start to 2025, delivering record Q1 results. Global interest in China continues to grow, 
                driven by AI and innovation, with increased Mainland Chinese investor participation. We achieved record volumes 
                in our Cash and Derivatives Markets, with trading turnover exceeding $300 billion on 16 days, and solid growth 
                in commodities with LME trading volumes at an 11-year high.
              </p>
              
              <p className="text-lg leading-relaxed">
                Hong Kong's capital raising activity remains robust, ranking among the world's top five IPO venues. Since April 2021, 
                we have welcomed two large follow-on offerings and maintain a strong pipeline of 120 listing applications.
              </p>
              
              <p className="text-lg leading-relaxed">
                Our strategic initiatives for 2025 include a new partnership with CMU OmniClear, product launches to enhance market 
                vibrancy and liquidity, and expansion of our international network of recognized stock exchanges.
              </p>
              
              <p className="text-lg leading-relaxed">
                Looking ahead to 2025 and beyond, we will continue to leverage our China advantage, expand global connectivity, 
                and enhance our channels, platforms, and products to remain resilient against macro volatility.
              </p>
            </div>
            
            <div className="text-right mt-8 text-base">
              Bonnie Y Chan, CEO
            </div>
          </div>
          
          {/* Right Section - Financial Figures & CTA */}
          <div className="relative h-full min-h-[600px] flex items-center justify-center">
            <div>
              <div className="text-gray-300 text-sm font-medium mb-6">
                HKEX 香港交易所
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="text-2xl font-bold text-white mb-1">
                    HK$6.9 Billion
                  </div>
                  <div className="text-xs text-white leading-relaxed">
                    Revenue and other income up 32 per cent against Q1 2024.
                  </div>
                </div>
                
                <div>
                  <div className="text-2xl font-bold text-white mb-1">
                    HK$4.1 Billion
                  </div>
                  <div className="text-xs text-white leading-relaxed">
                    Profit attributable to shareholders up 37 per cent against Q1 2024.
                  </div>
                </div>
                
                <div>
                  <div className="text-2xl font-bold text-white mb-1">
                    HK$3.23
                  </div>
                  <div className="text-xs text-white leading-relaxed">
                    Basic earnings per share up 37 per cent against Q1 2024.
                  </div>
                </div>
              </div>
              
              <div className="h-0.5 bg-red-600 my-6 w-16"></div>
              
              <button className="bg-red-600 hover:bg-red-700 text-white border-none py-2 px-6 rounded-lg text-sm font-medium cursor-pointer transition-colors duration-300">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error rendering Q1 results:', error);
    return (
      <div className="min-h-screen flex items-center justify-center py-8 bg-gray-100">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Unable to load Q1 results</h2>
          <p className="text-gray-600">Please try again later.</p>
        </div>
      </div>
    );
  }
};

export default Q1Results; 