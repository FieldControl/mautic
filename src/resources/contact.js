class Contact {
  constructor (client) {
    this.client = client
  }

  get (id) {
    return this.client.get(`contacts/${id}`)
  }

  list (params = {}) {
    return this.client.get('contacts', params)
  }

  create (contact) {
    delete contact.id
    return this.client.post('contacts/new', contact)
  }

  edit (id, contact) {
    return this.client.patch(`contacts/${id}/edit`, contact)
  }

  editOrCreate (id, contact) {
    return this.client.put(`contacts/${id}/edit`, contact)
  }

  delete (id) {
    return this.client.delete(`contacts/${id}/delete`)
  }
}

module.exports = Contact
