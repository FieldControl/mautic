class Company {
  constructor (client) {
    this.client = client
  }

  get (companyId) {
    return this.client.get(`companies/${companyId}`)
  }

  list (data = {}) {
    return this.client.get('companies', data)
  }

  create (company) {
    return this.client.post('companies/new', company)
  }

  edit (companyId, company) {
    return this.client.patch(`companies/${companyId}/edit`, company)
  }

  editOrCreate (companyId, company) {
    return this.client.put(`companies/${companyId}/edit`, company)
  }

  delete (companyId) {
    return this.client.delete(`companies/${companyId}/delete`)
  }

  addContact (companyId, contactId) {
    return this.client.post(`companies/${companyId}/contact/${contactId}/add`)
  }

  removeContact (companyId, contactId) {
    return this.client.post(`companies/${companyId}/contact/${contactId}/remove`)
  }
}

module.exports = Company
