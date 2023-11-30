/**
 * @generated SignedSource<<b28d0e9d6de600b851bc9ccd1a756657>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type OverviewQuery$variables = Record<PropertyKey, never>;
export type OverviewQuery$data = {
  readonly blocks: ReadonlyArray<{
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
    readonly transactions: {
      readonly feeTransfer: ReadonlyArray<{
        readonly fee: any | null | undefined;
      } | null | undefined> | null | undefined;
    } | null | undefined;
    readonly txFees: any | null | undefined;
    readonly winnerAccount: {
      readonly publicKey: string | null | undefined;
    } | null | undefined;
  } | null | undefined>;
};
export type OverviewQuery = {
  response: OverviewQuery$data;
  variables: OverviewQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "publicKey",
    "storageKey": null
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "limit",
        "value": 10
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
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "blockHeight",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "BlockCreatorAccount",
        "kind": "LinkedField",
        "name": "creatorAccount",
        "plural": false,
        "selections": (v0/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "dateTime",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "canonical",
        "storageKey": null
      },
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
        "selections": (v0/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "BlockTransaction",
        "kind": "LinkedField",
        "name": "transactions",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "BlockTransactionFeeTransfer",
            "kind": "LinkedField",
            "name": "feeTransfer",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "fee",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": "blocks(limit:10,query:{\"canonical\":true},sortBy:\"BLOCKHEIGHT_DESC\")"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "OverviewQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "OverviewQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "939ee775a837b28b723ce0a5b356772b",
    "id": null,
    "metadata": {},
    "name": "OverviewQuery",
    "operationKind": "query",
    "text": "query OverviewQuery {\n  blocks(sortBy: BLOCKHEIGHT_DESC, query: {canonical: true}, limit: 10) {\n    snarkFees\n    blockHeight\n    creatorAccount {\n      publicKey\n    }\n    dateTime\n    canonical\n    creator\n    receivedTime\n    stateHash\n    stateHashField\n    txFees\n    winnerAccount {\n      publicKey\n    }\n    transactions {\n      feeTransfer {\n        fee\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "c1a66f292ce2638d1e8653126d71ee69";

export default node;
