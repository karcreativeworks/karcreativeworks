export const APP_TITLE = "KarCreativeWorks";
export const APP_TITLE_HEADER = "KarCreativeWorks";
export const IN_DEV_ENV = process && process.env.NODE_ENV === "development";

export const FRONTEND_BASE_URL = IN_DEV_ENV
  ? "http://localhost:3000"
  : process.env.NEXT_PUBLIC_FRONTEND_URL;
export const API_BASE_URL = IN_DEV_ENV
  ? "http://localhost:3000/api"
  : `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api`;

export const GS_CLIENT_ID = process.env.NEXT_PUBLIC_GS_CLIENT_ID;
