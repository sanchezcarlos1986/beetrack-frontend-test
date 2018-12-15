// @Dependencies
import { ADD_PEOPLE, DELETE_PEOPLE, GET_PEOPLE } from '../../constants'

const initialState = {}

// @Export Reducer
export const people = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_PEOPLE:
      return { ...state, peopleList: payload }
    case ADD_PEOPLE:
      return { ...state, peopleList: payload }
    case DELETE_PEOPLE:
      return { ...state, peopleList: payload }
    default:
      return state
  }
}
