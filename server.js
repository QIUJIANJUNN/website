const moment = require('moment')
const next = require('next')
const express = require('express')
const bodyParser = require('body-parser')
const AWS = require('aws-sdk')

const awsDocClient = new AWS.DynamoDB.DocumentClient({
  region: 'ap-northeast-1',
  accessKeyId: '',
  secretAccessKey: '',
  setPromisesDependency: Promise,
})

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const postResponse = ({ data = null, error = null }) => ({
  data,
  metadata: {
    error,
    timestamp: moment().valueOf(),
  },
})

app.prepare().then(() => {
  const server = express()

  server.use(bodyParser.json())
  server.post('/api/users', (req, res) => {
    const { body: { email, name, message } } = req
    if (email || name) {
      const data = Object.assign(
        {},
        { email },
        { name },
        message || {},
      )
      return awsDocClient
        .put({ Item: data, TableName: 'CoinGrandpaUsers', ReturnValues: 'ALL_OLD' })
        .promise()
        .then(() => res.json(postResponse({ data })))
    }
    return res.json(postResponse({ error: 'email needed' }))
  })

  server.get('/api/passions/count', (req, res) => awsDocClient
    .put({ Item: { timestamp: moment().valueOf().toString() }, TableName: 'Passions', ReturnValues: 'ALL_OLD' })
    .promise()
    .then(() => awsDocClient
      .scan({ TableName: 'Passions' })
      .promise()
      .then(response => res.json(postResponse({ data: { count: response.ScannedCount } })))))

  server.get('/api/users/count', (req, res) => awsDocClient
    .scan({ TableName: 'CoinGrandpaUsers' })
    .promise()
    .then(response => res.json(postResponse({ data: { count: response.ScannedCount } }))))

  server.get('*', (req, res) => handle(req, res))
  /* eslint-disable no-console */
  server.listen(process.env.PORT || 3000, (err) => {
    if (err) throw err
    console.log('Server ready on http://localhost:3000')
  })
})
