import {
  ADD_TO_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  REMOVE_FROM_CART,
  CLEAR_CART,
} from "../actionTypes/shop"

export const addToCart = product => {
  return {
    type: ADD_TO_CART,
    payload: product,
  }
}

export const removeFromCart = product => {
  return {
    type: REMOVE_FROM_CART,
    payload: product,
  }
}

export const increaseQuantity = product => {
  return {
    type: INCREASE_QUANTITY,
    payload: product,
  }
}

export const decreaseQuantity = product => {
  return {
    type: DECREASE_QUANTITY,
    payload: product,
  }
}

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  }
}
