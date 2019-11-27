import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    Accept: 'application/vnd.github.v3+json',
  },
  transformResponse: [function (data) {
    try {
      return JSON.parse(data)
    } catch (error) {
      return error
    }
  }]
})

export const handlePromise = (promise) =>
  promise
    .then(data => data)
    .catch(error => error)

export default api
