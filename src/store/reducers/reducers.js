import { combineReducers } from 'redux';
const addTransaction = (state, action) => {
  return [
    ...state,
    {
      id: action.id,
      name: action.name,
      value: action.value
    }
  ]
}

const deleteTransaction = (state, action) => {
  return state.filter(element => element.id !== action.id)
}

const transaction = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TRANSACTION': return addTransaction(state, action);
    case 'DELETE_TRANSACTION': return deleteTransaction(state, action);
    default:
      return state;
  }
}

const exchangeRate = (state = 0, action) => {
  console.log(state)
  switch (action.type) {
    case 'CHANGE_EXCHANGE_RATE':
      return action.value;
    default:
      return state;
  }
}

export default combineReducers({
  transaction,
  exchangeRate
})