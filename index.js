const express = require('express')
const app = express()
const limitReq = require('./middleware/middleware.limit')
const logger = require('morgan')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(logger('dev'))

app.get('/', limitReq, (req, res) => {
  res
    .status(200)
    .json({ method: req.method, status: res.statusCode, message: 'Rate limit api middleware working' })
})

app.post('/', limitReq, (req, res) => {
  res.status(200).json({ method: req.method, status: res.statusCode, message: `My name is ${req.body.name}` })
})

app.listen(3000, () => console.log(`Server is running PORT on ${3000}`))
