import {
  SIGN_IN,
  SIGN_OUT,
  GET_USER,
  SET_USER,
} from "../actionTypes/authentication"

export const getUser = () => {
  return {
    type: GET_USER,
  }
}

export const setUser = payload => {
  return {
    type: SET_USER,
    payload,
  }
}

export const signIn = () => {
  return {
    type: SIGN_IN,
  }
}

export const signOut = () => {
  return {
    type: SIGN_OUT,
  }
}
