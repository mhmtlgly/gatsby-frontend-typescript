import { put, call } from "redux-saga/effects"

import { setUser } from "../../actions/authentication"
import { requestGetUser } from "../requests/authentication"

export function* handleGetUser(action) {
  try {
    const response = yield call(requestGetUser)
    const { data } = response
    yield put(setUser(data))
  } catch (error) {
    console.log(error)
  }
}
