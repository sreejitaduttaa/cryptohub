import React from 'react'
import { useState } from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi.js';
import Loader from './Loader.jsx';

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
  const [newsToken, setNewsToken] = useState('');
  const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery(newsToken);
  let tokenArray = ["ADA", "BCH", "BNB", "BTC", "DOGE", "DOT", "EOS", "ETC", "ETH", "FIL", "ICP", "LTC", "MATIC", "SOL", "THETA", "TRX", "VET", "XLM", "XMR", "XRP", "USDT"]


  if (isFetching) return <Loader/>;
  if (!cryptoNews?.news) return <Loader/>;
  console.log(cryptoNews)

  // const cryptoNews = {
  //   "result": {
  //     "response": "ok",
  //     "newsCount": 25
  //   },
  //   "news": [
  //     {
  //       "Title": "s Froganas leaps to top NFT sales with US$1.45 mln",
  //       "Source": "forkast.news",
  //       "Url": "https://forkast.news/solanas-froganas-leaps-to-top-nft-sales-with-us1-45-mln",
  //       "PublishedOn": "2024-04-05T16:50:26.000Z",
  //       "Description": "Solana's Froganas NFT collection sees a significant increase in sales, outperforming others in the past 24 hours.",
  //       "Language": "en",
  //       "Image": "https://forkast.news/wp-content/uploads/2023/10/NFT-cryptocurrency-peaks-and-bottoms.png",
  //       "SourceNationality": "hk",
  //       "TitleSentiment": {
  //         "sentiment": "positive",
  //         "score": 0.93
  //       },
  //       "Summary": "The collection also experienced a substantial rise in market activity, with transactions climbing by 24.95% to 3,701, snatching the top spot from Pandora, an Ethereum-based ERC-404 collection. NodeMonkes experienced a 10.74% fall in sales, amounting to US$1.04 million, and an 18.92% reduction in transactions.",
  //       "Countries": [],
  //       "CryptoCurrencies": [
  //         "Bitcoin",
  //         "Ethereum"
  //       ]
  //     },
  //     {
  //       "Title": "GAM3S.GG and Immutable Partner to Expand Web3 Gaming Ecosystem and Foster Future Growth",
  //       "Source": "prnewswire.com",
  //       "Url": "https://www.prnewswire.com/news-releases/gam3sgg-and-immutable-partner-to-expand-web3-gaming-ecosystem-and-foster-future-growth-302109038.html",
  //       "PublishedOn": "2024-04-05T16:00:00.000Z",
  //       "Description": "/PRNewswire/ -- GAM3S.GG, a web3 gaming onboarding and news platform that aims to bring over 100 million players to web3, and Immutable, the leading web3...",
  //       "Language": "en",
  //       "Image": "https://mma.prnewswire.com/media/2090985/immutable_Logo.jpg?p=facebook",
  //       "SourceNationality": "us",
  //       "TitleSentiment": {
  //         "sentiment": "positive",
  //         "score": 0.83
  //       },
  //       "Summary": "GG launched exclusive quests, community tournaments and in-game content for Blast Royale and MetalCore, helping drive player growth and anticipation for both titles. \"It's clear that web3 gaming is poised to explode, and we plan to drive this explosion alongside Immutable as a key partner,\" said Omar Ghanem, CEO of GAM3S.",
  //       "Countries": [],
  //       "CryptoCurrencies": [
  //         "Ethereum"
  //       ]
  //     },
  //     {
  //       "Title": "Solana (SOL) Skyrockets 319% Amid Exciting Q1 DEX Volume Surge",
  //       "Source": "u.today",
  //       "Url": "https://u.today/solana-sol-skyrockets-319-amid-exciting-q1-dex-volume-surge",
  //       "PublishedOn": "2024-04-05T15:42:00.000Z",
  //       "Description": "Solana has emerged as standout performer in Q1, 2024",
  //       "Language": "en",
  //       "Image": "https://u.today/sites/default/files/styles/twitter/public/2024-04/46910.jpg",
  //       "SourceNationality": "us",
  //       "TitleSentiment": {
  //         "sentiment": "positive",
  //         "score": 0.93
  //       },
  //       "Summary": "Solana, the fifth-largest cryptocurrency by market capitalization, has emerged as a standout performer in the first quarter. USDC was the sole driver of the growth, with its Solana market capitalization increasing by 111% quarter-on-quarter to $2 billion.",
  //       "Countries": [
  //         "ir"
  //       ],
  //       "CryptoCurrencies": [
  //         "Usd Coin",
  //         "Solana",
  //         "Ethereum"
  //       ]
  //     },
  //     {
  //       "Title": "Cardano (ADA) Reaches Major Milestone With 88.6 Million Transactions",
  //       "Source": "u.today",
  //       "Url": "https://u.today/cardano-ada-reaches-major-milestone-with-886-million-transactions",
  //       "PublishedOn": "2024-04-05T15:21:00.000Z",
  //       "Description": "Cardano (ADA) reaches significant milestone as it completes 88.6 million transactions amid progress in key blockchain areas",
  //       "Language": "en",
  //       "Image": "https://u.today/sites/default/files/styles/twitter/public/2024-04/46908.jpg",
  //       "SourceNationality": "us",
  //       "TitleSentiment": {
  //         "sentiment": "positive",
  //         "score": 0.93
  //       },
  //       "Summary": "IOHK, the driving force behind Cardano (ADA), has announced a notable milestone in the project's advancement with the completion of 88.6 million transactions. Additionally, the release of Lace v.1.9 by the Lace team introduces multi-wallet and multi-account functionality, enhancing the platform's usability.",
  //       "Countries": [],
  //       "CryptoCurrencies": [
  //         "Cardano"
  //       ]
  //     },
  //     {
  //       "Title": "BTC Faces Enhanced Volatility as US Govt Sells Silk Road-Related Bitcoin, BCH Completes 2nd Halving: This Week’s Crypto",
  //       "Source": "cryptopotato.com",
  //       "Url": "https://cryptopotato.com/btc-faces-enhanced-volatility-as-us-govt-sells-silk-road-related-bitcoin-bch-completes-2nd-halving-this-weeks-crypto-recap",
  //       "PublishedOn": "2024-04-05T15:15:29.000Z",
  //       "Description": "Most of the crypto market is in the red on a weekly scale, with DOGE, SHIB, ADA, and AVAX plummeting by double digits.",
  //       "Language": "en",
  //       "Image": "https://cryptopotato.com/wp-content/uploads/2023/12/market_update_cover.jpg",
  //       "SourceNationality": "bg",
  //       "TitleSentiment": {
  //         "sentiment": "negative",
  //         "score": -0.36
  //       },
  //       "Summary": "She said the primary cryptocurrency works as an insurance policy against rogue regimes. Bitcoin (BTC) Price Will Not Drop Below This Level Again, Says PlanB.",
  //       "Countries": [],
  //       "CryptoCurrencies": [
  //         "Dogecoin",
  //         "Cardano",
  //         "Bitcoin Cash",
  //         "Bitcoin"
  //       ]
  //     },
  //     {
  //       "Title": "Citadel, Goldman Sachs, UBS, Citigroup Now Want Piece of Bitcoin",
  //       "Source": "u.today",
  //       "Url": "https://u.today/citadel-goldman-sachs-ubs-citigroup-now-want-piece-of-bitcoin",
  //       "PublishedOn": "2024-04-05T15:15:00.000Z",
  //       "Description": "Citadel, Goldman and UBS are no longer shying away from being publicly associated with Bitcoin, accordion to ETF analyst Eric Balchunas",
  //       "Language": "en",
  //       "Image": "https://u.today/sites/default/files/styles/twitter/public/2024-04/46896.jpg",
  //       "SourceNationality": "us",
  //       "TitleSentiment": {
  //         "sentiment": "positive",
  //         "score": 0.9
  //       },
  //       "Summary": "According to Balchunas, these authorized participants could have been on the list earlier, but they were \"ashamed\" of being associated with the product before its launch. However, now that BlackRock's Bitcoin ETF has ended up being a stunning success, they are more comfortable with being identified as authorized participants.",
  //       "Countries": [
  //         "ch",
  //         "us"
  //       ],
  //       "CryptoCurrencies": [
  //         "Bitcoin"
  //       ]
  //     },
  //     {
  //       "Title": "SHIB, BTC, ADA: KuCoin Issues Critical Alert to Crypto Users in Wake of This Development",
  //       "Source": "u.today",
  //       "Url": "https://u.today/shib-btc-ada-kucoin-issues-critical-alert-to-crypto-users-in-wake-of-this-development",
  //       "PublishedOn": "2024-04-05T15:10:00.000Z",
  //       "Description": "In light of this, KuCoin warns crypto users to stay vigilant",
  //       "Language": "en",
  //       "Image": "https://u.today/sites/default/files/styles/twitter/public/2024-04/46906.jpg",
  //       "SourceNationality": "us",
  //       "TitleSentiment": {
  //         "sentiment": "negative",
  //         "score": -0.51
  //       },
  //       "Summary": "In a recent development, KuCoin, a prominent cryptocurrency exchange, has issued a critical warning to its users regarding phishing scams. KuCoin reported that scammers have been sending messages that mimic KuCoin's branding.",
  //       "Countries": [],
  //       "CryptoCurrencies": [
  //         "Cardano",
  //         "Bitcoin"
  //       ]
  //     },
  //     {
  //       "Title": "I Would Take Long Position in ETH, Peter Brandt Says After Bashing Ethereum",
  //       "Source": "u.today",
  //       "Url": "https://u.today/i-would-take-long-position-in-eth-peter-brandt-says-after-bashing-ethereum",
  //       "PublishedOn": "2024-04-05T15:02:00.000Z",
  //       "Description": "Renowned trader Peter Brandt admitted that he would trade ETH despite his recent critique against it",
  //       "Language": "en",
  //       "Image": "https://u.today/sites/default/files/styles/twitter/public/2024-04/46907.jpg",
  //       "SourceNationality": "us",
  //       "TitleSentiment": {
  //         "sentiment": "positive",
  //         "score": 0.7
  //       },
  //       "Summary": "no longer be available. no longer be available.",
  //       "Countries": [],
  //       "CryptoCurrencies": [
  //         "Ethereum",
  //         "Bitcoin"
  //       ]
  //     },
  //     {
  //       "Title": "Green Bitcoin Price Rockets 70% After Uniswap Debut as Whale Investors Buy In",
  //       "Source": "finbold.com",
  //       "Url": "https://finbold.com/green-bitcoin-price-rockets-70-after-uniswap-debut-as-whale-investors-buy-in",
  //       "PublishedOn": "2024-04-05T14:55:37.000Z",
  //       "Description": "Crypto’s latest buzzworthy project is off to an explosive start. After a wildly successful presale, Green Bitcoin’s much-hyped GBTC token … Continue reading",
  //       "Language": "en",
  //       "Image": "https://assets.finbold.com/uploads/2024/04/1.png",
  //       "SourceNationality": "gb",
  //       "TitleSentiment": {
  //         "sentiment": "positive",
  //         "score": 0.98
  //       },
  //       "Summary": "Those locking up their GBTC can earn estimated yields of 72% per year for participating in Green Bitcoin’s protocol. But beyond this Predict-to-Earn mechanism is an even more enticing feature – Green Bitcoin’s Proof-of-Stake consensus.",
  //       "Countries": [],
  //       "CryptoCurrencies": [
  //         "Bitcoin",
  //         "Ethereum"
  //       ]
  //     },
  //     {
  //       "Title": "Ethereum (ETH) Price Prediction for April 5",
  //       "Source": "u.today",
  //       "Url": "https://u.today/ethereum-eth-price-prediction-for-april-5",
  //       "PublishedOn": "2024-04-05T14:28:00.000Z",
  //       "Description": "Has correction of Ethereum (ETH) ended yet?",
  //       "Language": "en",
  //       "Image": "https://u.today/sites/default/files/styles/twitter/public/2024-04/46902.jpg",
  //       "SourceNationality": "us",
  //       "TitleSentiment": {
  //         "sentiment": "positive",
  //         "score": 0.76
  //       },
  //       "Summary": "On the hourly chart, the price of ETH might have found a local support level of $3,237. On the bigger time frame, the rate of the main altcoin has once again bounced off the $3,214 level.",
  //       "Countries": [],
  //       "CryptoCurrencies": [
  //         "Ethereum"
  //       ]
  //     },
  //     {
  //       "Title": "Bitcoin vs. Ethereum: Ratio Rings Warning Bell for Crypto Market",
  //       "Source": "u.today",
  //       "Url": "https://u.today/bitcoin-vs-ethereum-ratio-rings-warning-bell-for-crypto-market",
  //       "PublishedOn": "2024-04-05T14:25:00.000Z",
  //       "Description": "Ratio that compares price of Bitcoin, largest digital asset, with Ethereum signals potential warning for crypto market",
  //       "Language": "en",
  //       "Image": "https://u.today/sites/default/files/styles/twitter/public/2024-04/46883.jpg",
  //       "SourceNationality": "us",
  //       "TitleSentiment": {
  //         "sentiment": "negative",
  //         "score": -0.99
  //       },
  //       "Summary": "A ratio that compares the price of Bitcoin, the largest digital asset, with Ethereum, the second-ranked, hints at a potential waning of risk appetite in alternative cryptocurrencies. The Bitcoin-to-Ethereum ratio suggests which of the two cryptocurrencies is gaining or losing ground versus the other.",
  //       "Countries": [],
  //       "CryptoCurrencies": [
  //         "Ethereum",
  //         "Bitcoin"
  //       ]
  //     },
  //     {
  //       "Title": "Shiba Inu (SHIB) Receives Support by This Popular Crypto Platform: Details",
  //       "Source": "cryptopotato.com",
  //       "Url": "https://cryptopotato.com/shiba-inu-shib-receives-support-by-this-popular-crypto-platform-details",
  //       "PublishedOn": "2024-04-05T14:21:49.000Z",
  //       "Description": "The company also enabled borrowing against SHIB and swap with rewards.",
  //       "Language": "en",
  //       "Image": "https://cryptopotato.com/wp-content/uploads/2024/04/SHIB-Nexo_CB.jpg",
  //       "SourceNationality": "bg",
  //       "TitleSentiment": {
  //         "sentiment": "positive",
  //         "score": 0.92
  //       },
  //       "Summary": "* A well-known crypto platform now allows users to buy Shiba Inu (SHIB), incorporating a variety of services with the asset. The leading cryptocurrency lending platform, Nexo, announced on X that users can purchase the second-largest meme coin – Shiba Inu (SHIB).",
  //       "Countries": [
  //         "au",
  //         "gb"
  //       ],
  //       "CryptoCurrencies": [
  //         "Dogecoin",
  //         "Ethereum"
  //       ]
  //     },
  //     {
  //       "Title": "Elite Altcoins of 2024 – Your Key to a Digital Fortune!",
  //       "Source": "finbold.com",
  //       "Url": "https://finbold.com/elite-altcoins-of-2024-your-key-to-a-digital-fortune",
  //       "PublishedOn": "2024-04-05T14:20:28.000Z",
  //       "Description": "The excitement for 2024’s bull run is palpable as investors eagerly search for the next big opportunity in the burgeoning … Continue reading",
  //       "Language": "en",
  //       "Image": "https://assets.finbold.com/uploads/2024/04/elite.png",
  //       "SourceNationality": "gb",
  //       "TitleSentiment": {
  //         "sentiment": "positive",
  //         "score": 0.99
  //       },
  //       "Summary": "TFT is currently awarded through an exclusive NFT Token Offering (NTO), allowing early adopters to significantly increase their investment. Currently, the price moves seem more corrective as the Relative Strength Index hovers around 49.18, indicating a balance between buyers and sellers.",
  //       "Countries": [
  //         "gb"
  //       ],
  //       "CryptoCurrencies": [
  //         "Ethereum"
  //       ]
  //     },
  //     {
  //       "Title": "Blockchain Life Forum 2024 in Dubai: Find Out How to Make the Most of the Current Bull Run",
  //       "Source": "u.today",
  //       "Url": "https://u.today/press-releases/blockchain-life-forum-2024-in-dubai-find-out-how-to-make-the-most-of-the-current-1",
  //       "PublishedOn": "2024-04-05T14:17:56.932Z",
  //       "Description": "Blockchain Life Forum 2024 in Dubai: Find Out How to Make the Most of the Current Bull Run",
  //       "Language": "en",
  //       "Image": "https://u.today/sites/default/files/styles/twitterpromowithoutlogopr/public/2024-04/16x9%20Banner%20BL2024%20%20ENG.png",
  //       "SourceNationality": "us",
  //       "TitleSentiment": {
  //         "sentiment": "positive",
  //         "score": 0.97
  //       },
  //       "Summary": "The highly anticipated Blockchain Life Forum 2024 is set to take place in the vibrant city of Dubai on April 15-16. Welcoming industry professionals and crypto enthusiasts from around the world, this legendary event promises to be an unforgettable experience.",
  //       "Countries": []
  //     },
  //     {
  //       "Title": "These Altcoins Can Outshine Solana in 2024",
  //       "Source": "finbold.com",
  //       "Url": "https://finbold.com/these-altcoins-can-outshine-solana-in-2024",
  //       "PublishedOn": "2024-04-05T14:17:54.000Z",
  //       "Description": "With the 2024 bull run gaining momentum, some lesser-known cryptocurrencies are poised to make an impact. This article explores a … Continue reading",
  //       "Language": "en",
  //       "Image": "https://assets.finbold.com/uploads/2024/04/these.png",
  //       "SourceNationality": "gb",
  //       "TitleSentiment": {
  //         "sentiment": "positive",
  //         "score": 0.86
  //       },
  //       "Summary": "Over the past week, the price has dropped by 20.64%, showing a significant decrease. The coin’s price movements suggest a corrective phase after its recent drop.",
  //       "Countries": [
  //         "gb"
  //       ],
  //       "CryptoCurrencies": [
  //         "Solana"
  //       ]
  //     },
  //     {
  //       "Title": "Solv Protocol Introduces Innovative Point System to Reward Users, Reveals Airdrop Plans",
  //       "Source": "cryptopotato.com",
  //       "Url": "https://cryptopotato.com/solv-protocol-introduces-innovative-point-system-to-reward-users-reveals-airdrop-plans",
  //       "PublishedOn": "2024-04-05T14:16:03.000Z",
  //       "Description": "Solv Protocol, the leading native yield platform that tokenizes and aggregates yields from diverse sources, is launching its new point system. The system",
  //       "Language": "en",
  //       "Image": "https://cryptopotato.com/wp-content/uploads/2024/04/02d383f8-5ec3-44c5-bc27-6d46dd52c8b5_1712312049CVYiToiwuN.jpg",
  //       "SourceNationality": "bg",
  //       "TitleSentiment": {
  //         "sentiment": "positive",
  //         "score": 0.86
  //       },
  //       "Summary": "Solv Protocol, the leading native yield platform that tokenizes and aggregates yields from diverse sources, is launching its new point system. The system will go live on April 5, and is designed to reward users investing in Solv vaults like SolvBTC, the platform’s native yield solution for Bitcoin.",
  //       "Countries": [],
  //       "CryptoCurrencies": [
  //         "Bitcoin",
  //         "Binance Coin",
  //         "Ethereum"
  //       ]
  //     },
  //     {
  //       "Title": "5 Key Cryptos to Invest In Before the Bitcoin Halving Bull Run",
  //       "Source": "finbold.com",
  //       "Url": "https://finbold.com/5-key-cryptos-to-invest-in-before-the-bitcoin-halving-bull-run",
  //       "PublishedOn": "2024-04-05T14:15:09.000Z",
  //       "Description": "The Bitcoin halving is a major event that historically sparks significant market moves. As this pivotal moment approaches, savvy investors … Continue reading",
  //       "Language": "en",
  //       "Image": "https://assets.finbold.com/uploads/2024/04/5.png",
  //       "SourceNationality": "gb",
  //       "TitleSentiment": {
  //         "sentiment": "positive",
  //         "score": 0.7
  //       },
  //       "Summary": "The MNT price action suggests that the moves are impulsive, with high momentum behind the recent increases. Considering the current support levels and the six-month increase, APT may have room for growth.",
  //       "Countries": [
  //         "gb"
  //       ],
  //       "CryptoCurrencies": [
  //         "Bitcoin"
  //       ]
  //     },
  //     {
  //       "Title": "Mysterious Bitcoin Creator Satoshi Nakamoto Celebrates Birthday",
  //       "Source": "u.today",
  //       "Url": "https://u.today/mysterious-bitcoin-creator-satoshi-nakamoto-celebrates-birthday",
  //       "PublishedOn": "2024-04-05T14:13:00.000Z",
  //       "Description": "Satoshi Nakamoto celebrates 49th birthday, while Bitcoin price bleeds red",
  //       "Language": "en",
  //       "Image": "https://u.today/sites/default/files/styles/twitter/public/2024-04/46880.jpg",
  //       "SourceNationality": "us",
  //       "TitleSentiment": {
  //         "sentiment": "positive",
  //         "score": 0.69
  //       },
  //       "Summary": "Today, the crypto world observes an enigmatic yet significant event: the alleged birthday of Satoshi Nakamoto, the elusive founder of Bitcoin. Regardless of market fluctuations, Bitcoin's enduring prominence underscores its resilience and relevance in the financial realm.",
  //       "Countries": [],
  //       "CryptoCurrencies": [
  //         "Bitcoin"
  //       ]
  //     },
  //     {
  //       "Title": "The Furrever Token Effect: What’s Driving Solana (SOL) and Shiba Inu (SHIB) Investors’ Interest in 2024",
  //       "Source": "finbold.com",
  //       "Url": "https://finbold.com/the-furrever-token-effect-whats-driving-solana-sol-and-shiba-inu-shib-investors-interest-in-2024",
  //       "PublishedOn": "2024-04-05T14:02:47.000Z",
  //       "Description": "In a whirlwind of market turbulence, Ethereum (ETH) and Shiba Inu (SHIB) grapple with volatility, struggling to maintain their foothold … Continue reading",
  //       "Language": "en",
  //       "Image": "https://assets.finbold.com/uploads/2024/04/the.png",
  //       "SourceNationality": "gb",
  //       "TitleSentiment": {
  //         "sentiment": "positive",
  //         "score": 0.81
  //       },
  //       "Summary": "Meanwhile, amidst the chaos, Furrever Token (FURR) emerges as a beacon of opportunity, attracting a swarm of investors with its enticing up to 15X return offer. As ETH and SHIB navigate uncertain waters, all eyes turn to FURR, its meteoric rise capturing the imagination of investors seeking lucrative opportunities in the crypto space.",
  //       "Countries": [
  //         "gb"
  //       ],
  //       "CryptoCurrencies": [
  //         "Ethereum",
  //         "Bitcoin"
  //       ]
  //     },
  //     {
  //       "Title": "Solv Protocol introduces a reward system and reveals airdrop plans",
  //       "Source": "finbold.com",
  //       "Url": "https://finbold.com/solv-protocol-introduces-a-reward-system-and-reveals-airdrop-plans/",
  //       "PublishedOn": "2024-04-05T14:00:00.000Z",
  //       "Description": "Solv Protocol, a yield platform tokenizing and consolidating yields from diverse sources, announced a new reward point system.",
  //       "Language": "en",
  //       "Image": "https://assets.finbold.com/uploads/2024/04/photo_5796250445935658098_y-1.jpg",
  //       "SourceNationality": "gb",
  //       "TitleSentiment": {
  //         "sentiment": "positive",
  //         "score": 0.93
  //       },
  //       "Summary": "The system aims to incentivize users who invest in Solv vaults such as SolvBTC, the platform’s native yield solution tailored for Bitcoin (BTC) traders. Solv’s point system signals a shift to a new, dynamic approach to rewarding users based on their investment activities.",
  //       "Countries": [],
  //       "CryptoCurrencies": [
  //         "Ethereum",
  //         "Bitcoin",
  //         "Binance Coin"
  //       ]
  //     },
  //     {
  //       "Title": "s (BTC) Price Drop to $64.5K This Week? Santiment Observes",
  //       "Source": "cryptopotato.com",
  //       "Url": "https://cryptopotato.com/how-is-the-us-related-to-bitcoins-btc-price-drop-to-64-5k-this-week-santiment-observes",
  //       "PublishedOn": "2024-04-05T13:59:36.000Z",
  //       "Description": "The analytics platform outlined increased interest in BTC related to Silk Road.",
  //       "Language": "en",
  //       "Image": "https://cryptopotato.com/wp-content/uploads/2024/04/Bitcoin_United_States-1.jpg",
  //       "SourceNationality": "bg",
  //       "TitleSentiment": {
  //         "sentiment": "negative",
  //         "score": -0.64
  //       },
  //       "Summary": "According to Santiment, many attribute the recent drop to the revelation by US government authorities of their sale of nearly 10,000 BTC from the Silk Road seizure. As such, the on-chain analytic firm suggests that if fear persists, further price increases in the crypto market could be expected.",
  //       "Countries": [],
  //       "CryptoCurrencies": [
  //         "Bitcoin"
  //       ]
  //     },
  //     {
  //       "Title": "Retik Finance (RETIK) Emerges as DeFi Top Dog, Set to Take On Polygon (MATIC) and Polkadot (DOT) in 2024",
  //       "Source": "finbold.com",
  //       "Url": "https://finbold.com/retik-finance-retik-emerges-as-defi-top-dog-set-to-take-on-polygon-matic-and-polkadot-dot-in-2024",
  //       "PublishedOn": "2024-04-05T13:53:56.000Z",
  //       "Description": "Retik Finance (RETIK) has emerged as a formidable contender, poised to challenge established players like Polygon (MATIC) and Polkadot (DOT). … Continue reading",
  //       "Language": "en",
  //       "Image": "https://assets.finbold.com/uploads/2024/04/1-2.jpeg",
  //       "SourceNationality": "gb",
  //       "TitleSentiment": {
  //         "sentiment": "positive",
  //         "score": 0.94
  //       },
  //       "Summary": "This accomplishment serves as a testament to Retik’s unwavering commitment to innovation and its mission to revolutionize the future of finance in collaboration with our valued community members. As the DeFi industry continues to evolve, RETIK remains at the forefront of innovation, driving positive change and empowering users worldwide.",
  //       "Countries": [
  //         "gb"
  //       ]
  //     },
  //     {
  //       "Title": "Dogecoin Founder Supports DOGE Tipping on X, Though BTC and ETH Hardly Used",
  //       "Source": "u.today",
  //       "Url": "https://u.today/dogecoin-founder-supports-doge-tipping-on-x-though-btc-and-eth-hardly-used",
  //       "PublishedOn": "2024-04-05T13:44:00.000Z",
  //       "Description": "DOGE creator has weighed in on potential Dogecoin tipping implementation on X",
  //       "Language": "en",
  //       "Image": "https://u.today/sites/default/files/styles/twitter/public/2024-04/46870.jpg",
  //       "SourceNationality": "us",
  //       "TitleSentiment": {
  //         "sentiment": "positive",
  //         "score": 0.98
  //       },
  //       "Summary": "Both left the project soon after launch, but Markus remains watchful on both DOGE and the whole crypto space, frequently publishing sarcastic posts on X/Twitter platform. The Bitcoin tipping feature was launched in September 2021, and the same mechanism for ETH tipping was added in February 2022.",
  //       "Countries": [],
  //       "CryptoCurrencies": [
  //         "Ethereum",
  //         "Bitcoin",
  //         "Dogecoin"
  //       ]
  //     },
  //     {
  //       "Title": "Top Binance Trader Names When Bitcoin ETF Effect Kicks In",
  //       "Source": "u.today",
  //       "Url": "https://u.today/top-binance-trader-names-when-bitcoin-etf-effect-kicks-in",
  //       "PublishedOn": "2024-04-05T13:43:00.000Z",
  //       "Description": "Top trader from Binance believes that effect of institutional investments will come into play in only few years",
  //       "Language": "en",
  //       "Image": "https://u.today/sites/default/files/styles/twitter/public/2024-04/46878.jpg",
  //       "SourceNationality": "us",
  //       "TitleSentiment": {
  //         "sentiment": "positive",
  //         "score": 0.54
  //       },
  //       "Summary": "Traders think that in the future, it will be clear that ETFs will bring a lot more money into Bitcoin. ETFs could help make Bitcoin's price more stable if the rules around them are clear and if the crypto world keeps getting better.",
  //       "Countries": [],
  //       "CryptoCurrencies": [
  //         "Bitcoin"
  //       ]
  //     },
  //     {
  //       "Title": "How to \"Become The Money\" - Bitcoiner Michael Saylor Shares Guidance",
  //       "Source": "u.today",
  //       "Url": "https://u.today/how-to-become-the-money-bitcoiner-michael-saylor-shares-guidance",
  //       "PublishedOn": "2024-04-05T13:33:00.000Z",
  //       "Description": "Vocal Bitcoin advocate Michael Saylor has issued key Bitcoin statement to community",
  //       "Language": "en",
  //       "Image": "https://u.today/sites/default/files/styles/twitter/public/2024-04/46882.jpg",
  //       "SourceNationality": "us",
  //       "TitleSentiment": {
  //         "sentiment": "positive",
  //         "score": 0.89
  //       },
  //       "Summary": "Earlier this week, Saylor commented on Bitcoin suddenly plunging below the $65,000 level as he tweeted that it was time to bet on BTC. In another recent tweet, Mow also revealed his plans to celebrate the approaching Bitcoin halvening event, which is expected at the end of this month.",
  //       "Countries": [
  //         "us"
  //       ],
  //       "CryptoCurrencies": [
  //         "Bitcoin"
  //       ]
  //     }
  //   ]
  // }



  let count = 0;
  if (!simplified) { count = 10; } else { count = 12; }
  const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

  return (
    <>
      <Row gutter={[24, 24]}  >
        {simplified && (
          cryptoNews?.news.map((news, i) => (
            i < 6 ? (
              <Col xs={24} sm={20} lg={10} key={i}>
                <Card hoverable className="news-card">
                  <a href={news.Url} className="news-container" target="_blank" rel="noreferrer">
                    <div className="news-image-container">
                      <Title className="news-title" level={5}>{news.Title}</Title>
                      <img style={{ maxWidth: '180px', maxHeight: '100px' }} className='news-image' src={news.Image} alt="/news" />
                    </div>
                    <p>
                      {news.Description?.length > 100 ? `${news.Description.substring(0, 100)}...` : news.Description}
                    </p>

                    <div className='provider-container'>
                      <Text type="secondary" className="provider-name">{news.Source}</Text>
                      <Text type="secondary" >{moment(news.PublishedOn).startOf('ss').fromNow()}</Text>
                    </div>
                  </a>
                </Card>
              </Col>
            ) : null
          ))
        )}
        {!simplified && (
          <>
            <Col span={24}>
              <Select
                showSearch
                allowClear="true"
                className="select-news"
                placeholder="Select a Crypto"
                optionFilterProp="children"
                onChange={(value) => setNewsToken(value)}
                filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                <Option value="">All</Option>
                {tokenArray.map((currency) => <Option value={currency}>{currency}</Option>)}
              </Select>
            </Col>

            {cryptoNews?.news.map((news, i) => (
              i < 60 ? (
                <Col xs={24} sm={20} lg={10} key={i}>
                  <Card hoverable className="news-card">
                    <a href={news.Url} className="news-container" target="_blank" rel="noreferrer">
                      <div className="news-image-container">
                        <Title className="news-title" level={5}>{news.Title}</Title>
                        <img style={{ maxWidth: '180px', maxHeight: '100px' }} className='news-image' src={news.Image} alt="" />
                      </div>
                      <p >
                        {news.Description?.length > 100 ? `${news.Description.substring(0, 100)}...` : news.Description}
                      </p>
                      <div className='provider-container'>
                        <Text type="secondary" className="provider-name">{news.Source}</Text>
                        <Text type="secondary" >{moment(news.PublishedOn).startOf('ss').fromNow()}</Text>

                      </div>
                    </a>
                  </Card>
                </Col>
              ) : null

            ))
            }
          </>
        )}
      </Row>
    </>
  )
}

export default News