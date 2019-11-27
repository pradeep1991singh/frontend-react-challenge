import api from './api'

const getUsersApi = ({queryString, pageNumber, pageSize = 10}) =>
  api.get(`/search/users?q=${queryString}&page=${pageNumber}&per_page=${pageSize}`)

export {
  getUsersApi,
}
