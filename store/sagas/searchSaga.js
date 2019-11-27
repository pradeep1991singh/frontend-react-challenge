import { put, takeLatest, call, all } from 'redux-saga/effects'

import { SEARCH_USER_ACTION } from '../constants'
import {
  getUsersApi
} from 'services'
import {
  searchResultReceivedAction,
  searchRequestFailedAction
} from '../actions'

function* getSearchResults(action) {
  try {
    const { input, pageNumber } = action.payload
    const users = yield call(getUsersApi, { queryString: input, pageNumber })
    yield put(searchResultReceivedAction(users.data))
  } catch (error) {
    yield put(searchRequestFailedAction(JSON.stringify(error)))
  }
}

function* watchSearchRequest() {
  yield takeLatest(SEARCH_USER_ACTION, getSearchResults)
}

function* searchSaga() {
  yield all([watchSearchRequest()])
}

export default searchSaga
