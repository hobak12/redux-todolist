import { createStore } from "redux";
import { combineReducers } from "redux";
import todoList from "../modules/todolist";

const rootReducer = combineReducers({
  todoList,
});
const store = createStore(rootReducer);

export default store;
