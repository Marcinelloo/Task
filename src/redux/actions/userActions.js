import axios from "axios";
import {
  GET_ALL_USERS_REQUEST,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAIL,
} from "../constants/userConstants";

export const getAllUsers = () => async (dispatch) => {
  dispatch({
    type: GET_ALL_USERS_REQUEST,
  });

  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_DATA_LINK}/users`
    );

    dispatch({ type: GET_ALL_USERS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: GET_ALL_USERS_FAIL, payload: message });
  }
};
