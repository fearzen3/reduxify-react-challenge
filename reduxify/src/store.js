import {createLogger} from 'redux-logger'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import user from './reducers/userReducer'
import math from './reducers/mathReducer'

const store = createStore(
  combineReducers({user, math }),
  {},
  applyMiddleware( createLogger(), thunk, promise()));

  export default store
