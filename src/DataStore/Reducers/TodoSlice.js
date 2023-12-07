import { createSlice, nanoid } from "@reduxjs/toolkit";

const items =
  localStorage.getItem("todos") !== null
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
const initialState = {
  todos: items,
};

function Add(state, action) {
  if (action.payload !== "") {
    const todo = {
      id: nanoid(),
      content: {
        title: action.payload.title,
        about: action.payload.about,
      },
    };
    state.todos.push(todo);
    UpdateLocalStorage(state);
  }
}

function Remove(state, action) {
  state.todos = state.todos.filter(
    (eachTodo) => eachTodo.id !== action.payload
  );
  UpdateLocalStorage(state);
}

function Update(state, action) {
  console.log(action.payload);
  state.todos.map((eachTodo) =>
    eachTodo.id === action.payload.id
      ? (eachTodo.content = action.payload.content)
      : null
  );
  UpdateLocalStorage(state);
}

function UpdateLocalStorage(state) {
  localStorage.setItem("todos", JSON.stringify(state.todos));
}

export const TodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: Add,
    removeTodo: Remove,
    updateTodo: Update,
  },
});

export const { addTodo, removeTodo, updateTodo } = TodoSlice.actions;

export default TodoSlice.reducer;
