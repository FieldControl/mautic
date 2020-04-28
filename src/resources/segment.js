class Segment {
  constructor (client) {
    this.client = client
  }

  addContact (segmentId, contactId) {
    return this.client.post(`segments/${segmentId}/contact/${contactId}/add`)
  }

  removeContact (segmentId, contactId) {
    return this.client.post(`segments/${segmentId}/contact/${contactId}/remove`)
  }
}

module.exports = Segment
