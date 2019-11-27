import api, { handlePromise } from './api'

const getUserDetailsApi = username =>
  api.get(`/users/${username}`)

const getUserFollowersApi = username =>
  api.get(`/users/${username}/followers`)

const getUserFollowingApi = username =>
  api.get(`/users/${username}/following`)

const fetcher = apiUrl =>
  api.get(apiUrl)

export {
  getUserDetailsApi,
  getUserFollowersApi,
  getUserFollowingApi,
  fetcher
}
