const db = require('../data/db-config')

const getAll = () => {
    return db('data')
}

const getById = (id) => {
    return db('data')
    .where('id',id)
    .first()
}

const create = (data) => {
return db('data')
.insert(data)
.then(([id]) => getById(id))
}

const getByFilter = (filter) => {
    return db('data')
    .where('name',filter)
    .first()
}

module.exports = {
     getAll, getById, create, getByFilter
}