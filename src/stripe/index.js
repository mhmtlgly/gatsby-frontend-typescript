/* eslint-disable */

import React, { useState, Fragment } from "react"
import {
  useStripe,
  useElements,
  //   CardNumberElement,
  //   CardExpiryElement,
  //   CardCvcElement,
  CardElement,
  IbanElement,
} from "@stripe/react-stripe-js"
import { Button } from "@material-ui/core"
import axios from "axios"
import { useSelector } from "react-redux"
import { checkoutstyles } from "./styles"

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
}

export const StripePayment = props => {
  const classes = checkoutstyles()
  const [error, setError] = useState(null)
  const { cartTotal } = useSelector(state => state)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSpinner, setShowSpinner] = useState(false)
  const [isPaymentComplete, setIsPaymentComplete] = useState(false)

  const stripe = useStripe()
  const elements = useElements()

  const handleChange = event => {
    if (event.error) {
      setError(event.error.message)
    } else {
      setError(null)
    }
  }

  // const handleSubmit = async event => {
  //   console.log("making payment request...")
  //   event.preventDefault()
  //   setIsSubmitting(true)
  //   try {
  //     const axiosResponse = await axios({
  //       method: "POST",
  //       url: "http://localhost:5000/api/payment/stripe",
  //       data: {
  //         amount: cartTotal,
  //       },
  //     })

  //     console.log(axiosResponse)

  //     const clientSecret = axiosResponse.data.Client_Secret

  //     const stripeResponse = await stripe
  //       .confirmCardPayment(clientSecret, {
  //         payment_method: {
  //           card: elements.getElement(CardElement),
  //           billing_details: {
  //             name: "Jenny Rosen",
  //           },
  //         },
  //       })
  //       .then(res => {
  //         console.log(res)
  //         setIsPaymentComplete(res.paymentIntent.status === "succeeded" && true)
  //       })
  //       .catch(err => console.log(err))
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  //- SEPA -

  // account : AT611904300234573201

  const IBAN_ELEMENT_OPTIONS = {
    supportedCountries: ["SEPA"],
    placeholderCountry: "DE",
    // style: IBAN_STYLE,
  }

  const handleSubmit = async event => {
    console.log("making payment request...")
    event.preventDefault()
    setIsSubmitting(true)
    try {
      const axiosResponse = await axios({
        method: "POST",
        url: "http://localhost:5000/api/payment/stripe",
        data: {
          amount: cartTotal,
          name: "Mehmet Gülay",
          email: "m.guelay2017@gmail.com",
        },
      })

      console.log(axiosResponse)

      const clientSecret = axiosResponse.data.Client_Secret

      const stripeResponse = await stripe
        .confirmSepaDebitPayment(clientSecret, {
          payment_method: {
            sepa_debit: elements.getElement(IbanElement),
            billing_details: {
              name: "Mehmet Gülay",
              email: "m.guelay2017@gmail.com",
            },
          },
        })
        .then(res => {
          console.log(res)
          setIsPaymentComplete(res.paymentIntent.status === "succeeded" && true)
        })
        .catch(err => console.log(err))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Fragment>
      {!isPaymentComplete && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              IBAN
              <IbanElement options={IBAN_ELEMENT_OPTIONS} />
            </label>
          </div>

          <button type="submit">Submit Payment</button>

          {/* Display mandate acceptance text. */}
          <div className="mandate-acceptance">
            By providing your payment information and confirming this payment,
            you authorise (A) gatsby-stripe-ecommerce-shop and Stripe, our
            payment service provider, to send instructions to your bank to debit
            your account and (B) your bank to debit your account in accordance
            with those instructions. As part of your rights, you are entitled to
            a refund from your bank under the terms and conditions of your
            agreement with your bank. A refund must be claimed within 8 weeks
            starting from the date on which your account was debited. Your
            rights are explained in a statement that you can obtain from your
            bank. You agree to receive notifications for future debits up to 2
            days before they occur.
          </div>
        </form>
      )}
      {isSubmitting && !isPaymentComplete && "LOADING"}
      {isPaymentComplete && "pay is COMPLETE"}
    </Fragment>
  )

  // return (
  //   <Fragment>
  //     {!isPaymentComplete && (
  //       <form className={classes.root} onSubmit={handleSubmit}>
  //         <div className="form-row">
  //           {/* <label htmlFor="card-element">Credit or debit card</label> */}
  //           <CardElement
  //             id="card-element"
  //             options={CARD_ELEMENT_OPTIONS}
  //             onChange={handleChange}
  //           />
  //           <div className="card-errors" role="alert">
  //             {error}
  //           </div>
  //         </div>
  //         <Button
  //           variant="contained"
  //           color="secondary"
  //           type="submit"
  //           disabled={isSubmitting}
  //         >
  //           Submit Payment
  //         </Button>
  //       </form>
  //     )}
  //     {isSubmitting && !isPaymentComplete && "LOADING"}
  //     {isPaymentComplete && "pay is COMPLETE"}
  //   </Fragment>
  // )
}
