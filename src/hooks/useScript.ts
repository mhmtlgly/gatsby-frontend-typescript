import { useEffect } from "react"

export const useScript = scriptSrc => {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = scriptSrc
    script.async = true
    document.body.appendChild(script)

    // console.log(script)

    // return () => {
    //   document.body.removeChild(script)
    // }
  }, [scriptSrc])
}
