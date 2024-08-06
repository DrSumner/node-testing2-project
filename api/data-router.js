const express = require('express')
const data = require('./data-model')
const router = express.Router()
const {checkId, validateBody, nameCheck} = require('./data-middleware')

router.get('/', (req,res,next) => {
data.getAll()
.then(data => res.json(data))
.catch(next)
})

router.get("/:id", checkId, (req,res) => {
    res.json(req.data)
})

router.post('/', validateBody, nameCheck, (req,res,next) => {
    data.create(req.body)
    .then( data => res.status(201).json(data))
    .catch(next)
})

router.use((err,req,res,next) => { // eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack,
      });
})

module.exports = router