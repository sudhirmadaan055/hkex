import React from 'react';
import aemHeadlessClient from '../lib/aem-headless-client';

const HeroBanner = async ({ lang = 'en' }) => {
  const res = await aemHeadlessClient.getData('hkex-herobanner', `;cfPath=/content/dam/my-project/${lang}/hkex-hero-banner`);
  const {data:{hkexHeroBannerByPath:{item: {heroBannerItems, heroBannerImage}}}} = res || {};
  
  const editorProps = {
    "data-aue-resource": `urn:aemconnection:/content/dam/my-project/${lang}/hkex-hero-banner/jcr:content/data/master`,
    "data-aue-type": "reference",
    "data-aue-filter": "cf"
  };

  return(
    <div className="relative w-full" {...editorProps}>
      {/* Hero Image */}
      <img
        src={heroBannerImage}
        alt="Hero Banner"
        className="w-full aspect-[1440/700] object-cover"
        data-aue-prop="heroBannerImage" 
        data-aue-type="media"
        data-aue-label="Hero Banner Image"
      />

      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4 flex items-start justify-between">
          <div className="max-w-[636px] text-left text-white">
            {/* Title */}
            <h1 
              data-aue-prop="title" 
              data-aue-type="text" 
              data-aue-label="Hero Title"
              className="text-[32px] leading-[32px] tracking-normal font-bold sm:text-[64px] sm:leading-[64px] mb-[13.5px] sm:mb-[27px]"
            >
              {heroBannerItems[0]?.title} 
              <span 
                className="font-light" 
                data-aue-prop="subTitle" 
                data-aue-type="text"
                data-aue-label="Hero Subtitle"
              >
                {heroBannerItems[0]?.subTitle || ''}
              </span>
            </h1>

            {/* Description */}
            <p 
              className="text-[22px] mb-[13.5px] sm:mb-[27px]" 
              data-aue-prop="description" 
              data-aue-type="richtext"
              data-aue-label="Hero Description"
            >
              {heroBannerItems[0]?.description?.plaintext}
            </p>

            {/* CTA */}
            {heroBannerItems[0]?.ctaLabel && (
              <a 
                href={heroBannerItems[0]?.ctaLink['_path']} 
                className="text-[18px] text-white bg-transparent border border-white px-[11.5px] py-[5.25px] sm:px-[23px] sm:py-[10.5px] rounded-[22px] hover:bg-white hover:text-black transition font-bold no-underline"
                data-aue-prop="ctaLabel"
                data-aue-type="text"
                data-aue-label="Call to Action Text"
              >
                {heroBannerItems[0]?.ctaLabel}
              </a>
            )}
          </div>
          
          {/* Share Prices Section */}
          <div 
            className="w-[460px] text-left text-white bg-[#14436B] py-[30px] px-[42px] rounded-[20px]"
            data-aue-prop="sharePricesSection"
            data-aue-type="reference"
            data-aue-label="Share Prices Section"
          >
            {/* Title */}
            <h2 
              className="text-[30px] leading-[64px] tracking-normal font-bold"
              data-aue-prop="sharePricesTitle"
              data-aue-type="text"
              data-aue-label="Share Prices Title"
            >
              HKEX Share Prices
            </h2>
            
            <div className="flex justify-between">
              <div>
                <p 
                  className='text-[20px] leading-[22px] font-light mb-[6px]'
                  data-aue-prop="stockSymbol1"
                  data-aue-type="text"
                  data-aue-label="Stock Symbol 1"
                >
                  HKEX (388)
                </p>
                <p 
                  className='text-[26px] leading-[22px] font-bold tracking-normal mb-[6px]'
                  data-aue-prop="stockPrice1"
                  data-aue-type="text"
                  data-aue-label="Stock Price 1"
                >
                  HKD 428.20
                </p>
                <p 
                  className='text-[26px] leading-[22px] tracking-normal mb-[10px] flex item-center'
                  data-aue-prop="stockChange1"
                  data-aue-type="text"
                  data-aue-label="Stock Change 1"
                >
                  <img src="/arrow-down.svg" className='mr-[8px]' alt="Down arrow" />
                  1.15%
                </p>
                <p 
                  className='text-[14px] leading-[22px] tracking-normal mb-[0]'
                  data-aue-prop="stockHigh1"
                  data-aue-type="text"
                  data-aue-label="52 Week High 1"
                >
                  52W High: HKD 452.0
                </p>
                <p 
                  className='text-[14px] leading-[22px] tracking-normal'
                  data-aue-prop="stockLow1"
                  data-aue-type="text"
                  data-aue-label="52 Week Low 1"
                >
                  52 Low: HKD 213.1
                </p>
              </div>
              
              <div>
                <p 
                  className='text-[20px] leading-[22px] font-light mb-[6px]'
                  data-aue-prop="stockSymbol2"
                  data-aue-type="text"
                  data-aue-label="Stock Symbol 2"
                >
                  HKEX (388)
                </p>
                <p 
                  className='text-[26px] leading-[22px] font-bold tracking-normal mb-[6px]'
                  data-aue-prop="stockPrice2"
                  data-aue-type="text"
                  data-aue-label="Stock Price 2"
                >
                  HKD 428.20
                </p>
                <p 
                  className='text-[26px] leading-[22px] tracking-normal mb-[10px] flex item-center'
                  data-aue-prop="stockChange2"
                  data-aue-type="text"
                  data-aue-label="Stock Change 2"
                >
                  <img src="/arrow-down.svg" className='mr-[8px]' alt="Down arrow" />
                  1.15%
                </p>
                <p 
                  className='text-[14px] leading-[22px] tracking-normal mb-[0]'
                  data-aue-prop="stockHigh2"
                  data-aue-type="text"
                  data-aue-label="52 Week High 2"
                >
                  52W High: HKD 452.0
                </p>
                <p 
                  className='text-[14px] leading-[22px] tracking-normal'
                  data-aue-prop="stockLow2"
                  data-aue-type="text"
                  data-aue-label="52 Week Low 2"
                >
                  52 Low: HKD 213.1
                </p>
              </div>
            </div>
            
            {/* Market Cap and Last Update */}
            <p 
              className='text-[14px] leading-[22px] tracking-normal font-bold mb-[0]'
              data-aue-prop="marketCap"
              data-aue-type="text"
              data-aue-label="Market Cap"
            >
              Mkt. Cap: HKD 542.89B
            </p>
            <p 
              className="text-[14px] leading-[22px] tracking-normal font-light mb-[0]"
              data-aue-prop="lastUpdate"
              data-aue-type="text"
              data-aue-label="Last Update"
            >
              Last Update: 31 July 2025 15:37
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
