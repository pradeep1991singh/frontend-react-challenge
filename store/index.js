import withRedux from 'next-redux-wrapper'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'
import rootSaga from './sagas'

import { initialState as initialSearchState } from './reducers/searchReducer'
import { initialState as initialUsersState } from './reducers/usersReducer'

const initialAppState = {
  searchState: initialSearchState,
  usersState: initialUsersState
}

let allMiddleware = []
if (process.env.NODE_ENV !== 'test') {
  allMiddleware.push(logger)
}
const sagaMiddleware = createSagaMiddleware();
allMiddleware.push(sagaMiddleware)

const reduxMiddleware = composeWithDevTools(applyMiddleware(...allMiddleware))

const initializeStore = (initialState = initialAppState) => {
  const store = createStore(
    rootReducer,
    initialState,
    reduxMiddleware
  )
  sagaMiddleware.run(rootSaga)
  return store
}

export default store => withRedux(initializeStore)(store)
