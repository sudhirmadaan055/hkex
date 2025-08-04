"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import styles from "./NewsCarousel.module.css";

const NewsCarousel = () => {
  // Brand color variable
  const brandColor = "#14436B";

  const newsData = {
    backgroundImage: "/carousel-backgrond.png",
    title: "Latest HKEX News Releases",
    description:
      "Stay updated with the latest news, announcements, and important updates from Hong Kong Exchanges and Clearing Limited.",
    viewAllText: "View all",
    viewAllUrl: "/news",
    items: [
      {
        id: 1,
        image: "/item-image.png",
        tags: ["News", "PDF"],
        title: "HKEX Celebrates 25 Years of Progress and Market Vibrancy",
        description:
          "From a local exchange to a global capital-raising marketplace, Hong Kong Exchanges and Clearing Limited (HKEX) is pleased to celebrate 25 years of connecting capital with opportunity—making a silver jubilee of innovation, resilience, vibrancy and growth.",
        date: "20 Jun 2025",
        cta: "Learn more",
        ctaUrl: "/news/hkex-25-years",
      },
      {
        id: 2,
        image: "/item-image.png",
        tags: ["News"],
        title:
          "HKEX Welcomes Government's Re-Appointments to HKEX Risk Management Committee (Statutory)",
        description:
          "Hong Kong Exchanges and Clearing Limited (HKEX) welcomes the Hong Kong Government's re-appointments of Miranda Kwok and Sun Yu to its Risk Management Committee (statutory) (RMC).",
        date: "20 Jun 2025",
        cta: "Learn more",
        ctaUrl: "/news/risk-management-committee",
      },
      {
        id: 3,
        image: "/item-image.png",
        tags: ["PDF"],
        title: "New Articles of Association Approved",
        description:
          "From a local exchange to a global capital-raising marketplace, Hong Kong Exchanges and Clearing Limited (HKEX) is pleased to celebrate 25 years of connecting capital with opportunity—making a silver jubilee of innovation, resilience, vibrancy and growth.",
        date: "19 May 2025",
        cta: "Learn more",
        ctaUrl: "/news/articles-association",
      },
      {
        id: 4,
        image: "/item-image.png",
        tags: ["News"],
        title: "HKEX Appoints Group Chief Financial Officer",
        description:
          "Hong Kong Exchanges and Clearing Limited (HKEX) is pleased to announce today Monday the appointment of Mr Herbert Hui as Group Chief Financial Officer.",
        date: "19 May 2025",
        cta: "Learn more",
        ctaUrl: "/news/cfo-appointment",
      },
      {
        id: 5,
        image: "/item-image.png",
        tags: ["News"],
        title: "HKEX Appoints Group Chief Financial Officer",
        description:
          "Hong Kong Exchanges and Clearing Limited (HKEX) is pleased to announce today Monday the appointment of Mr Herbert Hui as Group Chief Financial Officer.",
        date: "19 May 2025",
        cta: "Learn more",
        ctaUrl: "/news/cfo-appointment",
      },
    ],
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-blue-100 to-blue-200 py-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url("${newsData.backgroundImage}")`,
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Main Title */}
        <h2 className="text-3xl md:text-6xl font-bold text-white mb-4">
          {newsData.title}
        </h2>

        {/* Component Description */}
        <p className="text-white text-sm md:text-xl mb-12 opacity-90">
          {newsData.description}
        </p>

        {/* Carousel Container */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1.5}
            breakpoints={{
              640: {
                slidesPerView: 2.5,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 3.8,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3.8,
                spaceBetween: 24,
              },
            }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            className={`${styles.newsCarousel} pb-5`}
          >
            {newsData.items.map((item) => (
              <SwiperSlide key={item.id}>
                <div
                  className="bg-white rounded-[30px] overflow-hidden h-full"
                  style={{ boxShadow: `0 4px 8px ${brandColor}` }}
                >
                  {/* Image Section */}
                  <div className="relative h-48 bg-gray-200">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    {/* Tags */}
                    <div className="absolute top-3 left-3 flex gap-2">
                      {item.tags.map((tag, index) => (
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
                  <div className="p-6 flex flex-col h-64">
                    {/* Title */}
                    <h3
                      className={`text-base md:text-lg font-bold mb-3 ${styles.lineClamp2}`}
                      style={{ color: brandColor }}
                    >
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p
                      className={`text-sm mb-4 flex-grow ${styles.lineClamp4}`}
                      style={{ color: brandColor }}
                    >
                      {item.description}
                    </p>

                    {/* Bottom Section */}
                    <div className="mt-auto flex justify-between items-center">
                      {/* Date */}
                      <span
                        className="text-sm font-medium"
                        style={{ color: brandColor }}
                      >
                        {item.date}
                      </span>

                      {/* CTA Button */}
                      <a
                        href={item.ctaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white px-4 py-2 rounded-[22px] text-sm font-medium hover:bg-gray-50 transition-colors no-underline"
                        style={{
                          color: brandColor,
                          border: `1px solid ${brandColor}`,
                        }}
                      >
                        {item.cta}
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows and View All CTA Inline */}
          <div className="flex justify-between items-center mt-8">
            <a
              href={newsData.viewAllUrl}
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
              {newsData.viewAllText}
            </a>
            <div className="flex gap-3">
              <button
                className={`swiper-button-prev-custom ${styles.swiperButtonPrev} border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors`}
                style={{
                  width: "44px",
                  height: "44px",
                  backgroundColor: "white",
                }}
              >
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
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
                className={`swiper-button-next-custom ${styles.swiperButtonNext} border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors`}
                style={{
                  width: "44px",
                  height: "44px",
                  backgroundColor: "white",
                }}
              >
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
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
};

export default NewsCarousel;
