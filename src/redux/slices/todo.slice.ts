import { createSlice } from "@reduxjs/toolkit";
export const toDoSlider = createSlice({
  name: "toDo",
  initialState: {
    todoList: [
      { id: 1, content: "Terminar o trabalho", done: true },
      { id: 2, content: "Começar a ativade 2", done: false },
    ],
  },
  reducers: {
    addToDo: (state, action) => {
      let newTodoList = {
        id: state.todoList.length + 1,
        content: action.payload.newContent,
        done: false,
      };
      state.todoList.push(newTodoList);
      console.log(newTodoList);
    },
    deleteToDo: (state, action) => {
      let { todoList } = state;
      state.todoList = todoList.filter((item) => item.id !== action.payload.id);
    },
    editTodo: (state, action) => {
      state.todoList = state.todoList.map((product) => {
        if (product.id === action.payload.id) {
          return (product.done ? { ...product, done: false } : { ...product, done: true });
        }
        return product;
      });
    },
  },
});

export const { addToDo, deleteToDo, editTodo } = toDoSlider.actions;
export default toDoSlider.reducer;
