import { v4 as uuid } from "uuid";

//액션에서 쓸 상수 만들기
const ADD_TODO = "ADD_TODO";
const TOGGLE_STATUS = "TOGGLE_STATUS";
const DELETE_TODO = "DELETE_TODO";

//액션 크리에이터 만들기

//Todo 더하는 액션 크리에이터
export const addTodo = (title, context) => {
  return {
    type: ADD_TODO,
    title,
    context,
  };
};

//toggle 액션 크리에이터
export const toggleStatus = (newList) => {
  return {
    type: TOGGLE_STATUS,
    newList,
  };
};

export const deleteTodo = (newList) => {
  return {
    type: DELETE_TODO,
    newList,
  };
};

// 초기값 설정
const initialState = [];

//투두 리스트 state 바꿔주는 리듀서
const todoList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return (state = [
        ...state,
        {
          id: uuid(),
          title: action.title,
          context: action.context,
          isDone: false,
        },
      ]);
    case TOGGLE_STATUS:
      return (state = action.newList);
    case DELETE_TODO:
      return (state = action.newList);
    default:
      return state;
  }
};

export default todoList;
