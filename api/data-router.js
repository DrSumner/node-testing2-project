const express = require('express')
const data = require('./data-model')
const router = express.Router()
const {checkId} = require('./data-middleware')

router.get('/', (req,res,next) => {
data.getAll()
.then(data => res.json(data))
.catch(next)
})

router.get("/:id", checkId, (req,res,next) => {
    res.json(req.data)
})

router.use((err,req,res,next) => { // eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack,
      });
})

module.exports = router