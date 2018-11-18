const Binance = require('node-binance-api')
const binance = require('./marketBuy')

const binanceWithoutLogin = new Binance().options({})

// 1.限價購買（輸入 ‘pair’ 和 ‘金額’）
const customBuy1 = (args) => {
  const { pair, amount } = args
  binanceWithoutLogin.prices(pair, (error, ticker) => {
    // console.log('Amount:',amountInUsd)
    // console.log('Price:',Number(ticker[pair]))
    // console.log('Pay:',Number(ticker[pair]) * amountInUsd)

    const amountInUsd = Number(amount) / Number(ticker[pair])
    const mathFloorAmount = Math.floor(amountInUsd*1000000)/1000000
    console.log(mathFloorAmount)

    binance.buy(pair, mathFloorAmount, Number(ticker[pair]), (err, res) => {
      console.log(res)
      console.log(err)
    })
  });
}

// 2.限價購買+限價賣出（輸入‘購買交易對’ 和 ’成交金額’ 和 ‘出售的百分比’ 和 ‘出售的交易對’）
// 2-1.先購買‘pair’和金額。
// 2-2.購買到的數量*百分比後，在另一個pair用限價賣出。
const customBuy2 = (args) => {
  const { pair, amount, percentOfSell, pariOfSell } = args
  binanceWithoutLogin.prices(pair, (error, ticker) => {
    const amount = Number(amount) / Number(ticker[pair])
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
    const mathFloorAmountMul = Math.floor(mathFloorAmount * percentOfSell*100)/100
    console.log(mathFloorAmountMul)

    // 查詢另一個pair的最新成交價格
    binanceWithoutLogin.prices(pairOfSell, (error, ticker) => {
      console.log("Price of",sellPair,":", ticker[pairOfSell]);
      const sellPairTake6 = Math.floor(ticker[pairOfSell]*1000000)/1000000
      console.log(sellPairTake6)

      //在另一個pair用限價賣出
      binance.sell(pairOfSell, mathFloorAmountMul, sellPairTake6, (err, res) => {
        console.log(res)
        console.log(err)
      })
    });
  });
}

// 3.查詢餘額（輸入 ‘Token名稱’）
const balanceCheck = (name) => {
  binance.balance((error, balances) => {
    if ( error ) return console.error(error);
    // console.log("balances()", balances);
    console.log(name,"balance: ", balances[name].available);
  });
}

// 4.查詢價格（輸入 ‘Token名稱’ 與 ‘作為基數的Token名稱’）
const priceCheck2 = (args) => {
  const {pair, standardSystem} = args
  pairWithstandard = pair+standardSystem
  binanceWithoutLogin.prices(pairWithstandard, (error, ticker) => {
    console.log(ticker[pairWithstandard]);
  });
}

// 1.限價購買（輸入 ‘pair’ 和 ‘金額’）
customBuy1({
  pair: 'BTCUSDT',
  amount: 30,
})


// 2.限價購買+限價賣出（輸入‘購買交易對’ 和 ’成交金額’ 和 ‘出售的百分比’ 和 ‘出售的交易對’）
customBuy2({
  pair: 'EOSUSDT',
  amount: 20,
  percentOfSell: 0.6,
  pariOfSell: 'EOSETH',
})

// 3.查詢餘額（輸入 ‘Token名稱’）
balanceCheck('EOS')

// 4.查詢價格（輸入 ‘Token名稱’ 與 ‘作為基數的Token名稱’）
priceCheck2({
  pair: 'EOS',
  standardSystem: 'USDT',
})

// 在 te 的‘as-MacBook-Pro:website a$ ’ 當中執行： ‘node scripts/prices.js’
// 123

//////////////////////////////test//////////////////////////////////
