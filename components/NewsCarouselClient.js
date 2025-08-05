"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./NewsCarousel.module.css";

const NewsCarousel = ({ carouselData, variation, lang = 'en' }) => {
  try {
    const editorProps = {
      "data-aue-resource": `urn:aemconnection:/content/dam/my-project/${lang}/hkex-carousel/jcr:content/data/master`,
      "data-aue-type": "reference",
      "data-aue-filter": "cf"
    };
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
            subTitle=''
          },
        },
      },
    } = carouselData;
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
        ></div>

        <div className="relative">
          {/* Main Title */}
          <h2 className={`text-3xl md:text-6xl font-bold mb-4 container`} style={{ color: variationColor }}>
            {title} <span className="font-light">{subTitle}</span>
          </h2>

          {/* Component Description */}
          <p className={`text-sm md:text-xl mb-12 opacity-90 container`} style={{ color: variationColor }}>
            {description}
          </p>

          {/* Carousel Container */}
          <div className="relative">
            <Swiper
              modules={[Navigation]}
              spaceBetween={24}
              slidesPerView={1.2}
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
              className={`${styles.newsCarousel} pb-3`}
            >
              {carouselItems?.map((item, index) => {
                const {
                  cardDescription: { plaintext },
                  cardTitle,
                  cardType,
                  cradImage,
                  date,
                  learnMoreCtaLabel,
                  learnMoreCtaLink,
                } = item;
                return (
                  <SwiperSlide key={`item.cardTitle-${index}`}>
                    <div
                      className="bg-white rounded-[30px] overflow-hidden h-full"
                      style={{ boxShadow: `0 4px 8px ${brandColor}` }}
                    >
                      {/* Image Section */}
                      <div className="relative bg-gray-200">
                        <img
                          src={cradImage}
                          alt={cardTitle}
                          fill
                          className="object-cover aspect-[330/200]"
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        />
                        {/* Tags */}
                        <div className="absolute top-3 left-3 flex gap-2">
                          {cardType?.map((tag, index) => (
                            <span
                              key={index}
                              className="bg-white text-xs px-2 py-1 rounded-[22px] font-medium"
                              style={{ color: brandColor }}
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
                        >
                          {cardTitle}
                        </h3>

                        {/* Description */}
                        <p
                          className={`text-sm mb-4 flex-grow ${styles.lineClamp4}`}
                          style={{ color: brandColor }}
                        >
                          {plaintext}
                        </p>

                        {/* Bottom Section */}
                        <div className="mt-auto flex justify-between items-center">
                          {/* Date */}
                          <span
                            className="text-sm font-medium"
                            style={{ color: brandColor }}
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
