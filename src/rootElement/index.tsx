import React, { useEffect, Fragment } from "react"
import { useDispatch } from "react-redux"

import { getUser } from "../state/actions"
import { useScript } from "../hooks"

export const RootElement = ({ children }) => {
  const dispatch = useDispatch()

  const payPalScript = useScript(
    `https://www.paypal.com/sdk/js?client-id=${process.env.PAYPAL_CLIENT_ID}`
  )

  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])

  return <Fragment>{children}</Fragment>
}
