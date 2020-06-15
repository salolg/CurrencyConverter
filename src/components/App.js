import React from 'react';
import Display from './Display';
import HistoricalTransactions from './HistoricalTransactions';
import LargestTransaction from './LargestTransaction';
import NewTransaction from './NewTransaction';
import SumOfTransactions from './SumOfTransactions';
import axios from 'axios';
import { connect } from 'react-redux';
import { changeExchangeRate } from '../store/actions/actions';

class App extends React.Component {
  state = {
    currentCourse: null,
  }

  componentDidMount() {
    axios.get('http://api.nbp.pl/api/exchangerates/rates/a/eur/')
      .then(response => {
        let value = (Math.round(response.data.rates[0].mid * 100) / 100).toFixed(2);
        this.props.dispatch(changeExchangeRate(value));
        this.setState({ currentCourse: value });
      })
      .catch(_ => {
        this.props.dispatch(changeExchangeRate(0));
      })
  }

  render() {
    return (
      <div style={{ textAlign: 'center', margin: '30px' }}>
        {this.state.currentCourse && <Display currentCourse={this.state.currentCourse} />}
        <NewTransaction currentCourse={this.state.currentCourse} />
        <div style={{ width: '100%', display: 'inlineBlock' }}>
          <div style={{ float: 'left', width: '50%' }}>
            <HistoricalTransactions />
            <SumOfTransactions />
          </div>
          <LargestTransaction style={{ float: 'right', width: '50%' }} />
        </div>
      </div>
    );
  }
}

export default connect()(App);
