const Binance = require('node-binance-api')

const binance = new Binance().options({})


binance.prices('EOSUSDT', (error, ticker) => {
  console.log("Price of EOSUSDT: ", ticker);
});
binance.prices('ETHUSDT', (error, ticker) => {
  console.log("Price of ETHUSDT: ", ticker);
});
binance.prices('BTCUSDT', (error, ticker) => {
  console.log("Price of BTCUSDT: ", ticker);
});
