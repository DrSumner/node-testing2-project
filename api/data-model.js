const db = require('../data/db-config')

const getAll = () => {
    return db('data')
}

module.exports = {
     getAll,
}