// @External Dependencies
import axios from 'axios'

// @Dependencies
import { apiURL, ADD_PEOPLE } from '../../../constants'
import { axiosError } from '../../../Services'

const addPeople = data => {
  const requestId = 'addTeacher'
  return dispatch => {
    return axios
      .post(`${apiURL}/xxxx`, { requestId })
      .then(response => {
        if (response.status === 200 && response.data.data.createTeacher) {
          dispatch({
            type: ADD_PEOPLE,
            payload: response.data.data.createTeacher.Employee.id
          })
          return 'ADD_PEOPLE_OK'
        } else {
          return 'ERROR'
        }
      })
      .catch(err => axiosError(err, requestId, dispatch))
  }
}

export default addPeople
