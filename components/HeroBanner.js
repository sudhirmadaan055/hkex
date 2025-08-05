import React from 'react';
import aemHeadlessClient from '../lib/aem-headless-client';


const HeroBanner = async (props) => {
  const res = await aemHeadlessClient.getData('hkex-herobanner', ';cfPath=/content/dam/my-project/en/hkex-hero-banner');
  const {data:{hkexHeroBannerByPath:{item: heroBannerItems}}} = res || {};
  
  const editorProps = {
    "data-aue-resource": "urn:aemconnection:/content/dam/my-project/en/hkex-hero-banner/jcr:content/data/master",
    "data-aue-type": "reference",
    "data-aue-filter": "cf"
  };
  return(
    <div className="relative w-full" {...editorProps}>
      {/* Hero Image */}
      <img
        src={heroBannerItems[0]?.heroBannerImage}
        alt="Hero Banner"
        className="w-full aspect-[1440/700] object-cover"
        data-aue-prop="image" data-aue-type="media"
      />

      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4 flex items-start justify-between">
          <div className="max-w-[636px] text-left text-white">
            {/* Title */}
            <h1 data-aue-prop="title" data-aue-type="text" className="
              text-[32px] leading-[32px] tracking-normal font-bold
              sm:text-[64px] sm:leading-[64px] mb-[13.5px] sm:mb-[27px]
            ">
              {heroBannerItems.heroBannerItems[0]?.title} {heroBannerItems.heroBannerItems[0]?.subTitle}
            </h1>

            {/* Description */}
            <p className="text-[22px] mb-[13.5px] sm:mb-[27px]" data-aue-prop="plaintext" data-aue-type="text">
            {heroBannerItems.heroBannerItems[0]?.description?.plaintext}
            </p>

            {/* CTA */}
            <a href={heroBannerItems.heroBannerItems[0]?.ctaLink['_path']} className="
                text-[18px]
              text-white bg-transparent border border-white
              px-[11.5px] py-[5.25px] sm:px-[23px] sm:py-[10.5px]
              rounded-[22px]
              hover:bg-white hover:text-black transition
              font-bold
              no-underline
            "
            >
              {heroBannerItems.heroBannerItems[0]?.ctaLabel}
            </a>
          </div>
          <div className="w-[460px] text-left text-white bg-[#14436B] py-[30px] px-[42px] rounded-[20px]">
            {/* Title */}
            <h2 className="
              text-[30px] leading-[64px] tracking-normal font-bold
            ">
              HKEX Share Prices
            </h2>
            <div className="flex justify-between">
                <div>
                    <p className='text-[20px] leading-[22px] font-light mb-[6px]'>HKEX (388)</p>
                    <p className='text-[26px] leading-[22px] font-bold tracking-normal mb-[6px]'>HKD 428.20</p>
                    <p className='text-[26px] leading-[22px] tracking-normal mb-[10px] flex item-center'><img src="/arrow-down.svg" className='mr-[8px]'></img>1.15%</p>
                    <p className='text-[14px] leading-[22px] tracking-normal mb-[0]'>52W High: HKD 452.0</p>
                    <p className='text-[14px] leading-[22px] tracking-normal'>52 Low:     HKD 213.1</p>
                </div>
                <div>
                    <p className='text-[20px] leading-[22px] font-light mb-[6px]'>HKEX (388)</p>
                    <p className='text-[26px] leading-[22px] font-bold tracking-normal mb-[6px]'>HKD 428.20</p>
                    <p className='text-[26px] leading-[22px] tracking-normal mb-[10px] flex item-center'><img src="/arrow-down.svg" className='mr-[8px]'></img>1.15%</p>
                    <p className='text-[14px] leading-[22px] tracking-normal mb-[0]'>52W High: HKD 452.0</p>
                    <p className='text-[14px] leading-[22px] tracking-normal'>52 Low:     HKD 213.1</p>
                </div>
            </div>
            {/* Description */}
            <p className='text-[14px] leading-[22px] tracking-normal font-bold mb-[0]'>
                Mkt. Cap: HKD 542.89B
            </p>
            <p className="text-[14px] leading-[22px] tracking-normal font-light mb-[0]">
                Last Update: 31 July 2025 15:37
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
