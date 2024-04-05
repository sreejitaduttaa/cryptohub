import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
  "X-RapidAPI-Key": "2a949736famshed98e9ab543b473p1a70fdjsnf5722519a388",
  "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
};
const baseUrl = "https://coingecko.p.rapidapi.com";

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
