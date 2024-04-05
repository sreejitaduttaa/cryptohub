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
  // const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery(newsToken);
  let tokenArray = ["ADA", "BCH", "BNB", "BTC", "DOGE", "DOT", "EOS", "ETC", "ETH", "FIL", "ICP", "LTC", "MATIC", "SOL", "THETA", "TRX", "VET", "XLM", "XMR", "XRP", "USDT"]

 const cryptoNews =  {
    "result": {
      "response": "ok",
      "newsCount": 15
    },
    "news": [
      {
        "Title": "Robinhood lancia i wallet di criptovaluta",
        "Source": "it.notizie.yahoo.com",
        "Url": "https://it.finance.yahoo.com/notizie/robinhood-lancia-wallet-di-criptovaluta-102600853.html",
        "PublishedOn": "2022-04-11T10:10:31.341Z",
        "Description": "La popolare piattaforma di trading al dettaglio Robinhood Markets Inc (NASDAQ:HOOD) ha lanciato il suo wallet di criptovaluta per quasi due milioni di utenti. Cosa è successo Giovedì, alla conferenza Bitcoin 2022 di Miami, il responsabile prodotti di Robinhood Aparna Chennapragada ha annunciato che tutte le persone sulla lista d'attesa dei WenWallets ora avranno accesso al wallet digitale. A causa delle normative locali, il wallet di criptovaluta non sarà disponibile per gli utenti di Hawaii, Ne",
        "Image": "https://s.yimg.com/uu/api/res/1.2/KiO7w2vRKYqAbl3g.6VaJw--~B/aD0zNzU7dz02ODU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/it/benzinga_italy_839/32f00f309c9e86ca43920b020de2e700",
        "SourceNationality": "it",
        "TitleSentiment": {
          "sentiment": "positive",
          "score": 0.85
        },
        "Summary": "Giovedì, alla conferenza Bitcoin 2022 di Miami, il responsabile prodotti di Robinhood Aparna Chennapragada ha annunciato che tutte le persone sulla lista d'attesa dei WenWallets ora avranno accesso al wallet digitale. A causa delle normative locali, il wallet di criptovaluta non sarà disponibile per gli utenti di Hawaii, Nevada o New York.",
        "Countries": [
          "us"
        ],
        "CryptoCurrencies": [
          "Ethereum",
          "Bitcoin",
          "Dogecoin"
        ]
      },
      {
        "Title": "Hong Kong’s OneDegree Inks Deal with Reinsurer Munich Re to Launch Digital Asset Insurance",
        "Source": "coindesk.com",
        "Url": "https://www.coindesk.com/business/2022/04/11/hong-kongs-onedegree-inks-deal-with-reinsurer-munich-re-to-launch-digital-asset-insurance/",
        "PublishedOn": "2022-04-11T09:45:59.275Z",
        "Description": "Currently, only 1.5% of assets held by global exchanges and custodians are insured.",
        "Image": "https://www.coindesk.com/resizer/5LLCqho_aAfWQMlOSqGHCWWd5aY=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/DGDTLVEWJRBQXNPIFMZCA73U4Q.jpg",
        "SourceNationality": "us",
        "TitleSentiment": {
          "sentiment": "positive",
          "score": 0.7
        },
        "Summary": "CoinDesk is an independent operating subsidiary of Digital Currency Group, which invests in cryptocurrencies and blockchain startups. CoinDesk journalists are not allowed to purchase stock outright in DCG.",
        "Countries": [
          "hk"
        ],
        "CryptoCurrencies": []
      },
      {
        "Title": "Multiple Indian Official Twitter Accounts Hacked, NFT Content Posted",
        "Source": "coindesk.com",
        "Url": "https://www.coindesk.com/tech/2022/04/11/multiple-indian-official-twitter-accounts-hacked-nft-content-posted/",
        "PublishedOn": "2022-04-11T09:19:09.913Z",
        "Description": "Accounts of a high profile state chief minister, political parties and government institutions were compromised.",
        "Image": "https://www.coindesk.com/resizer/zrAlO3NfcRz4OpAmk6zwJhw1qTg=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/KB67TTSTMBH45EVSPCVXHR32PI.jpg",
        "SourceNationality": "us",
        "TitleSentiment": {
          "sentiment": "negative",
          "score": -0.51
        },
        "Summary": "CoinDesk is an independent operating subsidiary of Digital Currency Group, which invests in cryptocurrencies and blockchain startups. CoinDesk journalists are not allowed to purchase stock outright in DCG.",
        "Countries": [
          "in"
        ]
      },
      {
        "Title": "$4,000,000,000 in Bitcoin Exiting Crypto Exchanges Every Month As Outflows Reach Historic Proportions: Glassnode",
        "Source": "dailyhodl.com",
        "Url": "https://dailyhodl.com/2022/04/11/4000000000-in-bitcoin-exiting-crypto-exchanges-every-month-as-outflows-reach-historic-proportions-glassnode",
        "PublishedOn": "2022-04-11T09:15:53.000Z",
        "Description": "The co-founder of leading analytics platform Glassnode says higher prices for Bitcoin are inevitable as BTC leaves exchanges at historic levels.",
        "Image": "https://i0.wp.com/dailyhodl.com/wp-content/uploads/2021/12/bitcoin-correction-different.jpg?fit=1365%2C800&ssl=1",
        "SourceNationality": "us",
        "TitleSentiment": {
          "sentiment": "positive",
          "score": 0.57
        },
        "Summary": "The co-founder of leading analytics platform Glassnode says higher prices for Bitcoin are inevitable as BTC leaves exchanges at historic levels. According to Allemann, Bitcoin is long-term bullish as the metric is in an uptrend, suggesting investors are taking profits at a slower rate than the growth of the market.",
        "Countries": [],
        "CryptoCurrencies": [
          "Bitcoin"
        ]
      },
      {
        "Title": "Mark Karpelès, le \"baron\" déchu du bitcoin, veut créer une agence de notation pour les cryptomonnaies",
        "Source": "la-croix.com",
        "Url": "https://www.la-croix.com/Mark-Karpeles-baron-dechu-bitcoin-veut-creer-agence-notation-cryptomonnaies-2022-04-11-1301209764",
        "PublishedOn": "2022-04-11T09:03:06.000Z",
        "Description": "Mark Karpelès, ancien patron de la plateforme d'échanges de bitcoins Mt. Gox qui avait fait faillite en 2014 après un piratage, veut lancer une agence de notation dans le secteur des cryptomonnaies, où «beaucoup reste à faire en matière de sécurité» rappelle-t-il.",
        "Image": "https://i.la-croix.com/1400x933/smart/2022/04/11/1301209764/Mark-Karpeles-fondateur-UNGOX-ancien-patron-plateforme-echanges-bitcoins-Mt-Gox-Tokyo-11-avril-2022_0.jpg",
        "SourceNationality": "fr",
        "TitleSentiment": {
          "sentiment": "positive",
          "score": 0.91
        },
        "Summary": "Il prévoit de lancer au troisième trimestre 2022 \"Ungox\", un site indépendant évaluant les niveaux de risques des différentes plateformes et projets dans les cryptomonnaies, avec une partie gratuite et un contenu premium payant, imaginant aussi des services d'audit pour des entreprises présentes ou souhaitant s'introduire sur ce marché, souvent considéré comme très opaque. L'entrepreneur a exclu d'emblée le recours à des revenus publicitaires pour \"rester indépendant\", et a chiffré à trois millions de dollars le besoin de financement pour les deux premières années du site, qui nécessiterait \"au moins dix analystes à plein temps\".",
        "Countries": [
          "fr",
          "jp"
        ],
        "CryptoCurrencies": [
          "Bitcoin"
        ]
      },
      {
        "Title": "IMF claims crypto usage is higher in corrupt countries with tighter capital restrictions",
        "Source": "finbold.com",
        "Url": "https://finbold.com/imf-says-the-number-of-crypto-users-is-higher-in-corrupt-nations",
        "PublishedOn": "2022-04-11T08:58:34.000Z",
        "Description": "In the last year, the rise of crypto has proceeded quickly, with some places already adopting Bitcoin as legal tender or as payment.",
        "Image": "https://finbold.com/wp-content/uploads/2022/04/IMF-claims-crypto-usage-is-higher-in-corrupt-countries-with-tighter-capital-restrictions.jpg",
        "SourceNationality": "gb",
        "TitleSentiment": {
          "sentiment": "negative",
          "score": -0.46
        },
        "Summary": "“We find that crypto-asset usage is significantly and positively associated with higher perception of corruption and more intensive capital controls,” the IMF report said. Indeed, in those countries regarded as corrupt or having severe capital restrictions, cryptocurrency adoption is higher, bolstering the argument for stronger sector regulation, per the report.",
        "Countries": [
          "ru",
          "ua",
          "us"
        ],
        "CryptoCurrencies": [
          "Bitcoin"
        ]
      },
      {
        "Title": "Coinbase suspends crypto payment services days after India launch",
        "Source": "cointelegraph.org",
        "Url": "https://cointelegraph.com/news/coinbase-suspends-crypto-payment-services-days-after-india-launch",
        "PublishedOn": "2022-04-11T08:14:46.848Z",
        "Description": "Coinbase crypto exchange has suspended buy order service on its Indian arm due to pressure from local payment authorities. The NPCI stated it was unaware that a crypto exchange was using its exclusive payment interface to facilitate buy orders.",
        "Image": "https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjItMDQvMGMxZTgzYzItNzdjZS00ZTIyLTg3NTMtYzJmNjY5NDE5ZDA0LmpwZw==.jpg",
        "SourceNationality": "us",
        "TitleSentiment": {
          "sentiment": "positive",
          "score": 0.64
        },
        "Summary": "The largest US-based crypto exchange Coinbase has stopped payment services through United Payments Interface (UPI) on its platform for Indian users just three days after its launch in the South Asian subcontinent. This is not new, Indian exchanges have also been facing payment service problem since 2018.",
        "Countries": [
          "in"
        ]
      },
      {
        "Title": "Cathie Wood’s Ark Invest dumps PayPal favoring Bitcoin-friendly Cash App",
        "Source": "cointelegraph.org",
        "Url": "https://cointelegraph.com/news/cathie-wood-s-ark-invest-dumps-paypal-favoring-bitcoin-friendly-cash-app",
        "PublishedOn": "2022-04-11T08:14:45.918Z",
        "Description": "Bitcoin bull and crypto investment firm Ark Invest founder Cathie Wood said that her firm has shed all of its shares of PayPal and will be sticking with Cash App due to its sounder adoption of Bitcoin.",
        "Image": "https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjItMDQvYWYxZGJmNGQtY2EyMC00N2JkLWIyZTItMWVmNTdlMDZiNWM0LmpwZw==.jpg",
        "SourceNationality": "us",
        "TitleSentiment": {
          "sentiment": "negative",
          "score": -0.5
        },
        "Summary": "Financial technology company PayPal operates the payment app Venmo as a direct competitor with Block’s (formerly Square) Cash App. “@ARKInvest has sold, completely got out of Paypal, whose Venmo is a big competitor to Cash App.",
        "Countries": [
          "us"
        ],
        "CryptoCurrencies": [
          "Bitcoin"
        ]
      },
      {
        "Title": "Crypto Strategist Warns Deep Bitcoin Correction Coming, Says BTC Flashing November 2021 Vibes",
        "Source": "dailyhodl.com",
        "Url": "https://dailyhodl.com/2022/04/11/crypto-strategist-warns-deep-bitcoin-correction-coming-says-btc-flashing-november-2021-vibes",
        "PublishedOn": "2022-04-11T07:04:48.000Z",
        "Description": "A closely followed crypto strategist and trader says Bitcoin's (BTC) price action resembles the market top of November 2021 and is ready for another deep retracement.",
        "Image": "https://i0.wp.com/dailyhodl.com/wp-content/uploads/2022/01/bitcoin-early-adoption-tech.jpg?fit=1365%2C800&ssl=1",
        "SourceNationality": "us",
        "TitleSentiment": {
          "sentiment": "negative",
          "score": -0.86
        },
        "Summary": "In a new strategy session, pseudonymous analyst DonAlt says that bears have taken control of Bitcoin after bulls failed to push the market higher despite large purchases from MicroStrategy’s Michael Saylor and Terra (LUNA) founder Do Kwon. “I think the assumption has to be this is bearish and this is going to go down because we had a bunch of good news.",
        "Countries": [],
        "CryptoCurrencies": [
          "Ethereum",
          "Bitcoin"
        ]
      },
      {
        "Title": "Binance Obtains In-Principle Approval From the Abu Dhabi Global Market",
        "Source": "cryptopotato.com",
        "Url": "https://cryptopotato.com/binance-obtains-in-principle-approval-from-the-abu-dhabi-global-market",
        "PublishedOn": "2022-04-11T05:50:27.000Z",
        "Description": "The United Arab Emirates continues on its route to becoming a cryptocurrency hub by providing an In-Principle Approval for Binance.",
        "Image": "https://cryptopotato.com/wp-content/uploads/2022/04/Binance_abu_Dhabi.jpg",
        "SourceNationality": "bg",
        "TitleSentiment": {
          "sentiment": "positive",
          "score": 1
        },
        "Summary": "Less than a month after receiving a limited crypto asset license in Dubai, the world’s leading cryptocurrency exchange obtained an In-Principle Approval from the Financial Services Permission of Abu Dhabi Global Market. * Binance already received a limited license in Dubai to operate as a cryptocurrency exchange in March this year but under certain conditions.",
        "Countries": [
          "qa",
          "ae"
        ]
      },
      {
        "Title": "Luna Foundation Treasury Holds Almost 40,000 BTC After Weekend Purchase",
        "Source": "coindesk.com",
        "Url": "https://www.coindesk.com/markets/2022/04/11/luna-foundation-treasury-holds-almost-40000-btc-after-weekend-purchase/",
        "PublishedOn": "2022-04-11T04:03:36.901Z",
        "Description": "Luna Foundation Guard bought $173 million worth of bitcoin over the weekend, but bitcoin is down 2%.",
        "Image": "https://www.coindesk.com/resizer/jZBTVFLJKpzYGe2A7Ph5EdtJgX8=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/DQZJX2YNKNEUPKCTUGDBFRORQM.png",
        "SourceNationality": "us",
        "TitleSentiment": {
          "sentiment": "positive",
          "score": 0.86
        },
        "Summary": "CoinDesk is an independent operating subsidiary of Digital Currency Group, which invests in cryptocurrencies and blockchain startups. CoinDesk journalists are not allowed to purchase stock outright in DCG.",
        "Countries": [],
        "CryptoCurrencies": [
          "Bitcoin"
        ]
      },
      {
        "Title": "Crypto and gaming collide in high-risk 'play-to-earn' economies",
        "Source": "asiaone.com",
        "Url": "http://www.asiaone.com/digital/crypto-and-gaming-collide-high-risk-play-earn-economies",
        "PublishedOn": "2022-04-11T03:20:57.000Z",
        "Description": "Jarindr Thitadilaka says he made as much as USD$2,000 (S$2,730) a month last year from his collection of digital pets, which he would breed and send into battle to win cryptocurrencies.The 28-year-old from Bangkok was playing Axie Infinity,... - Read more at AsiaOne",
        "Image": "https://www.asiaone.com/sites/default/files/styles/a1_og_image/public/original_images/Apr2022/11042022_crypto%20%285%29.jpg?itok=232_JCrj",
        "SourceNationality": "sg",
        "TitleSentiment": {
          "sentiment": "positive",
          "score": 0.74
        },
        "Summary": "In-game assets called 'Axies' are seen in this undated handout image from the blockchain-based game Axie Infinity, which is owned by Sky Mavis. Undated handout image shows the blockchain-based game Axie Infinity, which is owned by Sky Mavis.",
        "Countries": [
          "ph"
        ]
      },
      {
        "Title": "[B-SIDE Podcast] Navigating the NFT gold rush",
        "Source": "bworldonline.com",
        "Url": "https://www.bworldonline.com/podcast/2022/04/11/441587/b-side-podcast-navigating-the-nft-gold-rush/",
        "PublishedOn": "2022-04-11T02:47:02.000Z",
        "Description": "Follow us on Spotify BusinessWorld B-Side Non-fungible Tokens (NFTs) in the form of both digital art and play-to-earn gaming assets have come under fire for their price volatility and vulnerability to frauds and scams. This March, hackers stole around $600 million from the Ronin blockchain network that supports Axie Infinity, a play-to-earn game with 3 million daily active players, 35% of […]",
        "Image": "https://www.bworldonline.com/wp-content/uploads/2022/04/04.11.22-B_Side_NFT_Renz-Carlo-Chong_1400x1400.png",
        "SourceNationality": "ph",
        "TitleSentiment": {
          "sentiment": "positive",
          "score": 0.44
        },
        "Summary": "Non-fungible Tokens (NFTs) in the form of both digital art and play-to-earn gaming assets have come under fire for their price volatility and vulnerability to frauds and scams. Given the game’s large, Philippine-based demographic, the Bangko Sentral ng Pilipinas cautioned the public against dealing hastily with digital tokens.",
        "Countries": [
          "ph"
        ]
      },
      {
        "Title": "Stablecoins A Bigger Threat To",
        "Source": "outlookindia.com",
        "Url": "https://www.outlookindia.com/business/stablecoins-a-bigger-threat-to-economy-than-cryptos-rbi-dy-governor-opinion-divided-news-190989",
        "PublishedOn": "2022-04-11T02:38:31.000Z",
        "Description": "Statements by the RBI Dy. Governor that stablecoins present a bigger threat to economic stability than other cryptocurrencies has divided experts",
        "Image": "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1647587910.webp?utm_source=fb",
        "SourceNationality": "in",
        "TitleSentiment": {
          "sentiment": "negative",
          "score": -0.66
        },
        "Summary": "Coinbase, a global crypto exchange defines stablecoins as “a digital currency that is pegged to a “stable” reserve asset like the US dollar or gold. Aruna Sharma, former secretary, and member, RBI Committee in Deepening Of Digital Payment believes that while stablecoins have some sort of a backup and security, crypto currencies do not come with any such base.",
        "Countries": [
          "in"
        ],
        "CryptoCurrencies": [
          "Usd Coin",
          "Bitcoin"
        ]
      },
      {
        "Title": "Terra’s LUNA Leads Slide in Majors as Ether Nears $3K",
        "Source": "coindesk.com",
        "Url": "https://www.coindesk.com/markets/2022/04/11/terras-luna-leads-slide-in-majors-as-ether-nears-3k/",
        "PublishedOn": "2022-04-11T00:00:00.000Z",
        "Description": "Crypto markets slid on Monday amid a weak trading session in Asia and Europe in broader markets.",
        "Image": "https://www.coindesk.com/resizer/nh7zyHDiUzeHkddRGyQqCj0qdA0=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/YM54TY3DKVE33NUL5BLCT6EN2E.jpg",
        "SourceNationality": "us",
        "TitleSentiment": {
          "sentiment": "positive",
          "score": 0.93
        },
        "Summary": "CoinDesk is an independent operating subsidiary of Digital Currency Group, which invests in cryptocurrencies and blockchain startups. CoinDesk journalists are not allowed to purchase stock outright in DCG.",
        "Countries": []
      }
    ]
  }

  // if (isFetching) return <Loader/>;
  // if (!cryptoNews?.news) return <Loader/>;

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
                  <a href={news.Url} className="news-container"  target="_blank" rel="noreferrer">
                    <div className="news-image-container">
                      <Title className="news-title" level={5}>{news.Title}</Title>
                      <img style={{maxWidth:'180px', maxHeight:'100px'}} className='news-image' src={news.Image} alt="/news" />
                    </div>
                    <p>
                      {news.Description?.length > 100 ? `${news.Description.substring(0, 100)}...` : news.Description}
                    </p>

                    <div className='provider-container'>
                      <Text type="secondary"  className="provider-name">{news.Source}</Text>
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
                <Col xs={24} sm={20} lg={10}  key={i}>
                  <Card hoverable className="news-card">
                    <a href={news.Url}  className="news-container" target="_blank" rel="noreferrer">
                      <div className="news-image-container">
                        <Title className="news-title" level={5}>{news.Title}</Title>
                        <img style={{maxWidth:'180px', maxHeight:'100px'}}  className='news-image' src={news.Image} alt="" />
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