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

  it('should get contact by id', async () => {
    nock('http://mautic-instance/api').get('/contacts/1').reply(200, {})
    const response = await client.contacts.get(1)
    expect(response.status).toBe(200)
  })

  it('should create a new contact', async () => {
    nock('http://mautic-instance/api').post('/contacts/new').reply(201, {})
    const response = await client.contacts.create({
      firstname: 'Luiz',
      lastname: 'Freneda',
      email: 'luiz@freneda.com.br',
      owner: 1
    })
    expect(response.status).toBe(201)
  })

  it('should edit or create a contact', async () => {
    nock('http://mautic-instance/api').put('/contacts/2/edit').reply(200, {})
    const response = await client.contacts.editOrCreate(2, {
      firstname: 'Luiz',
      lastname: 'Junior',
      email: 'lfreneda@gmail.com',
      owner: 1
    })
    expect(response.status).toBe(200)
  })

  it('should edit given contact', async () => {
    nock('http://mautic-instance/api').patch('/contacts/2/edit').reply(200, {})
    const response = await client.contacts.edit(2, {
      firstname: 'Luiz',
      lastname: 'Junior',
      email: 'lfreneda@gmail.com',
      owner: 1
    })
    expect(response.status).toBe(200)
  })

  it('should delete given contact', async () => {
    nock('http://mautic-instance/api').delete('/contacts/3/delete').reply(200, {})
    const response = await client.contacts.delete(3)
    expect(response.status).toBe(200)
  })
})
