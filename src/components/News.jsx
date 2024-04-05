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


  const cryptoNews =   {
    "result": {
      "response": "ok",
      "newsCount": 15
    },
    "news": [
      {
        "Title": "#WykresDnia: Indeks strachu wzrósł o ponad 14 proc., najwięcej od października",
        "Source": "parkiet.com",
        "Url": "http://www.parkiet.com/wykres-dnia/art40117601-wykresdnia-indeks-strachu-wzrosl-o-ponad-14-proc-najwiecej-od-pazdziernika",
        "PublishedOn": "2024-04-05T16:54:32.604Z",
        "Description": "Indeks VIX, który jest najlepszą miarą zmienności na rynku, wzrósł do 16,35 dolarów, czyli znacznie powyżej najniższego od początku roku poziomu 12 dolarów.",
        "Language": "pl",
        "Image": "https://i.gremicdn.pl/image/free/529231e7253f36ceb4a994a6ff6531fb/?t=crop:5758:3571:nowe:0:135,resize:fill:1200:716,enlarge:1",
        "SourceNationality": "pl",
        "TitleSentiment": {
          "sentiment": "negative",
          "score": -0.93
        },
        "Summary": "W tym tygodniu giełda również borykała się z trudnościami, ponieważ indeksy Dow Jones, Nasdaq 100 i S&P 500 spadały we wszystkie dni tygodnia. Indeks VIX, który jest najlepszą miarą zmienności na rynku, wzrósł do 16,35 dolarów, czyli znacznie powyżej najniższego od początku roku poziomu 12 dolarów.",
        "Countries": [
          "pl"
        ],
        "CryptoCurrencies": [
          "Solana",
          "Bitcoin"
        ]
      },
      {
        "Title": "Portfel inwestycyjny na kwiecień 2024: Rynkowy bal trwa. Optymizm nie opuszcza ekspertów",
        "Source": "parkiet.com",
        "Url": "http://www.parkiet.com/portfel-inwestycyjny/art40115611-portfel-inwestycyjny-na-kwiecien-2024-rynkowy-bal-trwa-optymizm-nie-opuszcza-ekspertow",
        "PublishedOn": "2024-04-05T16:54:32.213Z",
        "Description": "Jeśli inwestować na rynku walutowym, to głównie przeciwko frankowi. Dobrą passę na rynku surowców powinny kontynuować metale szlachetne, a coraz lepsze perspekt",
        "Language": "pl",
        "Image": "https://i.gremicdn.pl/image/free/9b2cbfcf692fa362f5b4879dcf569675/?t=crop:5263:3264:nowe:280:0,resize:fill:1200:716,enlarge:1",
        "SourceNationality": "pl",
        "TitleSentiment": {
          "sentiment": "positive",
          "score": 1
        },
        "Summary": "Część ekspertów wierzy, że złoty może być silniejszy nie tylko względem franka, ale także euro. Widać też, że inwestorzy na rynku akcji zaczęli już pozycjonować się na wzrost spółek surowcowych.",
        "Countries": [
          "pl"
        ],
        "CryptoCurrencies": [
          "Ethereum"
        ]
      },
      {
        "Title": "Złoty wrócił do dobrej formy",
        "Source": "parkiet.com",
        "Url": "http://www.parkiet.com/waluty/art40118911-zloty-wrocil-do-dobrej-formy",
        "PublishedOn": "2024-04-05T16:54:31.392Z",
        "Description": "Po zawahaniu krajowej waluty w drugiej połowie marca nie ma już śladów. Kursy dolara i euro wędrują w dół.",
        "Language": "pl",
        "Image": "https://i.gremicdn.pl/image/free/4e344437319f4680a45fcb334053b826/?t=crop:3478:2157:nowe:11:0,resize:fill:1200:716,enlarge:1",
        "SourceNationality": "pl",
        "TitleSentiment": {
          "sentiment": "positive",
          "score": 0.99
        },
        "Summary": "Kluczowy odczyt z rynku pracy zadecyduje, czy wygłaszane na tle tego tygodnia jastrzębie komentarze bankierów FED są uzasadnione i czy trwale zdołają one opóźnić tempo obniżek stóp procentowych w USA. Dolar znów jest poniżej 4 zł, zaś euro poniżej 4,30 zł.",
        "Countries": [
          "ch",
          "pl"
        ],
        "CryptoCurrencies": [
          "Bitcoin"
        ]
      },
      {
        "Title": "Gigantyczne obroty na rynku kryptowalut",
        "Source": "parkiet.com",
        "Url": "http://www.parkiet.com/kryptowaluty/art40117531-gigantyczne-obroty-na-rynku-kryptowalut",
        "PublishedOn": "2024-04-05T16:54:31.227Z",
        "Description": "Łączne obroty na rynku spotowym i instrumentów pochodnych powiązanych z walutami cyfrowymi na zcentralizowanych giełdach w marcu niemal podwoiły się do  9,1 bil",
        "Language": "pl",
        "Image": "https://i.gremicdn.pl/image/free/dd6d3974d6e485de18ef50dc192ddb74/?t=crop:3267:2026:nowe:167:0,resize:fill:1200:716,enlarge:1",
        "SourceNationality": "pl",
        "TitleSentiment": {
          "sentiment": "positive",
          "score": 0.71
        },
        "Summary": "15 lat od powstania bitcoina nadal nie jest znana tożsamość jego twórcy posługującego się pseudonimem „Satoshi Nakamoto”. Wydobycie na pewien czas stanie się mniej opłacalne, ale kurs kryptowaluty może pójść mocno w górę w ciągu półtora roku.",
        "Countries": [
          "pl"
        ],
        "CryptoCurrencies": [
          "Bitcoin"
        ]
      },
      {
        "Title": "Die Volksinitiative zur Kostenbremse im Gesundheitswesen auf einen Blick",
        "Source": "nzz.ch",
        "Url": "http://nzz.ch/schweiz/kopie-von-die-volksinitiative-zur-staerkeren-verbilligung-der-krankenkassenpraemien-auf-einen-blick-ld.1824743",
        "PublishedOn": "2024-04-05T16:23:47.603Z",
        "Description": "Muss der Bund beim Überschreiten einer Kostenschwelle in der obligatorischen Krankenversicherung künftig wirksame Gegenmassnahmen beschliessen? Das fordert eine Volksinitiative der Mitte-Partei. Die Stimmbürger entscheiden am 9. Juni.",
        "Language": "de",
        "Image": "https://img.nzz.ch/2024/04/05/5b6c4e3b-f570-4343-b420-d09a533340e8.png?width=1200&height=675&fit=bound&quality=75&auto=webp&crop=4800,2700,x0,y1&wmark=nzz",
        "SourceNationality": "ch",
        "TitleSentiment": {
          "sentiment": "positive",
          "score": 0.91
        },
        "Summary": "Von 2000 bis 2022 haben sich in der obligatorischen Krankenversicherung vor allem wegen des Mehrkonsums die Kosten pro Versichertem verdoppelt (plus 104 Prozent), und das Gleiche gilt für die mittlere Prämie (ebenfalls plus 104 Prozent). Der Gegenvorschlag sieht zudem auch die Einsetzung einer Kommission für die Überwachung von Kosten und Qualität vor.",
        "Countries": [
          "ch"
        ],
        "CryptoCurrencies": [
          "Ethereum"
        ]
      },
      {
        "Title": "GAM3S.GG and Immutable Partner to Expand Web3 Gaming Ecosystem and Foster Future Growth",
        "Source": "prnewswire.com",
        "Url": "https://www.prnewswire.com/news-releases/gam3sgg-and-immutable-partner-to-expand-web3-gaming-ecosystem-and-foster-future-growth-302109038.html",
        "PublishedOn": "2024-04-05T16:00:00.000Z",
        "Description": "/PRNewswire/ -- GAM3S.GG, a web3 gaming onboarding and news platform that aims to bring over 100 million players to web3, and Immutable, the leading web3...",
        "Language": "en",
        "Image": "https://mma.prnewswire.com/media/2090985/immutable_Logo.jpg?p=facebook",
        "SourceNationality": "us",
        "TitleSentiment": {
          "sentiment": "positive",
          "score": 0.83
        },
        "Summary": "GG launched exclusive quests, community tournaments and in-game content for Blast Royale and MetalCore, helping drive player growth and anticipation for both titles. \"It's clear that web3 gaming is poised to explode, and we plan to drive this explosion alongside Immutable as a key partner,\" said Omar Ghanem, CEO of GAM3S.",
        "Countries": [],
        "CryptoCurrencies": [
          "Ethereum"
        ]
      },
      {
        "Title": "Solana (SOL) Skyrockets 319% Amid Exciting Q1 DEX Volume Surge",
        "Source": "u.today",
        "Url": "https://u.today/solana-sol-skyrockets-319-amid-exciting-q1-dex-volume-surge",
        "PublishedOn": "2024-04-05T15:42:00.000Z",
        "Description": "Solana has emerged as standout performer in Q1, 2024",
        "Language": "en",
        "Image": "https://u.today/sites/default/files/styles/twitter/public/2024-04/46910.jpg",
        "SourceNationality": "us",
        "TitleSentiment": {
          "sentiment": "positive",
          "score": 0.93
        },
        "Summary": "Solana, the fifth-largest cryptocurrency by market capitalization, has emerged as a standout performer in the first quarter. USDC was the sole driver of the growth, with its Solana market capitalization increasing by 111% quarter-on-quarter to $2 billion.",
        "Countries": [
          "ir"
        ],
        "CryptoCurrencies": [
          "Usd Coin",
          "Solana",
          "Ethereum"
        ]
      },
      {
        "Title": "Cuándo es el halving de bitcoin 2024 y cómo te puede afectar",
        "Source": "tn.com.ar",
        "Url": "http://tn.com.ar/economia/2024/04/05/cuando-es-el-halving-de-bitcoin-2024-y-como-te-puede-afectar",
        "PublishedOn": "2024-04-05T15:37:31.571Z",
        "Description": "En este 2024, se llevará a cabo el cuarto halving en la historia del bitcoin.",
        "Language": "es",
        "Image": "https://tn.com.ar/resizer/6saOaE0TRvsWQSD4m4q3VXbapW4=/767x0/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/artear/SIDJTWCCVJCONKVFGJ4TR5CZQY.png",
        "SourceNationality": "ar",
        "TitleSentiment": {
          "sentiment": "positive",
          "score": 0.29
        },
        "Summary": "El halving de bitcoin es uno de los eventos más significativos y esperados en el mundo de las criptomonedas, y su próxima edición en 2024 está generando un gran interés. El halving de bitcoin es un mecanismo incorporado en el protocolo de bitcoin que reduce a la mitad las recompensas otorgadas a los mineros por validar un bloque.",
        "Countries": [],
        "CryptoCurrencies": [
          "Bitcoin"
        ]
      },
      {
        "Title": "Cardano (ADA) Reaches Major Milestone With 88.6 Million Transactions",
        "Source": "u.today",
        "Url": "https://u.today/cardano-ada-reaches-major-milestone-with-886-million-transactions",
        "PublishedOn": "2024-04-05T15:21:00.000Z",
        "Description": "Cardano (ADA) reaches significant milestone as it completes 88.6 million transactions amid progress in key blockchain areas",
        "Language": "en",
        "Image": "https://u.today/sites/default/files/styles/twitter/public/2024-04/46908.jpg",
        "SourceNationality": "us",
        "TitleSentiment": {
          "sentiment": "positive",
          "score": 0.93
        },
        "Summary": "IOHK, the driving force behind Cardano (ADA), has announced a notable milestone in the project's advancement with the completion of 88.6 million transactions. Additionally, the release of Lace v.1.9 by the Lace team introduces multi-wallet and multi-account functionality, enhancing the platform's usability.",
        "Countries": [],
        "CryptoCurrencies": [
          "Cardano"
        ]
      },
      {
        "Title": "BTC Faces Enhanced Volatility as US Govt Sells Silk Road-Related Bitcoin, BCH Completes 2nd Halving: This Week’s Crypto",
        "Source": "cryptopotato.com",
        "Url": "https://cryptopotato.com/btc-faces-enhanced-volatility-as-us-govt-sells-silk-road-related-bitcoin-bch-completes-2nd-halving-this-weeks-crypto-recap",
        "PublishedOn": "2024-04-05T15:15:29.000Z",
        "Description": "Most of the crypto market is in the red on a weekly scale, with DOGE, SHIB, ADA, and AVAX plummeting by double digits.",
        "Language": "en",
        "Image": "https://cryptopotato.com/wp-content/uploads/2023/12/market_update_cover.jpg",
        "SourceNationality": "bg",
        "TitleSentiment": {
          "sentiment": "negative",
          "score": -0.36
        },
        "Summary": "She said the primary cryptocurrency works as an insurance policy against rogue regimes. Bitcoin (BTC) Price Will Not Drop Below This Level Again, Says PlanB.",
        "Countries": [],
        "CryptoCurrencies": [
          "Dogecoin",
          "Cardano",
          "Bitcoin Cash",
          "Bitcoin"
        ]
      },
      {
        "Title": "Citadel, Goldman Sachs, UBS, Citigroup Now Want Piece of Bitcoin",
        "Source": "u.today",
        "Url": "https://u.today/citadel-goldman-sachs-ubs-citigroup-now-want-piece-of-bitcoin",
        "PublishedOn": "2024-04-05T15:15:00.000Z",
        "Description": "Citadel, Goldman and UBS are no longer shying away from being publicly associated with Bitcoin, accordion to ETF analyst Eric Balchunas",
        "Language": "en",
        "Image": "https://u.today/sites/default/files/styles/twitter/public/2024-04/46896.jpg",
        "SourceNationality": "us",
        "TitleSentiment": {
          "sentiment": "positive",
          "score": 0.9
        },
        "Summary": "According to Balchunas, these authorized participants could have been on the list earlier, but they were \"ashamed\" of being associated with the product before its launch. However, now that BlackRock's Bitcoin ETF has ended up being a stunning success, they are more comfortable with being identified as authorized participants.",
        "Countries": [
          "ch",
          "us"
        ],
        "CryptoCurrencies": [
          "Bitcoin"
        ]
      },
      {
        "Title": "SHIB, BTC, ADA: KuCoin Issues Critical Alert to Crypto Users in Wake of This Development",
        "Source": "u.today",
        "Url": "https://u.today/shib-btc-ada-kucoin-issues-critical-alert-to-crypto-users-in-wake-of-this-development",
        "PublishedOn": "2024-04-05T15:10:00.000Z",
        "Description": "In light of this, KuCoin warns crypto users to stay vigilant",
        "Language": "en",
        "Image": "https://u.today/sites/default/files/styles/twitter/public/2024-04/46906.jpg",
        "SourceNationality": "us",
        "TitleSentiment": {
          "sentiment": "negative",
          "score": -0.51
        },
        "Summary": "In a recent development, KuCoin, a prominent cryptocurrency exchange, has issued a critical warning to its users regarding phishing scams. KuCoin reported that scammers have been sending messages that mimic KuCoin's branding.",
        "Countries": [],
        "CryptoCurrencies": [
          "Cardano",
          "Bitcoin"
        ]
      },
      {
        "Title": "I Would Take Long Position in ETH, Peter Brandt Says After Bashing Ethereum",
        "Source": "u.today",
        "Url": "https://u.today/i-would-take-long-position-in-eth-peter-brandt-says-after-bashing-ethereum",
        "PublishedOn": "2024-04-05T15:02:00.000Z",
        "Description": "Renowned trader Peter Brandt admitted that he would trade ETH despite his recent critique against it",
        "Language": "en",
        "Image": "https://u.today/sites/default/files/styles/twitter/public/2024-04/46907.jpg",
        "SourceNationality": "us",
        "TitleSentiment": {
          "sentiment": "positive",
          "score": 0.7
        },
        "Summary": "no longer be available. no longer be available.",
        "Countries": [],
        "CryptoCurrencies": [
          "Ethereum",
          "Bitcoin"
        ]
      },
      {
        "Title": "Green Bitcoin Price Rockets 70% After Uniswap Debut as Whale Investors Buy In",
        "Source": "finbold.com",
        "Url": "https://finbold.com/green-bitcoin-price-rockets-70-after-uniswap-debut-as-whale-investors-buy-in",
        "PublishedOn": "2024-04-05T14:55:37.000Z",
        "Description": "Crypto’s latest buzzworthy project is off to an explosive start. After a wildly successful presale, Green Bitcoin’s much-hyped GBTC token … Continue reading",
        "Language": "en",
        "Image": "https://assets.finbold.com/uploads/2024/04/1.png",
        "SourceNationality": "gb",
        "TitleSentiment": {
          "sentiment": "positive",
          "score": 0.98
        },
        "Summary": "Those locking up their GBTC can earn estimated yields of 72% per year for participating in Green Bitcoin’s protocol. But beyond this Predict-to-Earn mechanism is an even more enticing feature – Green Bitcoin’s Proof-of-Stake consensus.",
        "Countries": [],
        "CryptoCurrencies": [
          "Bitcoin",
          "Ethereum"
        ]
      },
      {
        "Title": "Ethereum (ETH) Price Prediction for April 5",
        "Source": "u.today",
        "Url": "https://u.today/ethereum-eth-price-prediction-for-april-5",
        "PublishedOn": "2024-04-05T14:28:00.000Z",
        "Description": "Has correction of Ethereum (ETH) ended yet?",
        "Language": "en",
        "Image": "https://u.today/sites/default/files/styles/twitter/public/2024-04/46902.jpg",
        "SourceNationality": "us",
        "TitleSentiment": {
          "sentiment": "positive",
          "score": 0.76
        },
        "Summary": "On the hourly chart, the price of ETH might have found a local support level of $3,237. On the bigger time frame, the rate of the main altcoin has once again bounced off the $3,214 level.",
        "Countries": [],
        "CryptoCurrencies": [
          "Ethereum"
        ]
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