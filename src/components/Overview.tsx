import { CoinGeckoClient } from "coingecko-api-v3";
import { graphql } from "relay-runtime";
import { useLazyLoadQuery } from "react-relay";
import { OverviewQuery as OverviewQueryT } from "../../__generated__/OverviewQuery.graphql";
import { useState } from "react";
import { useEffect } from "react";

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
const Overview = () => {
  const [lastPrice, setLastPrice] = useState();
  const [marketCap, setMarketCap] = useState();
  const data = useLazyLoadQuery<OverviewQueryT>(OverviewQuery, {});

  const formatUSD = (amount) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);

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
    console.log(price);
    setLastPrice(price["mina-protocol"].usd);
    setMarketCap(price["mina-protocol"].usd_market_cap);
  };

  useEffect(() => {
    fetchPriceInfo();
  }, []);

  return (
    <div className="flex flex-col gap-3 p-4 my-4 shadow-xl rounded-xl bg-slate-200">
      <div>Mina price</div>
      <div>{formatUSD(lastPrice)}</div>
      <div>Market cap</div>
      <div>{formatUSD(marketCap)}</div>
      <div>Last finalized block</div>
      <div>{data.blocks[0].blockHeight}</div>
    </div>
  );
};

export default Overview;
