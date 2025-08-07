"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./NewsCarousel.module.css";
import ImageComponent from "../lib/ImageComponent";

const NewsCarousel = ({ carouselData, variation, lang = 'en' }) => {
  try {
    
    const {
      data: {
        hkexCarouselByPath: {
          item: {
            backgroundImage,
            carouselItems,
            title='',
            viewAllCtaLabel='',
            viewAllCtaLink='',
            description = "",
            subTitle='',
            _path
          },
        },
      },
    } = carouselData;

    const editorProps = {
      "data-aue-resource": `urn:aemconnection:${_path}/jcr:content/data/master`,
      "data-aue-type": "reference",
      "data-aue-filter": "cf",
      "data-aue-label": `${subTitle}`
    };

    // Brand color variable
    const brandColor = "#14436B";
    const variationColor = variation === 'text-blue'? brandColor : '#ffffff';
    return (
      <section className="relative w-full bg-gradient-to-b from-blue-100 to-blue-200 py-16" {...editorProps}>
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url("${backgroundImage}")`,
          }}
          data-aue-prop="backgroundImage"
          data-aue-type="media"
          data-aue-label="Background Image"
        ></div>

        <div className="relative">
          {/* Main Title */}
          <h2 
            className={`text-3xl md:text-6xl font-bold mb-4 container`} 
            style={{ color: variationColor }}
            data-aue-prop="title"
            data-aue-type="text"
            data-aue-label="Carousel Title"
          >
            {title} <span 
              className="font-light"
              data-aue-prop="subTitle"
              data-aue-type="text"
              data-aue-label="Carousel Subtitle"
            >{subTitle}</span>
          </h2>

          {/* Component Description */}
          <p 
            className={`text-sm md:text-xl mb-12 opacity-90 container`} 
            style={{ color: variationColor }}
            data-aue-prop="description"
            data-aue-type="richtext"
            data-aue-label="Carousel Description"
          >
            {description}
          </p>

          {/* Carousel Container */}
          <div className="relative">
            <Swiper
              modules={[Navigation]}
              spaceBetween={24}
              slidesPerView={1.2}
              slidesOffsetAfter={24}
              breakpoints={{
                320: {
                  slidesPerView: 1.2,
                  spaceBetween: 24,
                },
                768: {
                  slidesPerView: 2.2,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 3.8,
                  spaceBetween: 24,
                },
              }}
              navigation={{
                nextEl: `.swiper-button-next-custom${variation === 'text-blue'? '-var' : ''}`,
                prevEl: `.swiper-button-prev-custom${variation === 'text-blue'? '-var' : ''}`,
              }}
              className={`${styles.newsCarousel} pb-3 item-stretch`}
            >
              {carouselItems?.map((item, index) => {
                const {
                  _path,
                  cardDescription: { plaintext },
                  cardTitle,
                  cardType,
                  cradImage,
                  date,
                  learnMoreCtaLabel,
                  learnMoreCtaLink,
                } = item;
                
                const imageHtml = ImageComponent({
                  src: cradImage,
                  alt: '',
                  className: 'news-carousel-item-image object-cover aspect-[330/200] w-full h-full',
                  breakpoints: {
                    mobile: {
                      width: 768,
                      src: `${cradImage}:Desktop`,
                    },
                    tablet: {
                      width: 1024,
                      src: `${cradImage}:Desktop`,
                    },
                    desktop: {
                      width: 1920,
                      src: `${cradImage}:Desktop`,
                    },
                  },
                  lazy: true,
                });
                return (
                  <SwiperSlide key={`item.cardTitle-${index}`} className="h-auto">
                    <div
                      className="bg-white rounded-[30px] overflow-hidden h-full"
                      style={{ boxShadow: `0 4px 8px ${brandColor}` }}
                      data-aue-resource={`urn:aemconnection:${_path}/jcr:content/data/master`}
                      data-aue-type="reference"
                      data-aue-filter="cf"
                      data-aue-label="carousel-item"
                    >
                      {/* Image Section */}
                      <div className="relative bg-gray-200 mx-h-[200px]">
                        {/* <img
                          src={cradImage}
                          alt={cardTitle}
                          fill
                          className="object-cover aspect-[330/200] w-full h-full"
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          data-aue-prop="cradImage"
                          data-aue-type="media"
                          data-aue-label="Card Image"
                        /> */}
                        <div 
                          className="object-cover h-full w-full opacity-0.5"
                          data-aue-prop="cradImage" 
                          data-aue-type="media"
                          data-aue-label="Card Image"
                          dangerouslySetInnerHTML={{ __html: imageHtml }}
                        />
                        {/* Tags */}
                        <div className="absolute top-3 left-3 flex gap-2">
                          {cardType?.map((tag, index) => (
                            <span
                              key={index}
                              className="bg-white text-xs px-2 py-1 rounded-[22px] font-medium"
                              style={{ color: brandColor }}
                              data-aue-prop="cardType"
                              data-aue-type="text"
                              data-aue-label="Card Type"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-6 flex flex-col">
                        {/* Title */}
                        <h3
                          className={`text-base md:text-lg font-bold mb-3 ${styles.lineClamp2} pt-2`}
                          style={{ color: brandColor }}
                          data-aue-prop="cardTitle"
                          data-aue-type="text"
                          data-aue-label="Card Title"
                        >
                          {cardTitle}
                        </h3>

                        {/* Description */}
                        <p
                          className={`text-sm mb-4 flex-grow ${styles.lineClamp4}`}
                          style={{ color: brandColor }}
                          data-aue-prop="cardDescription"
                          data-aue-type="richtext"
                          data-aue-label="Card Description"
                        >
                          {plaintext}
                        </p>

                        {/* Bottom Section */}
                        <div className="mt-auto flex justify-between items-center">
                          {/* Date */}
                          <span
                            className="text-sm font-medium"
                            style={{ color: brandColor }}
                            data-aue-prop="date"
                            data-aue-type="text"
                            data-aue-label="Card Date"
                          >
                            {date}
                          </span>

                          {/* CTA Button */}
                          <a
                            href={learnMoreCtaLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white px-4 py-2 rounded-[22px] text-sm font-medium hover:bg-gray-50 transition-colors no-underline"
                            style={{
                              color: brandColor,
                              border: `1px solid ${brandColor}`,
                            }}
                            data-aue-prop="learnMoreCtaLabel"
                            data-aue-type="text"
                            data-aue-label="Learn More CTA"
                          >
                            {learnMoreCtaLabel}
                          </a>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            {/* Navigation Arrows and View All CTA Inline */}
            <div className="flex justify-between items-center mt-8 container">
              {viewAllCtaLabel && <a
                href={viewAllCtaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[30px] text-sm md:text-lg font-medium transition-colors no-underline"
                style={{
                  backgroundColor: brandColor,
                  color: "white",
                  border: `1px solid white`,
                  padding: "11px 23px",
                }}
                data-aue-prop="viewAllCtaLabel"
                data-aue-type="text"
                data-aue-label="View All CTA"
              >
                {viewAllCtaLabel}
              </a>}
              <div className="flex gap-3">
                <button
                  className={`swiper-button-prev-custom${variation === 'text-blue'? '-var' : ''} ${styles.swiperButtonPrev} border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors`}
                  style={{
                    width: "44px",
                    height: "44px",
                    backgroundColor: variationColor,
                  }}
                >
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke={`${variation === 'text-blue' ? '#ffffff' :'currentColor'}`}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  className={`swiper-button-next-custom${variation === 'text-blue'? '-var' : ''} ${styles.swiperButtonNext} border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors`}
                  style={{
                    width: "44px",
                    height: "44px",
                    backgroundColor: variationColor,
                  }}
                >
                  <svg
                    className={`w-5 h-5 text-gray-600`}
                    fill="none"
                    stroke={`${variation === 'text-blue' ? '#ffffff' :'currentColor'}`}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Error rendering news carousel:', error);
    return (
      <section className="relative w-full bg-gradient-to-b from-blue-100 to-blue-200 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Unable to load news carousel</h2>
            <p className="text-gray-600">Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }
};

export default NewsCarousel;
