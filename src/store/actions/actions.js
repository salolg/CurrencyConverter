let transactionId = 0
export const addTransaction = (name, value) => {
  return {
    type: 'ADD_TRANSACTION',
    id: transactionId++,
    name: name,
    value: value
  }
}

export const deleteTransaction = id => ({
  type: 'DELETE_TRANSACTION',
  id
})

export const changeExchangeRate = value => ({
  type: 'CHANGE_EXCHANGE_RATE',
  value
})
