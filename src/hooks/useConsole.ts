import { useEffect } from "react"

export const useConsole = el => {
  useEffect(() => {
    console.log(el)
  }, [el])
}
