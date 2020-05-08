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

describe('Company', () => {
  it('should get company by id', async () => {
    nock('http://mautic-instance/api').get('/companies/1').reply(200, {})
    const response = await client.companies.get(1)
    expect(response.status).toBe(200)
  })

  it('should list companies', async () => {
    nock('http://mautic-instance/api').get('/companies').reply(200, {})
    const response = await client.companies.list()
    expect(response.status).toBe(200)
  })

  it('should create a new company', async () => {
    nock('http://mautic-instance/api').post('/companies/new').reply(201, {})
    const response = await client.companies.create({
      companyname: 'test',
      companyemail: 'test@company.com',
      companycity: 'Raleigh',
      overwriteWithBlank: true
    })
    expect(response.status).toBe(201)
  })

  it('should edit or create a company', async () => {
    nock('http://mautic-instance/api').put('/companies/2/edit').reply(200, {})
    const response = await client.companies.editOrCreate(2, {
      companyname: 'test',
      companyemail: 'test@company.com',
      companycity: 'Raleigh',
      overwriteWithBlank: true
    })
    expect(response.status).toBe(200)
  })

  it('should edit given company', async () => {
    nock('http://mautic-instance/api').patch('/companies/2/edit').reply(200, {})
    const response = await client.companies.edit(2, {
      companyname: 'test',
      companyemail: 'test@company.com',
      companycity: 'Raleigh',
      overwriteWithBlank: true
    })
    expect(response.status).toBe(200)
  })

  it('should delete given company', async () => {
    nock('http://mautic-instance/api').delete('/companies/3/delete').reply(200, {})
    const response = await client.companies.delete(3)
    expect(response.status).toBe(200)
  })

  it('should add contact to company', async () => {
    nock('http://mautic-instance/api').post('/companies/1/contact/2/add').reply(200, {})
    const response = await client.companies.addContact(1, 2)
    expect(response.status).toBe(200)
  })

  it('should remove contact of company', async () => {
    nock('http://mautic-instance/api').post('/companies/1/contact/2/remove').reply(200, {})
    const response = await client.companies.removeContact(1, 2)
    expect(response.status).toBe(200)
  })
})
