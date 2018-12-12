// @External Dependencies
import axios from 'axios'

// @Dependencies
import { apiURL, DELETE_PEOPLE } from '../../utils/Constants'
import { getToken, axiosError } from '../../services'

const deletePeople = (id, requestId) => {
  return dispatch => {
    getToken()

    const query = `
      mutation {
        deletePersona(id: ${id}) {
          id
        }
      }`

    return axios
      .post(`${apiURL}/graphql`, { query })
      .then(response => {
        if (response.status === 200) {
          dispatch({
            type: DELETE_PEOPLE,
            payload: response.data.data.deletePersona.id
          })
          return 'DELETE_PEOPLE_OK'
        }
      })
      .catch(err => axiosError(err, requestId, dispatch))
  }
}

export default deletePeople
