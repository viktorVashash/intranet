import { AppActions } from '/constants'
import users from '/lib/users.json'

const initialState = {
  users: [],
  page: 1
}

export default function globalReducer (state = initialState, action) {
  switch (action.type) {
    case AppActions.GET_USERS:
      return {
        ...state,
        users
      }
    case AppActions.MOVE_TO_INDEX:
      return {
        ...state,
        page: action.payload
      }
    default:
      return state
  }
}
