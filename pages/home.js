import React from 'react'
import styled from 'styled-components'
import Binance from 'node-binance-api'
// const Binance = require('node-binance-api')

class HomePages extends React.PureComponent {
  state = {
    balances:[
      {
        pair: 'BTC',
        amount: '19.6'
      },
      {
        pair: 'ETH',
        amount: '29.6'
      },
      {
        pair: 'EOS',
        amount: '39.6'
      },
    ],
    num:5,
  }

  componentDidMount() {
    // console.log(Binance);



  }

  render() {
    const {
      balances,
      num,
    } = this.state
    // console.log(balances)
    return (
      <div>
      <div onClick={() => this.setState({ num: num + 1 })}>+ {num}</div>
      {balances
        .filter(x => x.pair === 'BTC')
        .map(x =>{
        return (
          <div>
          {`
            <div>
            <h1>
            ${x.pair}
            </h1>
            <h1>
            ${x.amount}
            </h1>
            </div>
            `}
          </div>
        )
      })}
      {balances.map(x =>{
        return (
          <div>
          <h1>
          {x.pair}
          </h1>
          <h1>
          {x.amount}
          </h1>
          </div>
        )
      })}
      <div>
        <h1>
        123

        </h1>

      </div>

      </div>
    )
  }
}


// const HomePages = () => {
//   return (
//     <div>
//       <h1>
//       123
//
//       </h1>
//
//     </div>
//   )
// }


export default HomePages

//yarn run dev
