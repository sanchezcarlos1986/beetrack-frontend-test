// @External Dependencies
import axios from 'axios'

// @Dependencies
import { apiURL, SEARCH_CONTACT } from '../../../constants'
import { axiosError } from '../../../Services'

const searchContact = text => {
  const requestId = 'searchContact'
  return async dispatch => {
    return axios
      .get(`${apiURL}/api/users?q=${text}`, { requestId })
      .then(response => {
        if (response.status === 200 && response.data) {
          dispatch({
            type: SEARCH_CONTACT,
            payload: response.data
          })
          return 'SEARCH_CONTACT_OK'
        } else {
          return 'ERROR'
        }
      })
      .catch(err => axiosError(err, requestId, dispatch))
  }
}

export default searchContact
