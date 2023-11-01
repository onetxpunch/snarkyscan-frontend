/**
 * @generated SignedSource<<77f1d1418bcf377e5af86620e8749adc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type TxQuery$variables = {
  hash: string;
};
export type TxQuery$data = {
  readonly latest: ReadonlyArray<{
    readonly blockHeight: number | null | undefined;
    readonly canonical: boolean | null | undefined;
    readonly creator: string | null | undefined;
    readonly creatorAccount: {
      readonly publicKey: string | null | undefined;
    } | null | undefined;
    readonly dateTime: any | null | undefined;
    readonly receivedTime: any | null | undefined;
    readonly snarkFees: any | null | undefined;
    readonly stateHash: string | null | undefined;
    readonly stateHashField: string | null | undefined;
    readonly txFees: any | null | undefined;
    readonly winnerAccount: {
      readonly publicKey: string | null | undefined;
    } | null | undefined;
  } | null | undefined>;
  readonly transaction: {
    readonly amount: number | null | undefined;
    readonly blockHeight: number | null | undefined;
    readonly canonical: boolean | null | undefined;
    readonly dateTime: any | null | undefined;
    readonly failureReason: string | null | undefined;
    readonly fee: number | null | undefined;
    readonly feeToken: number | null | undefined;
    readonly from: string | null | undefined;
    readonly fromAccount: {
      readonly token: number | null | undefined;
    } | null | undefined;
    readonly hash: string | null | undefined;
    readonly id: string | null | undefined;
    readonly isDelegation: boolean | null | undefined;
    readonly kind: string | null | undefined;
    readonly memo: string | null | undefined;
    readonly nonce: number | null | undefined;
    readonly receiver: {
      readonly publicKey: string | null | undefined;
    } | null | undefined;
    readonly source: {
      readonly publicKey: string | null | undefined;
    } | null | undefined;
    readonly to: string | null | undefined;
    readonly toAccount: {
      readonly token: number | null | undefined;
    } | null | undefined;
    readonly token: number | null | undefined;
  } | null | undefined;
};
export type TxQuery = {
  response: TxQuery$data;
  variables: TxQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "hash"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "canonical",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "dateTime",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "token",
  "storageKey": null
},
v4 = [
  (v3/*: any*/)
],
v5 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "publicKey",
    "storageKey": null
  }
],
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "blockHeight",
  "storageKey": null
},
v7 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Literal",
            "name": "canonical",
            "value": true
          },
          {
            "kind": "Variable",
            "name": "hash",
            "variableName": "hash"
          }
        ],
        "kind": "ObjectValue",
        "name": "query"
      }
    ],
    "concreteType": "Transaction",
    "kind": "LinkedField",
    "name": "transaction",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "amount",
        "storageKey": null
      },
      (v1/*: any*/),
      (v2/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "failureReason",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "fee",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "feeToken",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "TransactionFromAccount",
        "kind": "LinkedField",
        "name": "fromAccount",
        "plural": false,
        "selections": (v4/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "from",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "hash",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "kind",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "isDelegation",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "memo",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "nonce",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "TransactionReceiver",
        "kind": "LinkedField",
        "name": "receiver",
        "plural": false,
        "selections": (v5/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "TransactionSource",
        "kind": "LinkedField",
        "name": "source",
        "plural": false,
        "selections": (v5/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "to",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "TransactionToAccount",
        "kind": "LinkedField",
        "name": "toAccount",
        "plural": false,
        "selections": (v4/*: any*/),
        "storageKey": null
      },
      (v3/*: any*/),
      (v6/*: any*/)
    ],
    "storageKey": null
  },
  {
    "alias": "latest",
    "args": [
      {
        "kind": "Literal",
        "name": "limit",
        "value": 1
      },
      {
        "kind": "Literal",
        "name": "query",
        "value": {
          "canonical": true
        }
      },
      {
        "kind": "Literal",
        "name": "sortBy",
        "value": "BLOCKHEIGHT_DESC"
      }
    ],
    "concreteType": "Block",
    "kind": "LinkedField",
    "name": "blocks",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "snarkFees",
        "storageKey": null
      },
      (v6/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "BlockCreatorAccount",
        "kind": "LinkedField",
        "name": "creatorAccount",
        "plural": false,
        "selections": (v5/*: any*/),
        "storageKey": null
      },
      (v2/*: any*/),
      (v1/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "creator",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "receivedTime",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "stateHash",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "stateHashField",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "txFees",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "BlockWinnerAccount",
        "kind": "LinkedField",
        "name": "winnerAccount",
        "plural": false,
        "selections": (v5/*: any*/),
        "storageKey": null
      }
    ],
    "storageKey": "blocks(limit:1,query:{\"canonical\":true},sortBy:\"BLOCKHEIGHT_DESC\")"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TxQuery",
    "selections": (v7/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TxQuery",
    "selections": (v7/*: any*/)
  },
  "params": {
    "cacheID": "67ab6fb6464d70e4942489fe31cefed8",
    "id": null,
    "metadata": {},
    "name": "TxQuery",
    "operationKind": "query",
    "text": "query TxQuery(\n  $hash: String!\n) {\n  transaction(query: {hash: $hash, canonical: true}) {\n    amount\n    canonical\n    dateTime\n    failureReason\n    fee\n    feeToken\n    fromAccount {\n      token\n    }\n    from\n    hash\n    id\n    kind\n    isDelegation\n    memo\n    nonce\n    receiver {\n      publicKey\n    }\n    source {\n      publicKey\n    }\n    to\n    toAccount {\n      token\n    }\n    token\n    blockHeight\n  }\n  latest: blocks(sortBy: BLOCKHEIGHT_DESC, query: {canonical: true}, limit: 1) {\n    snarkFees\n    blockHeight\n    creatorAccount {\n      publicKey\n    }\n    dateTime\n    canonical\n    creator\n    receivedTime\n    stateHash\n    stateHashField\n    txFees\n    winnerAccount {\n      publicKey\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "6b738c9d74599a3fd918a8b6a2a1b083";

export default node;
