import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  "X-RapidAPI-Key": "2a949736famshed98e9ab543b473p1a70fdjsnf5722519a388",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),

  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest('/coins')
    }),
  }),
});

export const {
    useGetCryptosQuery,
} = cryptoApi;


// const options = {
//   method: 'GET',
//   url: 'https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd',
//   params: {
//     referenceCurrencyUuid: 'yhjMzLPhuIDl',
//     timePeriod: '24h'
//   },
//   headers: {
//     'X-RapidAPI-Key': '2a949736famshed98e9ab543b473p1a70fdjsnf5722519a388',
//     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//   }
// };