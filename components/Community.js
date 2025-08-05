// app/page.tsx (Server Component)
import aemHeadlessClient from "../lib/aem-headless-client";
import Community from "./CommunityClient";

export default async function Page({cfPath}) {
  const res = await aemHeadlessClient.getData(
    "hkex-featurebanner",
    `;cfPath=${cfPath}`
  );
  // console.log("Community data:", res?.data);
  return <Community communityData={res}/>;
}
