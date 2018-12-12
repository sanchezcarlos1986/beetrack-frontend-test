// @External Dependencies
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import getToken from './getToken'

// @Dependencies
import { LOGOUT } from '../utils/Constants'

const axiosError = (err, requestId, dispatch) => {
  if (/401/.test(err.message)) {
    // console.error('Credenciales invalidas...')
  } else if (requestId && axios.isCancel(err)) {
    // eslint-disable-next-line no-console
    console.log(`El request de ${requestId} fue cancelado...`)
  } else if (err.response && err.response.status === 400) {
    const token = getToken()
    if (token === undefined) return err
    const decoded = jwtDecode(getToken())
    const currentTime = new Date().getTime() / 1000

    if (currentTime > decoded.exp) {
      window.sessionStorage.setItem('session', 'expired')
      window.sessionStorage.setItem('lastURL', window.location.pathname)
      window.localStorage.removeItem('persist:docencia')
      return dispatch({ type: LOGOUT })
    } else {
      // eslint-disable-next-line no-console
      console.log({
        error: err,
        mensaje: err.response && err.response.data,
        code: err.response && err.response.status
      })
      return err
    }
  } else {
    // eslint-disable-next-line no-console
    console.log({
      error: err,
      mensaje: err.response && err.response.data,
      code: err.response && err.response.status
    })
    return err
  }
}

// @Export Service
export default axiosError
