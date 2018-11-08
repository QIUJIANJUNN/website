const next = require('next')
const express = require('express')
const bodyParser = require('body-parser')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use(bodyParser.json())

  server.get('*', (req, res) => handle(req, res))

  /* eslint-disable no-console */
  server.listen(process.env.PORT || 3000, (err) => {
    if (err) throw err
    console.log('Server ready on http://localhost:3000')
  })
})
