// Server Component
import aemHeadlessClient from "../lib/aem-headless-client";
import FooterClient from "./FooterClient";

export default async function Footer({ cfPath, lang = 'en', aemClient = null }) {
  try {
    const client = aemClient || aemHeadlessClient;
    const res = await client.getData(
      "hkex-footer",
      `;cfPath=${cfPath}`
    );
    return <FooterClient footerData={res} lang={lang} />;
  } catch (error) {
    console.error('Error loading footer data:', error);
    return (
      <footer className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center">
            <p className="text-gray-600">©2016-25 Hong Kong Exchanges and Clearing Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
} 