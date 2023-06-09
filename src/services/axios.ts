import axios, { AxiosInstance, AxiosHeaders } from 'axios'
import { configs } from '@/constants'
import { cookie } from '@/utils/storage'

/**
 * Create axios instance.
 */
const Axios: AxiosInstance = axios.create({
  baseURL: `${configs.API_GATEWAY}/services`,
  headers: {
    'api-secret-key': configs.API_SECRET_KEY,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,PATCH,DELETE'
  }
})

/**
 * Axios also provides a request interceptor, allows changes to the request data before it is sent to the server
 * This is only applicable for request methods 'POST', 'PATCH' and 'DELETE'
 * The last function in the array must return a string or an instance of Buffer, ArrayBuffer,
 * FormData or Stream
 * You may modify the headers object.
 */
Axios.interceptors.request.use((reqConfig) => {
  if (reqConfig.headers) {
    const accessToken = cookie.get(configs.APP_AUTH_ACCESS)
    if (accessToken) {
      reqConfig.headers = new AxiosHeaders({
        Authorization: `Bearer ${accessToken}`
      })
    }
  }

  return reqConfig
})

export default Axios
export const { CancelToken } = axios
