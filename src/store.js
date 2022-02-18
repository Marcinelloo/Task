import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { getAllUsersReducer } from "./redux/reducers/userReducers";
import { getTodoByUserIdReducer } from "./redux/reducers/todosReducers";

const initialState = {};

const reducer = combineReducers({
  getAllUsers: getAllUsersReducer,
  getTodoByUserId: getTodoByUserIdReducer,
});
const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnchancer(applyMiddleware(thunk))
);

export default store;
