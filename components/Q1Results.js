import aemHeadlessClient from "../lib/aem-headless-client";

const Q1Results = async () => {
  const res = await aemHeadlessClient.getData(
    "hkex-resultbanner",
    ";cfPath=/content/dam/my-project/en/hkex-q1-result"
  );
  const {
    data: {
      hkexResultBannerByPath: { item },
    },
  } = res;
  console.log(res);
  return (
    <div
      className="Q1-result min-h-screen flex items-center justify-center py-10 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url(/market.jpg)" }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-900/60 to-transparent"></div>

      <div className="container w-full mx-auto px-8 relative z-10 d-flex justify-between">
        {/* Left Section - Text Content */}
        <div className="text-white pr-8 w-full" style={{ maxWidth: "738px" }}>
          <h1 className="text-5xl lg:text-6xl font-thin leading-tight mb-8">
            {/* Latest <span className="font-bold">2025 Q1</span> Result. */}
            {(() => {
              const words = item?.title?.split(" ") || [];
              const firstWord = words[0] || "";
              // const lastWord = words.length > 1 ? words[words.length - 1] : "";
              const middleWords = words.slice(1).join(" ");

              return (
                <>
                   <span className="font-bold">{firstWord}</span>{' '}<span className="font-thin">{middleWords}</span>
                </>
              );
            })()}
          </h1>

          <div className="space-y-6">
            <p className="font-light leading-5 text-lg ">
              <div dangerouslySetInnerHTML={{ __html: item?.description?.html }} />
            </p>
            {/* <p className="font-light leading-5 text-lg ">
              HKEX has had a strong start to 2025, delivering record Q1 results.
              Global interest in China continues to grow, driven by AI and
              innovation, with increased Mainland Chinese investor
              participation. We achieved record volumes in our Cash and
              Derivatives Markets, with trading turnover exceeding $300 billion
              on 16 days, and solid growth in commodities with LME trading
              volumes at an 11-year high.
            </p>

            <p className="font-light leading-5 text-lg ">
              Hong Kong's capital raising activity remains robust, ranking among
              the world's top five IPO venues. Since April 2021, we have
              welcomed two large follow-on offerings and maintain a strong
              pipeline of 120 listing applications.
            </p>

            <p className=" font-light leading-5 text-lg ">
              Our strategic initiatives for 2025 include a new partnership with
              CMU OmniClear, product launches to enhance market vibrancy and
              liquidity, and expansion of our international network of
              recognized stock exchanges.
            </p>

            <p className="font-light leading-5  text-lg ">
              Looking ahead to 2025 and beyond, we will continue to leverage our
              China advantage, expand global connectivity, and enhance our
              channels, platforms, and products to remain resilient against
              macro volatility.
            </p> */}
          </div>

          <div className="font-bold leading-5 text-right mt-8 text-base">Bonnie Y Chan, CEO</div>
        </div>

        {/* Right Section - Financial Figures & CTA */}
        <div className="relative h-full mt-auto flex items-center justify-center" style={{ maxWidth: "300px" }}>
          <div>
            {/* <div className="text-gray-300 text-sm font-medium mb-6">
              HKEX 香港交易所
            </div> */}

            <div className="space-y-6">
              <div>
                <div className="text-2xl font-bold text-white mb-1">
                  HK$6.9 Billion
                </div>
                <div className="text-lg text-white leading-5">
                  Revenue and other income up 32 per cent against Q1 2024.
                </div>
              </div>

              <div>
                <div className="text-2xl font-bold text-white mb-1">
                  HK$4.1 Billion
                </div>
                <div className="text-lg text-white leading-5">
                  Profit attributable to shareholders up 37 per cent against Q1
                  2024.
                </div>
              </div>

              <div>
                <div className="text-2xl font-bold text-white mb-1">
                  HK$3.23
                </div>
                <div className="text-lg text-white leading-5">
                  Basic earnings per share up 37 per cent against Q1 2024.
                </div>
              </div>
            </div>

            <div className="h-0.5 bg-red-600 my-6 w-full"></div>

            <button className="bg-red-600 hover:bg-red-700 text-white border-none py-2 px-6 rounded-xl text-sm font-medium cursor-pointer transition-colors duration-300" style={{ borderRadius: '22px' }}>
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Q1Results;
