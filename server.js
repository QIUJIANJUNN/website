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
    const { body } = req
    if (body.email) {
      return awsDocClient
        .put({ Item: { email: body.email }, TableName: 'CoinGrandpaUsers', ReturnValues: 'ALL_OLD' })
        .promise()
        .then(() => res.json(postResponse({ data: { email: body.email } })))
    }
    return res.json(postResponse({ error: 'email needed' }))
  })

  server.get('*', (req, res) => handle(req, res))
  /* eslint-disable no-console */
  server.listen(process.env.PORT || 3000, (err) => {
    if (err) throw err
    console.log('Server ready on http://localhost:3000')
  })
})
