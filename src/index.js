const axios = require('axios')
const {
  Contact,
  Segment,
  Company
} = require('./resources')

const responseWith = (response) => ({
  status: response.status,
  data: response.data || undefined
})

const responseErrWith = (err) => ({
  status: err.response.status,
  data: err.response.data || undefined
})

class Client {
  constructor ({ baseUrl, auth }) {
    this.auth = auth
    this.baseUrl = baseUrl
    this.headers = {
      'User-Agent': 'mautic/0.0.1 - unofficial node bindings'
    }
    this.contacts = new Contact(this)
    this.segments = new Segment(this)
    this.companies = new Company(this)
  }

  get (resourceUri, params = {}) {
    return axios.get(`${this.baseUrl}/${resourceUri}`, {
      params: params,
      headers: this.headers,
      auth: this.auth
    }).then(responseWith).catch(responseErrWith)
  }

  post (resourceUri, payload = {}) {
    return axios.post(`${this.baseUrl}/${resourceUri}`, payload, {
      headers: this.headers,
      auth: this.auth
    }).then(responseWith).catch(responseErrWith)
  }

  put (resourceUri, payload) {
    return axios.put(`${this.baseUrl}/${resourceUri}`, payload, {
      headers: this.headers,
      auth: this.auth
    }).then(responseWith).catch(responseErrWith)
  }

  patch (resourceUri, payload) {
    return axios.patch(`${this.baseUrl}/${resourceUri}`, payload, {
      headers: this.headers,
      auth: this.auth
    }).then(responseWith).catch(responseErrWith)
  }

  delete (resourceUri) {
    return axios.delete(`${this.baseUrl}/${resourceUri}`, {
      headers: this.headers,
      auth: this.auth
    }).then(responseWith).catch(responseErrWith)
  }
}

module.exports = Client
