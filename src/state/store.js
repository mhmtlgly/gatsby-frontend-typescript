/* eslint-disable */

import { createStore, combineReducers, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"
import { composeWithDevTools } from "redux-devtools-extension"

import { authenticationReducer, shopReducer } from "./reducers"
import { watcherSaga } from "./sagas"

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

const rootReducer = combineReducers({
  authentication: authenticationReducer,
  shop: shopReducer,
})

const reduxStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

sagaMiddleware.run(watcherSaga)

export const store = reduxStore
