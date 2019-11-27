import {
  GET_USER_FOLLOWERS_COUNT_ACTION,
  GET_USER_FOLLOWERS_COUNT_SUCCESS_ACTION,
  GET_USER_FOLLOWERS_COUNT_FAILED_ACTION,
  GET_USER_FOLLOWING_COUNT_ACTION,
  GET_USER_FOLLOWING_COUNT_SUCCESS_ACTION,
  GET_USER_FOLLOWING_COUNT_FAILED_ACTION,
  GET_USER_DETAILS_ACTION,
  GET_USER_DETAILS_SUCCESS_ACTION,
  GET_USER_DETAILS_FAILED_ACTION
} from '../constants'

const getUserFollowersCountAction = (payload) => ({
  type: GET_USER_FOLLOWERS_COUNT_ACTION,
  payload
})

const getUserFollowersCountSuccessAction = (payload) => ({
  type: GET_USER_FOLLOWERS_COUNT_SUCCESS_ACTION,
  payload
})

const getUserFollowersCountFailedAction = (error) => ({
  type: GET_USER_FOLLOWERS_COUNT_FAILED_ACTION,
  payload: error
})

const getUserFollowingCountAction = (payload) => ({
  type: GET_USER_FOLLOWING_COUNT_ACTION,
  payload
})

const getUserFollowingCountSuccessAction = (payload) => ({
  type: GET_USER_FOLLOWING_COUNT_SUCCESS_ACTION,
  payload
})

const getUserFollowingCountFailedAction = (error) => ({
  type: GET_USER_FOLLOWING_COUNT_FAILED_ACTION,
  payload: error
})

const getUserDetailsAction = (payload) => ({
  type: GET_USER_DETAILS_ACTION,
  payload
})

const getUserDetailsSuccessAction = (payload) => ({
  type: GET_USER_DETAILS_SUCCESS_ACTION,
  payload
})

const getUserDetailsFailedAction = (error) => ({
  type: GET_USER_DETAILS_FAILED_ACTION,
  payload: error
})

export {
  getUserFollowersCountAction,
  getUserFollowersCountSuccessAction,
  getUserFollowersCountFailedAction,
  getUserFollowingCountAction,
  getUserFollowingCountSuccessAction,
  getUserFollowingCountFailedAction,
  getUserDetailsAction,
  getUserDetailsSuccessAction,
  getUserDetailsFailedAction
}
