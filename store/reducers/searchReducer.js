import {
  UPDATE_SEARCH_ACTION,
  SEARCH_USER_ACTION,
  SEARCH_RESULT_RECEIVED_ACTION,
  SEARCH_RESULT_FAILED_ACTION,
  NEXT_RESULT_INIT_ACTION,
  CLEAR_SEARCH_ACTION
} from '../constants'

export const initialState = {
  input: '',
  pageNumber: 1,
  pageSize: 10,
  hasNextPage: false,
  loading: false,
  errors: null
}

const searchReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_SEARCH_ACTION:
      return {
        ...state,
        input: payload,
      }
    case SEARCH_USER_ACTION:
      const { input, pageNumber } = payload
      return {
        ...state,
        input,
        pageNumber,
        hasNextPage: false,
        loading: true
      }
    case SEARCH_RESULT_RECEIVED_ACTION: {
      return {
        ...state,
        hasNextPage: payload.total_count > state.pageSize,
        loading: false,
        errors: null
      }
    }
    case SEARCH_RESULT_FAILED_ACTION: {
      return {
        ...state,
        loading: false,
        errors: payload
      }
    }
    case CLEAR_SEARCH_ACTION: {
      return {...initialState}
    }
    default:
      return state
  }
}

export default searchReducer
