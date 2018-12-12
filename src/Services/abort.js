// @External Dependencies
import axios from 'axios'
import axiosCancel from 'axios-cancel'

axiosCancel(axios, {
  debug: false
})

const abort = requestId => {
  requestId ? axios.cancel(requestId) : axios.cancelAll()
}

// @Export Component
export default abort
