// app/page.tsx (Server Component)
import aemHeadlessClient from "../lib/aem-headless-client";
import Header from "../components/PageHeaderClient";

export default async function Page({cfPath}) {
  try {
    const res = await aemHeadlessClient.getData(
      "hkex-header",
      `;cfPath=${cfPath}`
    );

    return <Header Data={res?.data}/>;
  } catch (error) {
    console.error('Error loading header data:', error);
    return (
      <nav className="navbar navbar-expand-lg p-4 navbar-light bg-black text-white sticky-top">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="text-white">
            <h4>HKEX</h4>
          </div>
          <div className="text-white">
            <p>Navigation temporarily unavailable</p>
          </div>
        </div>
      </nav>
    );
  }
}
