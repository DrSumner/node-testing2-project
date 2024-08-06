const db = require('../data/db-config')

const getAll = () => {
    return db('data')
}

const getById = (id) => {
    return db('data')
    .where('id',id)
    .first()
    
}

module.exports = {
     getAll, getById,
}