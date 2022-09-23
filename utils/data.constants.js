export const APP_TITLE = "KarCreativeWorks";
export const APP_TITLE_HEADER = "KarCreativeWorks";

const forceTESTNET = false;
export const IN_DEV_ENV = process && process.env.NODE_ENV === "development";

export const MOLARIS_SERVER_URL = forceTESTNET
  ? process.env.NEXT_PUBLIC_MORALIS_TESTNET_URL
  : process.env.NEXT_PUBLIC_MORALIS_PROD_URL;

export const MOLARIS_APP_ID = forceTESTNET
  ? process.env.NEXT_PUBLIC_MORALIS_TESTNET_ID
  : process.env.NEXT_PUBLIC_MORALIS_PROD_ID;

export const FRONTEND_BASE_URL = IN_DEV_ENV
  ? "http://localhost:3000"
  : process.env.NEXT_PUBLIC_FRONTEND_URL;
export const API_BASE_URL = IN_DEV_ENV
  ? "http://localhost:3000/api"
  : process.env.NEXT_PUBLIC_API_BASE_URL;

export const GS_CLIENT_ID = process.env.NEXT_PUBLIC_GS_CLIENT_ID;
