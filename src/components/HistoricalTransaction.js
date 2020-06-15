import React from 'react';
import { Card, Col, Row } from 'antd';

function HistoricalTransaction(props) {
  const plnValue = props.exchangeRate * props.value;
  return <div>
    <Row gutter={16}>
      <Col span={6}>
        <Card bordered={false}>
          {props.name}
        </Card>
      </Col>
      <Col span={6}>
        <Card bordered={false}>
          {props.value} EURO
      </Card>
      </Col>
      <Col span={6}>
        <Card bordered={false}>
          {(Math.round(plnValue * 100) / 100).toFixed(2)} PLN
      </Card>
      </Col>
      <Col span={6}>
        <Card bordered={false}>
          <button onClick={props.onClick}>USUN</button>
        </Card>
      </Col>
    </Row>
  </div>;
}

export default HistoricalTransaction;
