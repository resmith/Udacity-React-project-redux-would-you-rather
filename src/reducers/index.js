import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading-bar'

import authedUser from './authedUser'
import users from './users'
import questions from './questions'

const rootReducer = combineReducers({
  authedUser,
  users,
  questions,
  loadingBar: loadingBarReducer
})

export default rootReducer
