'use client';
// import Image from 'next/image';
const Community = ({communityData}) => {
   if (!communityData) return null;

   const editorProps = {
    "data-aue-resource": "urn:aemconnection:/content/dam/my-project/en/hkex-community-banner/jcr:content/data/master",
    "data-aue-type": "reference",
    "data-aue-filter": "cf"
  };

  const {
    title = '',
    subTitle = '',
    description,
    firstCtaLabel,
    firstCtaLink,
    secondCtaLabel,
    secondCtaLink,
    backgroundImage,
    alignment = 'Align Left',
  } = communityData?.data?.hkexFeatureBannerByPath?.item || {};

   const contentRight = alignment === 'Align Right';
  return (
      <>
      <section {...editorProps}
      className="relative overflow-hidden flex items-center justify-center bg-gray-900 text-white p-5"
      style={{ maxHeight: '380px' }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="Community background"
          fill
          className="object-fit h-full w-full"
          priority
        />
        <div className="absolute inset-0 bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
        <div className={`max-w-4xl ${contentRight ? 'ml-auto text-end' : ''}`}>
          {/* Main Heading */}
          <h2 className="text-4xl lg:text-6xl text-white mb-6" data-aue-prop="title" data-aue-type="text">
            <span>
              <b>{title}</b>{' '}
              <span className="font-thin">
                {subTitle}
              </span>
            </span>
          </h2>

          {/* Description */}
          <p
            className={`text-lg lg:text-xl text-white mb-8 max-w-3xl leading-relaxed font-thin ${
              contentRight ? 'ml-auto' : 'mr-auto'
            }`} 
          >
            {description?.plaintext}
          </p>

          {/* Call-to-Action Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 ${
              contentRight ? 'justify-end' : 'justify-start'
            }`}
          >
            {firstCtaLabel && (
              <a
                href={firstCtaLink || '#'}
                className="text-decoration-none border-2 border-white text-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-transform duration-300 transform hover:scale-105 shadow-lg"
                style={{
                  borderRadius: '22px',
                  backgroundColor: 'rgba(20, 67, 107, 0.40)',
                }}
              >
                {firstCtaLabel}
              </a>
            )}
            {secondCtaLabel && (
              <a
                href={secondCtaLink || '#'}
                className="text-decoration-none border-2 border-white text-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-transform duration-300 transform hover:scale-105 shadow-lg"
                style={{
                  borderRadius: '22px',
                  backgroundColor: 'rgba(20, 67, 107, 0.40)',
                }}
              >
                {secondCtaLabel}
              </a>
            )}
          </div>
        </div>
      </div>
      </section>
      </>
  );
};

export default Community; 