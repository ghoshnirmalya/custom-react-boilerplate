import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import auth from './auth'
import users from './users'

export default history =>
  combineReducers({
    router: connectRouter(history),
    auth,
    users
  })
