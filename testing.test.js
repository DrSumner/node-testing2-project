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
        it(' [1] gets all the data', async () => {
            const res = await request(server).get('/api/data')
            expect(res.body).toBeDefined()
        })
        it(' [2] get by id', async () => {
            const res = await request(server).get('/api/data/1')
            expect(res.body).toStrictEqual({
                "id": 1,
                "name": "Bob",
                "age": 44
            })
        })
        it(' [3] correct error on non existing id', async () => {
            const res = await request(server).get('/api/data/111')
            expect(res.body.message).toMatch(/invalid id/i)
        })
    })
  })