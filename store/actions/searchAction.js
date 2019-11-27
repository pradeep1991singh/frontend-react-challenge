import {
  SEARCH_USER_ACTION,
  SEARCH_RESULT_RECEIVED_ACTION,
  SEARCH_RESULT_FAILED_ACTION,
  NEXT_RESULT_INIT_ACTION,
  UPDATE_SEARCH_ACTION,
  CLEAR_SEARCH_ACTION
} from '../constants'

const searchRequest = (payload) => ({
  type: SEARCH_USER_ACTION,
  payload
})

const searchResultReceivedAction = (payload) => ({
  type: SEARCH_RESULT_RECEIVED_ACTION,
  payload
})

const searchRequestFailedAction = (error) => ({
  type: SEARCH_RESULT_FAILED_ACTION,
  payload: error
})

const loadNext = (payload) => ({
  type: NEXT_RESULT_INIT_ACTION,
  payload
})

const updateSearchInput = payload => ({
  type: UPDATE_SEARCH_ACTION,
  payload
})

const clearSearchInput = () => ({
  type: CLEAR_SEARCH_ACTION
})

export {
  loadNext,
  searchRequest,
  searchResultReceivedAction,
  searchRequestFailedAction,
  updateSearchInput,
  clearSearchInput
}
