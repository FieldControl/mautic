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

  it('should add points for given contact', async () => {
    nock('http://mautic-instance/api').post('/contacts/3/points/plus/99').reply(200, {})
    const response = await client.contacts.addPoints(3, 99, {
      eventname: 'SubscriptionPage',
      eventaction: 'Click'
    })
    expect(response.status).toBe(200)
  })

  it('should subtract points for given contact', async () => {
    nock('http://mautic-instance/api').post('/contacts/4/points/minus/88').reply(200, {})
    const response = await client.contacts.subtractPoints(4, 88, {
      eventname: 'SubscriptionPage',
      eventaction: 'Bounce'
    })
    expect(response.status).toBe(200)
  })

  it('should get contact notes', async () => {
    nock('http://mautic-instance/api').get('/contacts/5/notes').reply(200, {})
    const response = await client.contacts.getNotes(5)
    expect(response.status).toBe(200)
  })

  it('should get contact events activity', async () => {
    nock('http://mautic-instance/api').get('/contacts/6/activity').reply(200, {})
    const response = await client.contacts.getActivityEvents(6)
    expect(response.status).toBe(200)
  })

  it('should get contact companies', async () => {
    nock('http://mautic-instance/api').get('/contacts/1/companies').reply(200, {})
    const response = await client.contacts.getCompanies(1)
    expect(response.status).toBe(200)
  })

  it('should add utm tags to contact', async () => {
    nock('http://mautic-instance/api').post('/contacts/1/utm/add').reply(200, {})
    const response = await client.contacts.addUTMTags(1, {
      utm_campaign: 'apicampaign',
      utm_source: 'fb',
      utm_medium: 'social',
      utm_content: 'fbad',
      utm_term: 'mautic api',
      useragent: 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:50.0) Gecko/20100101 Firefox/50.0',
      url: '/product/fbad01/',
      referer: 'https://google.com/q=mautic+api',
      query: 'cid=abc&cond=new',
      remotehost: 'example.com',
      lastActive: '2017-01-17T00:30:08+00:00'
    })
    expect(response.status).toBe(200)
  })

  it('should remove utm tags from contact', async () => {
    nock('http://mautic-instance/api').post('/contacts/1/utm/99/remove').reply(200, {})
    const response = await client.contacts.removeUTMTags(1, 99)
    expect(response.status).toBe(200)
  })

  it('should list contact segments', async () => {
    nock('http://mautic-instance/api').get('/contacts/1/segments').reply(200, {})
    const response = await client.contacts.listSegments(1)
    expect(response.status).toBe(200)
  })
})
