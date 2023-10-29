/**
 * @generated SignedSource<<5591c142d3f73dbe344cb9f4fba4619a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type BlockQuery$variables = {
  blockHeight: number;
};
export type BlockQuery$data = {
  readonly block: {
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
  } | null | undefined;
};
export type BlockQuery = {
  response: BlockQuery$data;
  variables: BlockQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "blockHeight"
  }
],
v1 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "publicKey",
    "storageKey": null
  }
],
v2 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "blockHeight",
            "variableName": "blockHeight"
          }
        ],
        "kind": "ObjectValue",
        "name": "query"
      }
    ],
    "concreteType": "Block",
    "kind": "LinkedField",
    "name": "block",
    "plural": false,
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
        "selections": (v1/*: any*/),
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
        "selections": (v1/*: any*/),
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "BlockQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "BlockQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "e19fffab2b36ca49e21d41b6229c5c9f",
    "id": null,
    "metadata": {},
    "name": "BlockQuery",
    "operationKind": "query",
    "text": "query BlockQuery(\n  $blockHeight: Int!\n) {\n  block(query: {blockHeight: $blockHeight}) {\n    snarkFees\n    blockHeight\n    creatorAccount {\n      publicKey\n    }\n    dateTime\n    canonical\n    creator\n    receivedTime\n    stateHash\n    stateHashField\n    txFees\n    winnerAccount {\n      publicKey\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "3879d9839707429e7493eb5170348761";

export default node;
