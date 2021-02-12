import React from "react"
import { Provider} from "react-redux"

import { ThemeProvider } from "@material-ui/core/styles"
import { CssBaseline } from "@material-ui/core"

import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

import { store } from "./src/state/store"
import { theme } from "./src/theme"
import { RootElement } from "./src/rootElement"

const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY)

export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Elements stripe={stripePromise}>
          <RootElement>{element}</RootElement>
        </Elements>
      </ThemeProvider>
    </Provider>
  )
}
