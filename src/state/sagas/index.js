import { takeLatest } from "redux-saga/effects"

import { GET_USER } from "../actionTypes/authentication"
import { handleGetUser } from "./handlers/authentication"

export function* watcherSaga() {
  yield takeLatest(GET_USER, handleGetUser)
}
