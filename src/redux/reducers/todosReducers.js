import {
  GET_TODO_BY_USER_REQUEST,
  GET_TODO_BY_USER_SUCCESS,
  GET_TODO_BY_USER_FAIL,
} from "../constants/todosConstants";

export const getTodoByUserIdReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_TODO_BY_USER_REQUEST:
      return { loading: true };
    case GET_TODO_BY_USER_SUCCESS:
      return { loading: false, success: true, object: action.payload };
    case GET_TODO_BY_USER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
