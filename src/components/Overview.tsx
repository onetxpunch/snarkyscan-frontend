import { CoinGeckoClient } from "coingecko-api-v3";
import { graphql } from "relay-runtime";
import { useLazyLoadQuery } from "react-relay";
import { OverviewQuery as OverviewQueryT } from "../../__generated__/OverviewQuery.graphql";
import { Suspense, useState } from "react";
import { useEffect } from "react";
import { VscGlobe } from "@react-icons/all-files/vsc/VscGlobe";
import { VscCreditCard } from "@react-icons/all-files/vsc/VscCreditCard";
import { formatUSD, formatNum } from "@/ts/utils";

const OverviewQuery = graphql`
  query OverviewQuery {
    blocks(sortBy: BLOCKHEIGHT_DESC, query: { canonical: true }, limit: 1) {
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
    }
  }
`;
const Overview = ({ price }: { price? }) => {
  const [lastPrice, setLastPrice] = useState<string>(
    formatUSD(price["mina-protocol"].usd)
  );
  const [marketCap, setMarketCap] = useState<string>(
    formatUSD(price["mina-protocol"].usd_market_cap)
  );
  const data = useLazyLoadQuery<OverviewQueryT>(OverviewQuery, {});

  const fetchPriceInfo = async () => {
    const client = new CoinGeckoClient({
      timeout: 10000,
      autoRetry: true,
    });

    const price = await client.simplePrice({
      ids: "mina-protocol",
      vs_currencies: "usd",
      include_market_cap: true,
    });
    setLastPrice(formatUSD(price["mina-protocol"].usd));
    setMarketCap(formatUSD(price["mina-protocol"].usd_market_cap));
  };

  useEffect(() => {
    if (!lastPrice && !price) fetchPriceInfo();
  }, []);

  return (
    <div className="flex flex-col gap-5 p-4 my-4 shadow-xl rounded-xl bg-slate-100  border-[1px] border-emerald-400">
      <div className="flex items-center gap-2">
        <img
          alt="mina logo"
          src="/mina-logo.png"
          className="w-8 h-8 rounded-full text-slate-800"
        />
        <div className="flex flex-col">
          <div className="text-sm uppercase text-slate-600"> Mina price</div>
          <div>
            <Suspense fallback={<>000</>}>{lastPrice}</Suspense>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <VscGlobe className="w-8 h-8 text-slate-800" />
        <div className="flex flex-col">
          <div className="text-sm uppercase text-slate-600">Market cap</div>
          <div>
            <Suspense fallback={<>000</>}>{marketCap}</Suspense>
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
  );
};

export default Overview;
