// @External Dependencies
import axios from 'axios'

// @Dependencies
import { apiURL, GET_PEOPLE } from '../../../constants'
import { axiosError } from '../../../Services'

/**
 * Se encarga de hacer el GET de personas a la API. Debido a que el listado de personas debía ser paginado, este Action Creator recibe como parámetro el número de página que luego se
 * pasará en la url del endpoint, que por defecto es la primera página. Una vez que la respuesta del endpoint está OK y devuelve datos, hacemos el DISPATCH hacia la Store, para dejar
 * el listado de personas paginado disponible para toda la app.
 */
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
