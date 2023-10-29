/**
 * @generated SignedSource<<790e00e9cc3aa42f75f29b18a7b088c6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ListQuery$variables = Record<PropertyKey, never>;
export type ListQuery$data = {
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
    readonly txFees: any | null | undefined;
    readonly winnerAccount: {
      readonly publicKey: string | null | undefined;
    } | null | undefined;
  } | null | undefined>;
};
export type ListQuery = {
  response: ListQuery$data;
  variables: ListQuery$variables;
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
      }
    ],
    "storageKey": "blocks(query:{\"canonical\":true},sortBy:\"BLOCKHEIGHT_DESC\")"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ListQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ListQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "0c90a6920d6c2a2fe978f63803b8ab4f",
    "id": null,
    "metadata": {},
    "name": "ListQuery",
    "operationKind": "query",
    "text": "query ListQuery {\n  blocks(sortBy: BLOCKHEIGHT_DESC, query: {canonical: true}) {\n    snarkFees\n    blockHeight\n    creatorAccount {\n      publicKey\n    }\n    dateTime\n    canonical\n    creator\n    receivedTime\n    stateHash\n    stateHashField\n    txFees\n    winnerAccount {\n      publicKey\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "be7655fa27640a36b591063efd6a9c3d";

export default node;
