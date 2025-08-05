// app/page.tsx (Server Component)
import aemHeadlessClient from "../lib/aem-headless-client";
import NewsCarousel from "./NewsCarouselClient";

export default async function Page({cfPath, variation = '', lang = 'en'}) {
  const res = await aemHeadlessClient.getData(
    "hkex-carousel",
    `;cfPath=${cfPath}`
  );
  return <NewsCarousel carouselData={res} variation={variation} lang={lang}/>;
}
