// @External Dependencies
import axios from 'axios'

// @Dependencies
import { apiURL, ADD_PEOPLE } from '../../utils/Constants'
import { getToken, axiosError } from '../../services'

const addPeople = data => {
  const requestId = 'addTeacher'
  return dispatch => {
    getToken()

    const query = `
      mutation createTeacher(
        $CreateTeacherInput: CreateTeacherInput!
      ) {
        createTeacher(
          input: $CreateTeacherInput
        ) {
          Employee {
            id
          }
        }
      }
    `
    const variables = {
      CreateTeacherInput: {
        name: data.nombre,
        paternalSurname: data.apellido_paterno,
        maternalSurname: data.apellido_materno,
        documentType: data.id_tipos_usuario,
        documentNumber: data.numero_documento,
        email: data.email,
        products: data.id_producto,
        profiles: data.perfil,
        managingCountry: data.country,
        gender: data.gender,
        workPermit: data.workPermit,
        countryServiceProvider: data.countryServiceProvider,
        nonContactServices: data.nonContactServices,
        countryOfPayment: data.countryOfPayment,
        businessName: data.businessName,
        money: data.money
      }
    }

    return axios
      .post(`${apiURL}/graphql`, { query, variables }, { requestId })
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
