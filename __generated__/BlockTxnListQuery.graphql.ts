/**
 * @generated SignedSource<<ea6ed1bc30f6c04f90c13cd4f68c73aa>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type BlockTxnListQuery$variables = {
  blockHeight: number;
};
export type BlockTxnListQuery$data = {
  readonly transactions: ReadonlyArray<{
    readonly amount: number | null | undefined;
    readonly blockHeight: number | null | undefined;
    readonly canonical: boolean | null | undefined;
    readonly dateTime: any | null | undefined;
    readonly failureReason: string | null | undefined;
    readonly fee: number | null | undefined;
    readonly feePayer: {
      readonly token: number | null | undefined;
    } | null | undefined;
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
    readonly to: string | null | undefined;
    readonly toAccount: {
      readonly token: number | null | undefined;
    } | null | undefined;
    readonly token: number | null | undefined;
  } | null | undefined>;
};
export type BlockTxnListQuery = {
  response: BlockTxnListQuery$data;
  variables: BlockTxnListQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "blockHeight"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "token",
  "storageKey": null
},
v2 = [
  (v1/*: any*/)
],
v3 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "blockHeight",
            "variableName": "blockHeight"
          },
          {
            "kind": "Literal",
            "name": "canonical",
            "value": true
          }
        ],
        "kind": "ObjectValue",
        "name": "query"
      },
      {
        "kind": "Literal",
        "name": "sortBy",
        "value": "DATETIME_DESC"
      }
    ],
    "concreteType": "Transaction",
    "kind": "LinkedField",
    "name": "transactions",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "amount",
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
        "kind": "ScalarField",
        "name": "canonical",
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
        "name": "isDelegation",
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
        "selections": (v2/*: any*/),
        "storageKey": null
      },
      (v1/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "TransactionFromAccount",
        "kind": "LinkedField",
        "name": "fromAccount",
        "plural": false,
        "selections": (v2/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "TransactionFeePayer",
        "kind": "LinkedField",
        "name": "feePayer",
        "plural": false,
        "selections": (v2/*: any*/),
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
    "name": "BlockTxnListQuery",
    "selections": (v3/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "BlockTxnListQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "1a96682c65cd6747ff06a8c29b94b3a5",
    "id": null,
    "metadata": {},
    "name": "BlockTxnListQuery",
    "operationKind": "query",
    "text": "query BlockTxnListQuery(\n  $blockHeight: Int!\n) {\n  transactions(query: {blockHeight: $blockHeight, canonical: true}, sortBy: DATETIME_DESC) {\n    amount\n    blockHeight\n    canonical\n    dateTime\n    failureReason\n    fee\n    feeToken\n    from\n    hash\n    id\n    isDelegation\n    kind\n    memo\n    nonce\n    to\n    toAccount {\n      token\n    }\n    token\n    fromAccount {\n      token\n    }\n    feePayer {\n      token\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "0dfbb86ae6a2f26f967962f7787fca55";

export default node;
