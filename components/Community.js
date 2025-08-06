// app/page.tsx (Server Component)
import aemHeadlessClient from "../lib/aem-headless-client";
import Community from "./CommunityClient";

export default async function Page({cfPath, lang = 'en', gradient}) {
  try {
    const res = await aemHeadlessClient.getData(
      "hkex-featurebanner",
      `;cfPath=${cfPath}`
    );
    // console.log("Community data:", res?.data);
    return <Community communityData={res} lang={lang} gradient={gradient}/>;
  } catch (error) {
    console.error('Error loading community data:', error);
    return (
      <section className="relative overflow-hidden flex items-center justify-center bg-gray-900 text-white p-5" style={{ maxHeight: '380px' }}>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Unable to load community section</h2>
          <p className="text-gray-300">Please try again later.</p>
        </div>
      </section>
    );
  }
}
