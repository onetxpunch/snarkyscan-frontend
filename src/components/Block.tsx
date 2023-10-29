import { graphql } from "relay-runtime";
import { useLazyLoadQuery } from "react-relay";

const BlockQuery = graphql`
  query BlockQuery($blockHeight: Int!) {
    block(query: { blockHeight: $blockHeight }) {
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

const Block = ({ blockHeight }: { blockHeight: number }) => {
  const { block } = useLazyLoadQuery<any>(BlockQuery, { blockHeight });
  return (
    <div>
      <h2>Block #{block.blockHeight}</h2>
      <div>
        Status: <span>Finalized</span>
      </div>
      <div>
        Timestamp: <span>{block.dateTime}</span>
      </div>
      <div>
        Fee Recipient: <span>{block.winnerAccount.publicKey}</span>
      </div>
      <div>
        Size: <span>{block.stateHashField}</span> bytes
      </div>
      <div>
        Gas Used: <span>{block.txFees}</span>
      </div>
      <div>
        Gas Limit: <span>{block.snarkFees}</span>
      </div>
      <div>
        Base Fee Per Gas: <span>{block.txFees}</span>
      </div>
      <div>
        Burnt Fees: <span>{block.snarkFees}</span>
      </div>
    </div>
  );
};

export default Block;
