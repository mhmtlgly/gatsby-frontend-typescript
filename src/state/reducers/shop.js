/* eslint-disable */

import {
  ADD_TO_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  REMOVE_FROM_CART,
  CLEAR_CART,
} from "../actionTypes/shop"

const initialState = {
  cart: [],
}

export const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const isItemInCart = state.cart.find(
        item => item.id === action.payload.id
      )
      action.payload.quantity = 1
      return isItemInCart === undefined
        ? {
            ...state,
            cart: [...state.cart, action.payload],
          }
        : state

    case INCREASE_QUANTITY: {
      const tempCart = state.cart.map(cartItem => {
        if (cartItem.id === action.payload.id) {
          cartItem = { ...cartItem, quantity: cartItem.quantity + 1 }
        }
        return cartItem
      })
      return {
        ...state,
        cart: tempCart,
      }
    }

    case DECREASE_QUANTITY: {
      const tempCart = state.cart.filter(item => {
        if (item.id === action.payload.id) {
          if (item.quantity === 1) {
            state.cart.filter(item => item !== action.payload.id)
          } else {
            item.quantity -= 1
            return item
          }
        } else {
          return {
            ...state,
          }
        }
      })

      return {
        ...state,
        cart: tempCart,
      }
    }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id),
      }

    case CLEAR_CART:
      return {
        ...initialState,
      }

    default:
      return state
  }
}
