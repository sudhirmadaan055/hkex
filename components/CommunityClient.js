'use client';

// import Image from 'next/image';
const Community = ({communityData, lang = 'en', cfPath, gradient} ) => {
   if (!communityData) return null;

   try {
     
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

    const editorProps = {
      "data-aue-resource": `urn:aemconnection:${cfPath}/jcr:content/data/master`,
      "data-aue-type": "reference",
      "data-aue-filter": "cf",
      "data-aue-label": `${subTitle}`
    };

     const contentRight = alignment === 'Align Right';
    return (
        <>
        <section {...editorProps}
        className="relative overflow-hidden flex items-center justify-center bg-gray-900 text-white p-1 sm:p-5 "
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImage}
            alt="Community background"
            fill
            className="object-cover h-full w-full opacity-0.5"
            priority
            data-aue-prop="backgroundImage"
            data-aue-type="image"
            data-aue-label="Background Image"
          />
          <div className={`absolute inset-0 ${gradient === 'gray' ? "bg-gray" : "blue-gradient"} `}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-2 ml:0  md:px-4 py-16 md:py-12">
          <div className={`sm:max-w-[500px] lg:max-w-[738px] ${contentRight ? 'ml-auto text-end' : ''}`}>
            {/* Main Heading */}
            <h2 className="text-4xl lg:text-6xl text-white mb-6" data-aue-prop="title" data-aue-type="text" data-aue-label="Main Title">
                <b>{title}</b>{' '}
                <span className="font-thin" data-aue-prop="subTitle" data-aue-type="text" data-aue-label="Subtitle">
                  {subTitle}
                </span>
            </h2>

            {/* Description */}
            <p
              className={`text-lg lg:text-xl text-white mb-8 max-w-3xl font-light leading-5 ${
                contentRight ? 'ml-auto' : 'mr-auto'
              }`} 
              style={{lineHeight:"20px",fontWeight:"300"}}
              data-aue-prop="description"
              data-aue-type="text"
              data-aue-label="Description"
            >
              {description?.plaintext}
            </p>

            {/* Call-to-Action Buttons */}
            <div
              className={`text-center flex flex-col sm:flex-row gap-4 ${
                contentRight ? 'justify-end' : 'justify-start'
              }`}
              data-aue-prop="ctaButtons"
              data-aue-type="container"
              data-aue-label="Call to Action Buttons"
            >
              {firstCtaLabel && (
                <a
                  href={firstCtaLink || '#'}
                  className="text-decoration-none border-2 border-white text-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-transform duration-300 transform hover:scale-105 shadow-lg"
                  style={{
                    borderRadius: '22px',
                    backgroundColor: 'rgba(20, 67, 107, 0.40)',
                  }}
                  data-aue-prop="firstCtaLabel"
                  data-aue-type="text"
                  data-aue-label="First CTA Label"
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
                  data-aue-prop="secondCtaLabel"
                  data-aue-type="text"
                  data-aue-label="Second CTA Label"
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
   } catch (error) {
     console.error('Error rendering community component:', error);
     return (
       <section className="relative overflow-hidden flex items-center justify-center bg-gray-900 text-white p-5" style={{ maxHeight: '380px' }}>
         <div className="text-center">
           <h2 className="text-2xl font-bold text-white mb-4">Unable to load community section</h2>
           <p className="text-gray-300">Please try again later.</p>
         </div>
       </section>
     );
   }
};

export default Community; 