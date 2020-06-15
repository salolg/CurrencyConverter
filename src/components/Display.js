import React from 'react';
import { InputNumber } from 'antd';
import { connect } from 'react-redux';
import { changeExchangeRate } from '../store/actions/actions';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: this.props.exchageRate
    }
  }
  
  handleOnChange = (value) => {
    if (Number.isNaN(value)) {
      this.props.dispatch(changeExchangeRate(0));
      this.setState({ inputValue: 0 });
    } else {
      this.props.dispatch(changeExchangeRate(value));
    }
    this.setState({ inputValue: value });
  }

  render() {
    const input = <InputNumber
      min={0}
      step={0.01}
      style={{ width: '100px' }}
      type="number"
      value={this.state.inputValue}
      onChange={this.handleOnChange} autoFocus={false}
    />
    return <div >
      1 EURO = {input} PLN
  </div>;
  }
}

const mapStateToProps = (state) => {
  return { exchageRate: state.exchangeRate }
}

export default connect(mapStateToProps)(Display);
