import { AppActions } from '/constants'

export function getUsers () {
  return {
    type: AppActions.GET_USERS
  }
}

export function moveToIndex (index) {
  return {
    type: AppActions.MOVE_TO_INDEX,
    payload: index
  }
}
