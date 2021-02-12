import { SIGN_IN, SIGN_OUT, SET_USER } from "../actionTypes/authentication"

export const authenticationReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        user: action.payload,
      }
    }

    case SIGN_IN: {
      return {
        ...state,
        loggedIn: true,
      }
    }

    case SIGN_OUT: {
      return {
        ...state,
        loggedIn: false,
      }
    }

    default:
      return state
  }
}
