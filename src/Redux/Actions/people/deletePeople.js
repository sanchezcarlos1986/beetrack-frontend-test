// @External Dependencies
import axios from 'axios'

// @Dependencies
import { apiURL, DELETE_PEOPLE } from '../../../constants'
import { axiosError } from '../../../Services'

const deletePeople = (person, peopleList) => {
  const requestId = 'deletePeople'
  return dispatch => {
    return axios
      .delete(`${apiURL}/api/users/${person.id}`, { requestId })
      .then(response => {
        if (response.status === 200 && response.statusText === 'OK') {
          const updatedList = peopleList.filter(
            contact => contact.id !== person.id
          )
          dispatch({
            type: DELETE_PEOPLE,
            payload: updatedList
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
