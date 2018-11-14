const Binance = require('node-binance-api')

const binance = new Binance().options({
  APIKEY: '',
  APISECRET: '',
  useServerTime: true, // If you get timestamp errors, synchronize to server time at startup
  test: false // If you want to use sandbox mode where orders are simulated
})

// const quantity = 10
//
// binance.marketBuy('BTCUSDT', 0.002, (err, res) => {
//   console.log(res)
//   console.log(err)
// })
// binance.buy("BTCUSDT", 0.006, 6000);

module.exports = binance
