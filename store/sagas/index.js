import { all, fork } from 'redux-saga/effects'

import searchSaga from './searchSaga'
import usersSaga from './usersSaga'

function* rootSaga() {
  yield all([
      fork(searchSaga),
      fork(usersSaga)
  ]);
}

export default rootSaga
