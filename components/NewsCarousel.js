// app/page.tsx (Server Component)
import aemHeadlessClient from "../lib/aem-headless-client";
import NewsCarousel from "./NewsCarouselClient";

export default async function Page() {
  const res = await aemHeadlessClient.getData(
    "hkex-carousel",
    ";cfPath=/content/dam/my-project/en/hkex-carousel"
  );
  return <NewsCarousel carouselData={res} />;
}
