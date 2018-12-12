// @External Dependencies
import axios from 'axios'

// @Dependencies
import { apiURL, GET_PEOPLE, LOGOUT } from '../../utils/Constants'
import { getToken, axiosError } from '../../services'

const getPeople = (requestId, filter = {}, page = 1, orderBy = 'id_DESC') => {
  return dispatch => {
    getToken()

    const paginate = 15
    const query = `
      query findAllPerson (
        $FindAllPersonInput: FindAllPersonInput
      ) {
        findAllPerson (
          input: $FindAllPersonInput
        ) {
          _meta {
            pages
          }
          Personas {
            id
            nombre
            apellido_paterno
            email
            id_documento
            id_producto
            numero_documento
            aprobacion_docencia
            DatosAsignacions {
              aprobado
              id_producto_agrupador
              ProductoAgrupador {
                nombre
              }
            }
             Employees{
              TeacherContracts {
                id_contract_status
              }
            }
          }
        }
      }
    `
    const variables = {
      FindAllPersonInput: {
        page: page,
        paginate: paginate,
        orderBy: orderBy
      }
    }
    if (Object.keys(filter).length > 0)
      variables.FindAllPersonInput.filter = { ...filter }

    return axios
      .post(`${apiURL}/graphql`, { query, variables }, { requestId })
      .then(response => {
        if (response.status === 200 && response.data.data.findAllPerson) {
          dispatch({
            type: GET_PEOPLE,
            payload: {
              people: response.data.data.findAllPerson.Personas,
              pagination: response.data.data.findAllPerson._meta.pages
            }
          })
          return 'GET_PEOPLE_OK'
        } else if (
          response.data.errors[0].message === 'Usuario no autentificado'
        ) {
          dispatch({
            type: LOGOUT
          })
        }
      })
      .catch(err => axiosError(err, requestId, dispatch))
  }
}

export default getPeople
