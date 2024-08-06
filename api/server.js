const express = require('express')
const server = express()

const dataRouter = require('./data-router')
server.use(express.json())

server.use('/api/data', dataRouter )

module.exports = server