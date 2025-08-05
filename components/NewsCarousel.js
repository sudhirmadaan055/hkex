// app/page.tsx (Server Component)
import aemHeadlessClient from "../lib/aem-headless-client";
import NewsCarousel from "./NewsCarouselClient";

export default async function Page({cfPath, variation = '', lang = 'en'}) {
  try {
    const res = await aemHeadlessClient.getData(
      "hkex-carousel",
      `;cfPath=${cfPath}`
    );
    return <NewsCarousel carouselData={res} variation={variation} lang={lang}/>;
  } catch (error) {
    console.error('Error loading news carousel data:', error);
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
}
