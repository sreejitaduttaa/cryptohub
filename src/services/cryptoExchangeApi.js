import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
  "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
  "X-RapidAPI-Host": process.env.REACT_APP_EXCHANGES_RAPIDAPI_HOST,
};
const baseUrl = process.env.REACT_APP_EXCHANGES_API_URL;

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoExchangeApi = createApi({
  reducerPath: "cryptoExchangeApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getCryptoExchange: builder.query({
      query: () => createRequest('/exchanges'),
    }),
  }),
});

export const { useGetCryptoExchangeQuery } = cryptoExchangeApi;
