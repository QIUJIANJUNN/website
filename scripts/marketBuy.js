const Binance = require('node-binance-api')

const binance = new Binance().options({
  APIKEY: '',
  APISECRET: '',
  useServerTime: true, // If you get timestamp errors, synchronize to server time at startup
  // test: true // If you want to use sandbox mode where orders are simulated
})

const quantity = '50'

binance.marketBuy('BTCUSDT', quantity)
