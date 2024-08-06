const request = require('supertest')
const server = require('./api/server')
const db = require('./data/db-config')

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
})