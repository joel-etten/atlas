export const calculateBalance = (stocks = []) => {
  let balance = 0
  stocks.forEach((stock) => {
    balance += stock.currentPrice * stock.amount
  })
  return Math.floor(balance)
}
