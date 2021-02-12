import { useEffect, useState } from "react"
import axios, { Method, AxiosRequestConfig } from "axios"

export const axiosRequest = (
  url: AxiosRequestConfig["url"],
  method?: Method,
  data?: AxiosRequestConfig["data"]
) => {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)
  const callAPI = async () => {
    try {
      const res = await axios({
        method: method ? method : "GET",
        url,
        data,
      })
      console.log(res)
      setResponse(res.data)
      setError(null)
      setLoading(false)
      setStatus(res.status)
    } catch (error) {
      console.log(error)
      console.log(error.name)
      console.log(error.message)
      setResponse(null)
      setError(error)
      setLoading(false)
      setStatus(parseInt(error.message.replace(/\D/g, "")))
    }
  }

  return { callAPI, response, error, loading, status }
}
