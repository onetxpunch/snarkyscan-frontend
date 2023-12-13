import { VscGraph } from "@react-icons/all-files/vsc/VscGraph";
import { CoinGeckoClient } from "coingecko-api-v3";
import { graphql } from "relay-runtime";
import { useLazyLoadQuery } from "react-relay";
import { OverviewQuery as OverviewQueryT } from "../../../__generated__/OverviewQuery.graphql";
import { Suspense, useState } from "react";
import { useEffect } from "react";
import { VscGlobe } from "@react-icons/all-files/vsc/VscGlobe";
import { VscCreditCard } from "@react-icons/all-files/vsc/VscCreditCard";
import { formatUSD, formatNum } from "@/ts/utils";

const OverviewQuery = graphql`
  query OverviewQuery {
    blocks(sortBy: BLOCKHEIGHT_DESC, query: { canonical: true }, limit: 10) {
      snarkFees
      blockHeight
      creatorAccount {
        publicKey
      }
      dateTime
      canonical
      creator
      receivedTime
      stateHash
      stateHashField
      txFees
      winnerAccount {
        publicKey
      }
      transactions {
        feeTransfer {
          fee
        }
      }
    }
  }
`;

const PriceLine = ({ lastPrice, minaToEth, priceChange }) => {
  return (
    <div>
      <Suspense fallback={<>000</>}>{lastPrice}</Suspense>{" "}
      <span className="text-gray-600">
        @{" "}
        {new Intl.NumberFormat("en-US", {
          minimumFractionDigits: 6,
        }).format(minaToEth)}
        {" ETH "}
      </span>
      <span
        className={`${priceChange > 0 ? "text-green-400" : "text-red-400"}`}
      >
        (
        {new Intl.NumberFormat("en-US", {
          minimumFractionDigits: 3,
          style: "percent",
        }).format(priceChange / 100)}
        )
      </span>
    </div>
  );
};

const Overview = ({ price }: { price? }) => {
  // src/pages/index.tsx#ssr props
  const minaUsd = price["mina-protocol"].usd;
  const ethUsd = price["ethereum"].usd;
  const [lastPrice, setLastPrice] = useState<string>(formatUSD(minaUsd));
  const [marketCap, setMarketCap] = useState<string>(
    formatUSD(price["mina-protocol"].usd_market_cap)
  );
  const [medianFee, setMedianFee] = useState<number>();
  const data = useLazyLoadQuery<OverviewQueryT>(OverviewQuery, {});

  const fetchPriceInfo = async () => {
    const client = new CoinGeckoClient({
      timeout: 10000,
      autoRetry: true,
    });

    const price = await client.simplePrice({
      ids: ["mina-protocol", "ethereum"].join(","),
      vs_currencies: "usd",
      include_market_cap: true,
    });
    setLastPrice(formatUSD(price["mina-protocol"].usd));
    setMarketCap(formatUSD(price["mina-protocol"].usd_market_cap));
  };

  useEffect(() => {
    if (!lastPrice && !price) fetchPriceInfo();
  }, [lastPrice, price]);

  useEffect(() => {
    if (data) {
      const feeArray = data.blocks
        .filter((x) => x?.transactions)
        .flatMap((x) => {
          return Number(x?.txFees);
        })
        .filter((x) => isNaN(x));
      const meanFee = (arr) =>
        feeArray.reduce((a, b) => a + b, 0) / feeArray.length;
      setMedianFee(meanFee);
    }
  }, [data]);

  return (
    <div className="flex flex-col gap-4">
      <div className="text-xl font-semibold">Market Overview</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-4 my-4 shadow-xl rounded-xl  bg-gradient-to-tl from-emerald-50 to-white bg-slate-100  border-[1px] border-emerald-950">
        <div className="flex items-center gap-2">
          <img
            alt="mina logo"
            src="/mina-logo.png"
            className="w-8 h-8 rounded-full text-slate-800"
          />
          <div className="flex flex-col">
            <div className="text-xs uppercase text-slate-600"> Mina price</div>
            <PriceLine
              lastPrice={lastPrice}
              minaToEth={minaUsd / ethUsd}
              priceChange={price["mina-protocol"]?.usd_24h_change}
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <VscGlobe className="w-8 h-8 text-slate-800" />
          <div className="flex flex-col">
            <div className="text-xs uppercase text-slate-600">Market cap</div>
            <div>
              <Suspense fallback={<>000</>}>{marketCap}</Suspense>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <VscGraph className="w-8 h-8 text-slate-800" />
          <div className="flex flex-col">
            <div className="text-xs uppercase text-slate-600">
              Med gas price
            </div>
            <div>
              <Suspense fallback={<>000</>}>
                {medianFee ? medianFee / 10 ** 9 : "..."} MINA
              </Suspense>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <VscCreditCard className="w-8 h-8 text-slate-800" />
          <div className="flex flex-col">
            <div className="text-sm uppercase text-slate-600">
              Last finalized block
            </div>
            <div>
              <Suspense fallback={<>000</>}>
                {formatNum(data?.blocks[0]?.blockHeight)}
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
