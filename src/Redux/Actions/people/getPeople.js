// @External Dependencies
import axios from 'axios'

// @Dependencies
import { apiURL, GET_PEOPLE } from '../../../constants'
import { axiosError } from '../../../Services'

const getPeople = () => {
  const requestId = 'getPeople'
  return async dispatch => {
    return axios
      .get(`${apiURL}/api/users`, { requestId })
      .then(response => {
        if (response.status === 200 && response.data) {
          dispatch({
            type: GET_PEOPLE,
            payload: response.data
          })
          return 'GET_PEOPLE_OK'
        } else {
          return 'ERROR'
        }
      })
      .catch(err => axiosError(err, requestId, dispatch))
  }
}

export default getPeople
