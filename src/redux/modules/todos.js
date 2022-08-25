// Actions
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const READ_TODO = "READ_TODO";

// Initial State
const initialState = {
  todo: [
    {
      id: 1,
      title: "공부하기",
      body: "어렵다 어려워😥",
      isDone: false,
    },
    {
      id: 2,
      title: "운동하기",
      body: "걷기라도 하자💪",
      isDone: true,
    },
  ],
};

// Reducer
const todolist = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todo: [...state.todo, action.payload],
      };
    case "DELETE_TODO":
      return {
        todo: state.todo.filter((todo) => todo.id !== action.id),
      };
    case "TOGGLE_TODO":
      return {
        todo: state.todo.map((todo) =>
          todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };
    case "READ_TODO":
      return {
        todo: state.todo.find((todo) => todo.id === action.id),
      };
    default:
      return state;
  }
};

// Action Creator
let id = 3;
export const addTodo = ({ title, body }) => {
  return {
    type: ADD_TODO,
    payload: {
      id: id++,
      title,
      body,
      isDone: false,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id,
  };
};

export const readTodo = (id) => {
  return {
    type: READ_TODO,
    id,
  };
};

export default todolist;
