import React from 'react';
import { connect } from 'react-redux';

function SumOfTransactions(props) {
  let sum = 0;
  props.array.forEach(element => {
    sum = sum + element.value
  });
  return (
    <h4 style={{ marginTop: '30px' }}>
      Suma wszystkich transakcji: {sum} EURO
    </h4>
  );
}

const mapStateToProps = (state) => {
  return { array: state.transaction }
}

export default connect(mapStateToProps)(SumOfTransactions);
