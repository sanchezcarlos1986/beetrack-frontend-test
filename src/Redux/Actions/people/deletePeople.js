// @External Dependencies
import axios from 'axios'

// @Dependencies
import { apiURL, DELETE_PEOPLE } from '../../../constants'
import { axiosError } from '../../../Services'

const deletePeople = data => {
  const requestId = 'addTeacher'
  return dispatch => {
    return axios
      .post(`${apiURL}/xxxx`, { requestId })
      .then(response => {
        if (response.status === 200 && response.data.data.createTeacher) {
          dispatch({
            type: DELETE_PEOPLE,
            payload: response.data.data.createTeacher.Employee.id
          })
          return 'DELETE_PEOPLE_OK'
        } else {
          return 'ERROR'
        }
      })
      .catch(err => axiosError(err, requestId, dispatch))
  }
}

export default deletePeople
