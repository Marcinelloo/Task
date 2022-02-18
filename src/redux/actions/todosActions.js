import axios from "axios";
import {
  GET_TODO_BY_USER_REQUEST,
  GET_TODO_BY_USER_SUCCESS,
  GET_TODO_BY_USER_FAIL,
} from "../constants/todosConstants";

export const getTodoByUserId = (userId) => async (dispatch) => {
  dispatch({
    type: GET_TODO_BY_USER_REQUEST,
  });

  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_DATA_LINK}/users/${userId}/todos`
    );

    dispatch({ type: GET_TODO_BY_USER_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: GET_TODO_BY_USER_FAIL, payload: message });
  }
};
