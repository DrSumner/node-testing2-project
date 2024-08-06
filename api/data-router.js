const express = require('express')
const data = require('./data-model')
const router = express.Router()

router.get('/', (req,res,next) => {
data.getAll()
.then(data => res.json(data))
.catch(next)
})

module.exports = router