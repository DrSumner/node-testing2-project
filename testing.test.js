/* eslint-disable no-undef */
const request = require('supertest')
const server = require('./api/server')
const db = require('./data/db-config')

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
})
beforeEach(async () => {
    await db.seed.run()
  })
  afterAll(async () => {
    await db.destroy()
  })

  it('[0] sanity check', () => {
    expect(true).not.toBe(false)
  })

  describe('server.js', () => {
    describe('[GET] /api/data', () => {
        it(' [1] gets the data', async () => {
            const res = await request(server).get('/api/data')
            expect(res.body.message).toBeDefined()
        })
    })
  })