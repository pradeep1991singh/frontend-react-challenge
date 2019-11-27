import { put, takeLatest, takeEvery,call, all } from 'redux-saga/effects'

import {
  GET_USER_FOLLOWERS_COUNT_ACTION,
  GET_USER_FOLLOWING_COUNT_ACTION,
  GET_USER_DETAILS_ACTION
} from '../constants'
import {
  getUserDetailsApi,
  getUserFollowersApi,
  getUserFollowingApi,
} from 'services'
import {
  getUserFollowersCountSuccessAction,
  getUserFollowersCountFailedAction,
  getUserFollowingCountSuccessAction,
  getUserFollowingCountFailedAction,
  getUserDetailsSuccessAction,
  getUserDetailsFailedAction
} from '../actions'

function* getUserFollowersCount(action) {
  try {
    const username = action.payload
    const followers = yield call(getUserFollowersApi, username)
    yield put(getUserFollowersCountSuccessAction({followersCount: followers.data.length, username}))
  } catch (error) {
    yield put(getUserFollowersCountFailedAction(JSON.stringify(error)))
  }
}

function* watchGetUserFollowers() {
  yield takeEvery(GET_USER_FOLLOWERS_COUNT_ACTION, getUserFollowersCount)
}

function* getUserFollowingCount(action) {
  try {
    const username = action.payload
    const following = yield call(getUserFollowingApi, username)
    yield put(getUserFollowingCountSuccessAction({followingCount: following.data.length, username}))
  } catch (error) {
    yield put(getUserFollowingCountFailedAction(JSON.stringify(error)))
  }
}

function* watchGetUserFollowing() {
  yield takeEvery(GET_USER_FOLLOWING_COUNT_ACTION, getUserFollowingCount)
}
function* getUserDetails(action) {
  try {
    const username = action.payload
    const response = yield call(getUserDetailsApi, username)
    yield put(getUserDetailsSuccessAction(response.data))
  } catch (error) {
    yield put(getUserDetailsFailedAction(JSON.stringify(error)))
  }
}

function* watchGetUserDetails() {
  yield takeEvery(GET_USER_DETAILS_ACTION, getUserDetails)
}


function* usersSaga() {
  yield all([
    watchGetUserFollowers(),
    watchGetUserFollowing(),
    watchGetUserDetails()
  ])
}

export default usersSaga
