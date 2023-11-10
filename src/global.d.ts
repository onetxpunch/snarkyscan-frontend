type SendTransactionArgs = {
  transaction: any;
  feePayer?: {
    fee?: number;
    memo?: string;
  };
};

type SignMessageArgs = {
  message: string;
};

type SignedData = {
  publicKey: string;
  data: string;
  signature: {
    field: string;
    scalar: string;
  };
};

type VerifyMessageArgs = {
  publicKey: string;
  payload: string;
  signature: {
    field: string;
    scalar: string;
  };
};

type SignFieldsArguments = {
  message: (string | number)[];
};

type SignedFieldsData = {
  data: (string | number)[];
  signature: string;
};

type VerifyFieldsArguments = {
  publicKey: string;
  payload: (string | number)[];
  signature: string;
};

interface Window {
  mina: {
    requestAccounts(): Promise<string[]>;
    requestNetwork(): Promise<"Mainnet" | "Devnet" | "Berkeley" | "Unknown">;
    getAccounts(): Promise<string[]>;
    sendTransaction(args: SendTransactionArgs): Promise<{ hash: string }>;
    signMessage(args: SignMessageArgs): Promise<SignedData>;
    verifyMessage(args: VerifyMessageArgs): Promise<boolean>;
    signFields(args: SignFieldsArguments): Promise<SignedFieldsData>;
    verifyFields(args: VerifyFieldsArguments): Promise<boolean>;
  };
}
