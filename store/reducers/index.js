import { combineReducers } from 'redux'
import searchReducer from './searchReducer'
import usersReducer from './usersReducer'
import themeReducer from './themeReducer'

export default combineReducers({
  searchState: searchReducer,
  usersState: usersReducer,
  themeState: themeReducer
})
