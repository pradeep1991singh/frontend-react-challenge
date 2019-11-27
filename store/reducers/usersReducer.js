import keyBy from 'lodash/keyBy'

import {
  SEARCH_RESULT_RECEIVED_ACTION,
  GET_USER_FOLLOWERS_COUNT_SUCCESS_ACTION,
  GET_USER_FOLLOWERS_COUNT_FAILED_ACTION,
  GET_USER_FOLLOWING_COUNT_SUCCESS_ACTION,
  GET_USER_FOLLOWING_COUNT_FAILED_ACTION,
  GET_USER_DETAILS_ACTION,
  GET_USER_DETAILS_SUCCESS_ACTION,
  GET_USER_DETAILS_FAILED_ACTION
} from '../constants'

export const initialState = {
  users: {},
  loading: false,
  errors: null
}

const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH_RESULT_RECEIVED_ACTION:
      return {
        users: keyBy(payload.items, (user) => user.login)
      }

    case GET_USER_FOLLOWERS_COUNT_SUCCESS_ACTION:
      return {
        ...state,
        users: {
          ...state.users,
          [payload.username]: {
            ...state.users[payload.username],
            followers_count: payload.followersCount
          }
        },
        errors: null
      }

    case GET_USER_FOLLOWERS_COUNT_FAILED_ACTION:
      return {
        ...state,
        loading: false,
        errors: payload
      }

    case GET_USER_FOLLOWING_COUNT_SUCCESS_ACTION:
      return {
        ...state,
        users: {
          ...state.users,
          [payload.username]: {
            ...state.users[payload.username],
            following_count: payload.followingCount,
          }
        },
        errors: null
      }

    case GET_USER_FOLLOWING_COUNT_FAILED_ACTION:
      return {
        ...state,
        loading: false,
        errors: payload
      }

    case GET_USER_DETAILS_ACTION:
      return {
        ...state,
        loading: true
      }

    case GET_USER_DETAILS_SUCCESS_ACTION:
      return {
        ...state,
        users: {
          ...state.users,
          [payload.login]: payload
        },
        loading: false,
        errors: null
      }

    case GET_USER_DETAILS_FAILED_ACTION:
      return {
        ...state,
        loading: false,
        errors: payload
      }

    default:
      return state
  }
}

export default usersReducer
