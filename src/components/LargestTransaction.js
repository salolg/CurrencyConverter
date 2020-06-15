import React from 'react';
import { connect } from 'react-redux';
import { Card, Col, Row } from 'antd';

function LargestTransaction(props) {
  let max = {
    id: null,
    name: '',
    value: null
  };
  if (props.array.length !== 0) {
    max.value = props.array[0].value;
    max.id = props.array[0].id;
    max.name = props.array[0].name;
    props.array.forEach(element => {
      if (element.value > max.value) {
        max = {
          id: element.id,
          name: element.name,
          value: element.value
        }
      }
    });
    const plnValue = max.value * props.exchageRate;
    return (
      <div>
        <h3 >
          Największa transakcja:
      </h3>
        <Row gutter={16}>
          <Col span={8}>
            <Card bordered={false}>
              {max.name}
            </Card>
          </Col>
          <Col span={8}>
            <Card bordered={false}>
              {max.value} EURO
        </Card>
          </Col>
          <Col span={8}>
            <Card bordered={false}>
              {(Math.round(plnValue * 100) / 100).toFixed(2)} PLN
        </Card>
          </Col>
        </Row>
      </div>
    );
  } else {
    return null;
  }
}

const mapStateToProps = (state) => {
  return { array: state.transaction, exchageRate: state.exchangeRate }
}

export default connect(mapStateToProps)(LargestTransaction);
