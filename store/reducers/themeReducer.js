import { CHANGE_THEME_ACTION } from '../constants'

const initialState = {
  currentTheme: 'light'
}

const themeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_THEME_ACTION:
      return {
        currentTheme: payload
      }
    default:
      return state
  }
}

export default themeReducer
