// app/page.tsx (Server Component)
import aemHeadlessClient from "../lib/aem-headless-client";
import Header from "../components/PageHeaderClient";

export default async function Page({cfPath}) {
  const res = await aemHeadlessClient.getData(
    "hkex-header",
    `;cfPath=${cfPath}`
  );

  return <Header Data={res?.data}/>;
}
