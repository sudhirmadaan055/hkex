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
          src={'/community1.jpg'}
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
          <h1 className="text-4xl lg:text-6xl text-white mb-6" data-aue-prop="title" data-aue-type="text">
            <span>
              <b>{title.split(' ').slice(0,1)}</b>{' '}
              <span className="font-thin">
                {title?.replace('HKEX', '')?.trim()}
              </span>
            </span>
          </h1>

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
      <section {...editorProps}
      className="relative overflow-hidden flex items-center justify-center bg-gray-900 text-white p-5"
      style={{ maxHeight: '380px' }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src='/community2.jpg'
          alt="Community background"
          fill
          className="object-fit h-full w-full"
          priority
        />
        <div className="absolute inset-0 bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
        <div className={`max-w-4xl ${true ? 'ml-auto text-end' : ''}`}>
          {/* Main Heading */}
          <h1 className="text-4xl lg:text-6xl text-white mb-6" data-aue-prop="title" data-aue-type="text">
            <span>
              <b>HKEX</b>{' '}
              <span className="font-thin">
                Foundation.
              </span>
               
            </span>
          </h1>

          {/* Description */}
          <p
            className={`text-lg lg:text-xl text-white mb-8 max-w-3xl leading-relaxed font-thin ${
              true ? 'ml-auto' : 'mr-auto'
            }`} 
          >
            Inspiring change by supporting community projects that address various social and environmental challenges faced by our society. We create long-term community partnerships and encourage our employees to become involved.
          </p>

          {/* Call-to-Action Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 ${
              true ? 'justify-end' : 'justify-start'
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
                Learn more
              </a>
            )}
            {secondCtaLabel && (
              <a
                href={secondCtaLink || '#'}
                className=" text-decoration-none border-2 border-white text-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-transform duration-300 transform hover:scale-105 shadow-lg"
                style={{
                  borderRadius: '22px',
                  backgroundColor: 'rgba(20, 67, 107, 0.40)',
                }}
              >
                Follow us on LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>
      </section>
      <section {...editorProps}
      className="relative overflow-hidden flex items-center justify-center bg-gray-900 text-white p-5"
      style={{ maxHeight: '380px' }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src='/community3.jpg'
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
          <h1 className="text-4xl lg:text-6xl text-white mb-6" data-aue-prop="title" data-aue-type="text">
            <span>
              <b>HKEX</b>{' '}
              <span className="font-thin">
                Careers 
              </span>
               
            </span>
          </h1>

          {/* Description */}
          <p
            className={`text-lg lg:text-xl text-white mb-8 max-w-3xl leading-relaxed font-thin ${
              contentRight ? 'ml-auto' : 'mr-auto'
            }`} 
          >
           We offer a world of opportunities for those starting out as well as for those who are more experienced. We know that diverse thinking fosters better solutions, and we are committed to building an open and dynamic environment which allows our business to innovate and our people to thrive.
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
                className="border-2 border-white text-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-transform   duration-300 transform hover:scale-105 shadow-lg bg-transparent text-decoration-none"
                style={{
                  borderRadius: '22px',                  
                }}
              >
               Learn more about Careers at HKEX
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