// @External Dependencies
import axios from 'axios'

// @Dependencies
const axiosError = (err, requestId, dispatch) => {
  if (/401/.test(err.message)) {
    // console.error('Credenciales invalidas...')
  } else if (requestId && axios.isCancel(err)) {
    // eslint-disable-next-line no-console
    console.log(`El request de ${requestId} fue cancelado...`)
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
