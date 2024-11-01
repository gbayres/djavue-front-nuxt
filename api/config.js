import axios from "axios"


const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  xsrfHeaderName: "X-CSRFToken",
  xsrfCookieName: "csrftoken",
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
})

export function responseSuccess(response) {
  return response
}


export default api