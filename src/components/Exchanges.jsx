import React from "react";
import { useGetCryptoExchangeQuery } from "../services/cryptoExchangeApi";
import { Row, Col, Typography, Avatar, Collapse } from "antd";
import millify from "millify";
import Loader from "./Loader";

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const { data, isFetching } = useGetCryptoExchangeQuery();
  if (isFetching) return <Loader />;

  return (
    <>
      <Row className="topic-heading-container">
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Trust Score</Col>
        <Col span={6}>Link</Col>
      </Row>

      <Row>
        {data.map((exchange) => (
          <Col span={22}>
            <Collapse   size="large">
              <Panel
              
                key={exchange.id}
                showArrow={false}
                header={
                  <Row key={exchange.id}>
                    <Col span={6}>
                      <Text>
                        <strong>{exchange.trust_score_rank}.</strong>
                      </Text>

                      <Avatar
                        className="exchange-image"
                        src={exchange.image}
                      ></Avatar>
                      <Text>{exchange.name}</Text>
                    </Col>
                    <Col span={6}>
                      ${millify(exchange.trade_volume_24h_btc_normalized)}
                    </Col>
                    <Col span={6}>{exchange.trust_score}</Col>
                    <Col span={6}>
                      <a href={exchange.url} target="_blank" rel="noreferrer">
                        {exchange.name}'s Offical Website
                      </a>
                    </Col>
                  </Row>
                }
              >
                {exchange.description ? (
                  <p>{exchange.description}</p>
                ) : (
                  `Sorry no description found but you can checkout ${exchange.name}'s official website for more info, the link is already given. Thank you!`
                )}
              </Panel>
            </Collapse>
          </Col>
        ))}
      </Row>

    </>
  );
};

export default Exchanges;
