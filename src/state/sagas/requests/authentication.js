/* eslint-disable */

import axios from "axios"

export function requestGetUser() {
  return axios.request({
    method: "GET",
    url: "http://localhost:5000/api/authentication/auto_sign_in",
    withCredentials: true,
  })
}
