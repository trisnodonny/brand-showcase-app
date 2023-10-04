import { USER_SUCCESS, USER_LOADING } from "../actions/actionType";

const initialState = {
  users: [],
  usersLoading: false
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SUCCESS:
      return {
        ...state,
        users: action.payload
      }
    case USER_LOADING:
      return {
        ...state,
        usersLoading: action.payload
      }
    default:
      return state
  }
}

export default userReducer