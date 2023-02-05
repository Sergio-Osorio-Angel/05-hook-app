import { useEffect, useReducer, useState } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

export function useTodo(initialState = []) {

    function initializer() {
        // return en caso no null || en caso contrario
        return JSON.parse(localStorage.getItem('todos')) || [];
    }

    // Params 1. Función reduce / 2. Estado inicial / 3. Función de inicialización
    const [todos, dispatch] = useReducer(todoReducer, initialState, initializer);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    function handleNewTodo(todo) {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        };
        dispatch(action);
    }
    function handleDeleteTodo(todo) {
        const action = {
            type: '[TODO] Remove Todo',
            payload: todo
        };
        dispatch(action);
    }
    function handleToogleTodo(todo) {
        const action = {
            type: '[TODO] Toogle Todo',
            payload: todo
        };
        dispatch(action);
    }

    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter( todo => !todo.done ).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToogleTodo
    }
}
