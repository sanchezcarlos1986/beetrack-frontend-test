// @External Dependencies
import axios from 'axios'

// @Dependencies
import { apiURL, SEARCH_PEOPLE } from '../../../constants'
import { axiosError } from '../../../Services'

const searchPeople = text => {
  const requestId = 'searchPeople'
  return async dispatch => {
    return axios
      .get(`${apiURL}/api/users?q=${text}`, { requestId })
      .then(response => {
        if (response.status === 200 && response.data) {
          dispatch({
            type: SEARCH_PEOPLE,
            payload: response.data
          })
          return 'SEARCH_PEOPLE_OK'
        } else {
          return 'ERROR'
        }
      })
      .catch(err => axiosError(err, requestId, dispatch))
  }
}

export default searchPeople
