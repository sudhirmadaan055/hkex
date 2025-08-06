import React from 'react';
import aemHeadlessClient from '../lib/aem-headless-client';
import ImageComponent from '../lib/ImageComponent';

const HeroBanner = async ({ lang = 'en' }) => {
  try {
    const res = await aemHeadlessClient.getData('hkex-herobanner', `;cfPath=/content/dam/hkex-group/${lang}/home/hero-banner/hkex-hero-banner`);
    const {data:{hkexHeroBannerByPath:{item: {heroBannerItems, _path, heroBannerImage, shareTitle, hkexshareItems, marketCapText, lastUpdatedLabel}}}} = res || {};
    
    const editorProps = {
      "data-aue-resource": `urn:aemconnection:/content/dam/hkex-group/${lang}/home/hero-banner/hkex-hero-banner/jcr:content/data/master`,
      "data-aue-type": "reference",
      "data-aue-filter": "cf",
      "data-aue-label":"hero-banner-image"
    };


    const imageHtml = ImageComponent({
      src: heroBannerImage,
      alt: '',
      className: 'project-card-image',
      breakpoints: {
        mobile: {
          width: 768,
          src: `${heroBannerImage}:Mobile`,
        },
        tablet: {
          width: 1024,
          src: `${heroBannerImage}:Tablet`,
        },
        desktop: {
          width: 1920,
          src: `${heroBannerImage}:Desktop`,
        },
      },
      lazy: true,
    });

    return(
      <div className="relative w-full" {...editorProps}>
        {/* Hero Image */}
        <div 
          className="w-full aspect-[5/8] md:aspect-[1/1] lg:aspect-[1440/700] object-cover"
          data-aue-prop="heroBannerImage" 
          data-aue-type="media"
          data-aue-label="Hero Banner Image"
          dangerouslySetInnerHTML={{ __html: imageHtml }}
        />

        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-center" data-aue-resource={`urn:aemconnection:${_path}/jcr:content/data/master`} data-aue-type="reference" data-aue-filter="cf" data-aue-label="hero-banner-details">
          <div className="container mx-auto px-4 flex items-start justify-between flex-col lg:flex-row">
            <div className="max-w-[636px] text-left text-white mb-[30px]">
              {/* Title */}
              <h1 
                data-aue-prop="title" 
                data-aue-type="text" 
                data-aue-label="Hero Title"
                className="text-[32px] leading-[32px] tracking-normal font-bold md:text-[64px] sm:leading-[64px] mb-[13.5px] sm:mb-[27px]"
              >
                {heroBannerItems[0]?.title} 
                <span 
                  className="font-light" 
                  data-aue-prop="subTitle" 
                  data-aue-type="text"
                  data-aue-label="Hero Subtitle"
                >
                  &nbsp;{heroBannerItems[0]?.subTitle || ''}
                </span>
              </h1>

              {/* Description */}
              <p 
                className="text-[14px] md:text-[22px] mb-[13.5px] sm:mb-[27px]" 
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
              className="w-[100%] md:w-[460px] text-left text-white bg-[#14436B] px-[21px] py-[15px] mb:py-[30px] mb:px-[42px] rounded-[20px]"
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
                {shareTitle}
              </h2>
              
              <div className="flex justify-between">
                {hkexshareItems?.length> 0 && hkexshareItems?.map((item, index) => {
                  const updatedDHtml = item?.shareItems?.html?.replace('/content/dam/my-project/en/original-images', 'https://publish-p35060-e135954.adobeaemcloud.com/content/dam/my-project/en/original-images')
                  return <div key={`item-${index}`} className='basis-[50%]'>
                  <p 
                    className='text-[20px] leading-[22px] font-light mb-[6px] basis-[50%] share-item-content'
                    data-aue-resource={`urn:aemconnection:${item._path}/jcr:content/data/master`} data-aue-type="reference" data-aue-filter="cf" data-aue-label="share-items"                    
                    dangerouslySetInnerHTML={{__html: updatedDHtml}}
                  />
                </div>
                })}
              </div>
              
              {/* Market Cap and Last Update */}
              <p 
                className='text-[14px] leading-[22px] tracking-normal font-bold mb-[0]'
                data-aue-prop="marketCap"
                data-aue-type="text"
                data-aue-label="Market Cap"
              >
                {marketCapText}
              </p>
              <p 
                className="text-[14px] leading-[22px] tracking-normal font-light mb-[0]"
                data-aue-prop="lastUpdate"
                data-aue-type="text"
                data-aue-label="Last Update"
              >
                {lastUpdatedLabel}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error loading hero banner:', error);
    return (
      <div className="relative w-full bg-gray-100 min-h-[400px] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Unable to load hero banner</h2>
          <p className="text-gray-600">Please try again later.</p>
        </div>
      </div>
    );
  }
};

export default HeroBanner;
