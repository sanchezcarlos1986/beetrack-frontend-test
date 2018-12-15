// @External Dependencies
import axios from 'axios'

// @Dependencies
import { apiURL, GET_PEOPLE } from '../../../constants'
import { axiosError } from '../../../Services'

const getPeople = (pagination = 1) => {
  const requestId = 'getPeople'
  return async dispatch => {
    return axios
      .get(`${apiURL}/api/users?_page=${pagination}&_limit=10`, { requestId })
      .then(response => {
        if (response.status === 200 && response.data) {
          const payload = {
            data: response.data,
            currentPage: pagination
          }

          dispatch({
            type: GET_PEOPLE,
            payload
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
