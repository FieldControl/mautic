class Contact {
  constructor (client) {
    this.client = client
  }

  create (contact) {
    delete contact.id
    return this.client.post('contacts/new', contact)
  }

  edit (contact) {
    return this.client.patch(`contacts/${contact.id}/edit`, contact)
  }

  delete (contact) {
    return this.client.delete(`contacts/${contact.id}/delete`)
  }

  get (id) {
    return this.client.get(`contacts/${id}`)
  }

  list (params = {}) {
    return this.client.get('contacts', params)
  }
}

module.exports = Contact
