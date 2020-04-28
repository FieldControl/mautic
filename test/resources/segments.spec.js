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

describe('Segment', () => {
  it('should add contact to segment', async () => {
    nock('http://mautic-instance/api').post('/segments/1/contact/2/add').reply(200, {})
    const response = await client.segments.addContact(1, 2)
    expect(response.status).toBe(200)
  })

  it('should remove contact of segment', async () => {
    nock('http://mautic-instance/api').post('/segments/1/contact/2/remove').reply(200, {})
    const response = await client.segments.removeContact(1, 2)
    expect(response.status).toBe(200)
  })
})
