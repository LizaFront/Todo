import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { myTodos } from 'data/Todos';
import { ITodo } from 'models/todo.model';

const todos: ITodo[] = myTodos;

export const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        todos,
    },
    reducers: {
        toggleComplete(state, action: PayloadAction<string>) {
            const toggledTodo = state.todos.find(todo => todo.id === action.payload);
            if (toggledTodo) {
                toggledTodo.completed = !toggledTodo.completed;
            }
        },
        removeTodo(state, action: PayloadAction<string>) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        changeTitle(state, action: PayloadAction<{ id: string; title: string }>) {
            const todo = state.todos.find(todo => todo.id === action.payload.id);
            if (todo) {
                todo.title = action.payload.title;
            }
        },
        addTodo(state, action: PayloadAction<string>) {
            state.todos.push({
                id: new Date().toISOString(),
                title: action.payload,
                completed: false,
            });
        },
        saveLocalStorage(state, action: PayloadAction<ITodo[]>) {
            state.todos = action.payload;
        },
    },
    selectors: {
        selectTodos: state => state.todos,
    },
});

export const { toggleComplete, removeTodo, changeTitle, addTodo, saveLocalStorage } = todosSlice.actions;
export const { selectTodos } = todosSlice.selectors;

export default todosSlice.reducer;
