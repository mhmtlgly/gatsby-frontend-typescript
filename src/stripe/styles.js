import { makeStyles } from "@material-ui/core/styles"

export const checkoutstyles = makeStyles(theme => ({
  root: {
    display: "grid",
    maxWidth: 600,
    padding: 20,
    boxShadow: "0 0 10px",
    "& button": {
      marginTop: 20,
    },
    "& .StripeElement": {
      boxSizing: "border-box",
      height: 40,
      padding: "10px 12px",
      border: " 1px solid transparent",
      borderRadius: 4,
      backgroundColor: "white",
      boxShadow: " 0 1px 3px 0 #e6ebf1",
      "-webkit-transition": "box-shadow 150ms ease",
      transition: "box-shadow 150ms ease",
    },
    "& .StripeElement--focus": {
      boxShadow: "0 1px 3px 0 #cfd7df",
    },
    "& .StripeElement--invalid": {
      borderColor: "#fa755a",
    },
    "& .StripeElement--webkit-autofill ": {
      backgroundColor: "#fefde5 !important",
    },
  },
}))
