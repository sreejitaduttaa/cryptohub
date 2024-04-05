import React, { useEffect, useState } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input } from 'antd'

import { useGetCryptosQuery } from '../services/cryptoApi'
import Loader from './Loader'

const Cryptocurrencies = ({simplified}) => {

  const count = simplified?12:100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]); 
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);

    const filteredData = cryptosList?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchTerm));

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);


  if (isFetching) return <Loader/>;


  return (
    <>

    {/* search bar */}
   { simplified
    ? <></>
    : <input class="search-input" type="text" placeholder="Search" onChange={(e)=>setSearchTerm(e.target.value)} ></input>
  }
    
  {/* //   <div className='search-crypto'>
  //   <input placeholder='Search Cryptocurrency' onChange={(e)=>setSearchTerm(e.target.value)}/>
  // </div>} */}

    {/* cryptos list */}
    <Row gutter={[24, 24]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={7}
            className="crypto-card"
            key={currency.uuid}
          >

            <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className="crypto-image" alt="" src={currency.iconUrl} />}
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {currency.change}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Cryptocurrencies