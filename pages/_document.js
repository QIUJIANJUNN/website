// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import styledNormalize from 'styled-normalize'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const page = ctx.renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps, styleTags, ...page }
  }

  render() {
    return (
      <html>
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge, chrome=1"/>
          <meta charSet="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1,shrink-to-fit=no"/>
          <meta name="title" content="迅速開發dApp"/>
          <meta name="description" content="迅速開發dApp"/>
          <meta name="keywords" content="相信你已經看不少多公司在徵『全端工程師』『dApp工程師」』，換句話說『智能合約開發經驗＋前端開發經驗』。 企業已經嗅到區塊鏈潛在的商機！但是不足的是...懂得『開發dApp』的工程師。"/>
          {/* Need to Change */}
          <link rel="icon" type="image/x-icon" href="/static/coingrandpa.png"/>
          <meta property="og:type" content="website"/>
          <meta property="og:url" content="https://coingrandpa.com.tw/"/>
          <meta property="og:title" content="迅速開發dApp"/>
          <meta property="og:image" content="/static/coingrandpa.png"/>
          <meta property="og:image:secure_url" content="/static/coingrandpa.png"/>
          <meta property="og:description" content="相信你已經看不少多公司在徵『全端工程師』『dApp工程師」』，換句話說『智能合約開發經驗＋前端開發經驗』。 企業已經嗅到區塊鏈潛在的商機！但是不足的是...懂得『開發dApp』的工程師。"/>
          <meta property="og:site_name" content="開發dApp"/>
          <style>{`
            ${styledNormalize}
            html, body{
              font-family:Helvetica Neue, Helvetica, Arial, PingFang TC, 微软雅黑, Microsoft YaHei, 华文细黑, STHeiti, sans-serif;
            }
          `}
        </style>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
