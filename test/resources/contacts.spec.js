/* eslint-disable no-undef */
const nock = require('nock')
const Mautic = require('../../src/index')
const client = new Mautic({
  baseUrl: 'http://mautic-instance/api',
  auth: {
      username: 'luiz',
      password: 'shhhhhhhhhhhhhh!:x'
  }
})

describe('Contact', () => {
  it('should list contacts', async () => {
    nock('http://mautic-instance/api').get('/contacts').reply(200, {})
    const response = await client.contacts.list()
    expect(response.status).toBe(200)
  })
})
