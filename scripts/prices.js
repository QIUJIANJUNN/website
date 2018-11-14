 const Binance = require('node-binance-api')
const binance = require('./marketBuy')

 const binanceWithoutLogin = new Binance().options({})

//
// binance.prices('EOSUSDT', (error, ticker) => {
//   console.log("Price of EOSUSDT: ", ticker);
// });
// binance.prices('ETHUSDT', (error, ticker) => {
//   console.log("Price of ETHUSDT: ", ticker);
// });

const priceCheck = (pair) => {
  binanceWithoutLogin.prices(pair, (error, ticker) => {
    console.log("Price of", pair," :", ticker);
  });
}

const customBuy = (pair, usdtAmount) => {
  binanceWithoutLogin.prices(pair, (error, ticker) => {
    const amount = Number(usdtAmount) / Number(ticker[pair])
    console.log(amount)

    // binance.marketBuy(pair, amount, (err, res) => {
    //   console.log(res)
    //   console.log(err)
    // })
  });

}

// （OK）
// 輸入pair和金額，用限價購買
const customBuy1 = (pair, usdtAmount) => {
  binanceWithoutLogin.prices(pair, (error, ticker) => {
    const amount = Number(usdtAmount) / Number(ticker[pair])
    console.log('Amount:',amount)
    console.log('Price:',Number(ticker[pair]))
    console.log('Pay:',Number(ticker[pair]) * amount)
    const mathFloorAmount = Math.floor(amount*1000000)/1000000
    console.log('Amount(6):',mathFloorAmount)

    binance.buy(pair, mathFloorAmount, Number(ticker[pair]), (err, res) => {
      console.log(res)
      console.log(err)
    })
  });
}

// （OK）
// 1.先購買‘pair’和金額。
// 2.購買到的數量*百分比後，在另一個pair用限價賣出。
const customBuy2 = (pair, usdtAmount, percentage, sellPair) => {
  binanceWithoutLogin.prices(pair, (error, ticker) => {
    const amount = Number(usdtAmount) / Number(ticker[pair])
    console.log('Amount:',amount)
    console.log('Price:',Number(ticker[pair]))
    console.log('Pay:',Number(ticker[pair]) * amount)
    const mathFloorAmount = Math.floor(amount*100)/100
    console.log('Amount(2):',mathFloorAmount)

    binance.buy(pair, mathFloorAmount, Number(ticker[pair]), (err, res) => {
      console.log(res)
      console.log(err)
    })

    // 將得到的數量 * 百分比後，取2位小數點。
    const mathFloorAmountMul = Math.floor(mathFloorAmount * percentage*100)/100
    console.log(mathFloorAmountMul)

    // 查詢另一個pair的最新成交價格
    binanceWithoutLogin.prices(sellPair, (error, ticker) => {
      console.log("Price of",sellPair,":", ticker[sellPair]);
      const sellPairTake6 = Math.floor(ticker[sellPair]*1000000)/1000000
      console.log(sellPairTake6)

      //在另一個pair用限價賣出
      binance.sell(sellPair, mathFloorAmountMul, sellPairTake6, (err, res) => {
        console.log(res)
        console.log(err)
      })
    });
  });
}


// priceCheck('BTCUSDT')
//customBuy('BTCUSDT', 10)

// customBuy1 輸入‘購買交易對’ 和 ’成交金額’
customBuy1('BTCUSDT', 30)
// customBuy2 輸入‘購買交易對’ 和 ’成交金額’ 和 ‘出售的百分比’ 和 ‘出售的交易對’
customBuy2('EOSUSDT', 20, 0.6, 'EOSETH')

// 在 te 的‘as-MacBook-Pro:website a$ ’ 當中執行： ‘node scripts/prices.js’
