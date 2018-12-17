// @External Dependencies
import axios from 'axios'

// @Dependencies
import { apiURL, ADD_PEOPLE } from '../../../constants'
import { axiosError } from '../../../Services'

/**
 * Realiza el POST de cada persona nueva creada a la API. Cuando la respuesta del endpoint es Created, actualizamos el estado con la nueva persona creada.
 */
const addPeople = data => {
  const requestId = 'addPeople'
  return dispatch => {
    const axiosConfig = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    return axios
      .post(`${apiURL}/api/users`, data, axiosConfig, { requestId })
      .then(response => {
        if (response.status === 201 && response.statusText === 'Created') {
          dispatch({
            type: ADD_PEOPLE,
            payload: response.data
          })
          return { message: 'ADD_PEOPLE_OK', data: response.data }
        } else {
          return 'ERROR'
        }
      })
      .catch(err => axiosError(err, requestId, dispatch))
  }
}

export default addPeople
