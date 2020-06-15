import { connect } from 'react-redux';
import HistoricalTransaction from './HistoricalTransaction';
import { deleteTransaction } from '../store/actions/actions';
import React from 'react';

function HistoricalTransactions(props) {
  return (
    <div>
      <h3> Lista transakcji: </h3>
      {
        props.array.length !== 0 ? (
          <ul>
            {props.array.map(item =>
              <HistoricalTransaction
                id={item.id}
                name={item.name}
                value={item.value}
                exchangeRate={props.exchageRate}
                onClick={() => props.deleteTransaction(item.id)}
              />
            )}
          </ul>
        ) : <span>brak transakcji</span>
      }
    </div>
  );  
}

const mapStateToProps = (state) => {
  return { array: state.transaction, exchageRate: state.exchangeRate }
}

const mapDispatchToProps = dispatch => ({
  deleteTransaction: id => dispatch(deleteTransaction(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(HistoricalTransactions);
