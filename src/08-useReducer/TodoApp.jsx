import { useTodo } from "../hooks";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

export function TodoApp() {

    const { todos, todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToogleTodo } = useTodo([]);

    return (
        <>
            <h1>TodoApp ({todosCount}), <small>pendientes: {pendingTodosCount}</small></h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToogleTodo={handleToogleTodo}></TodoList>
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTODO={handleNewTodo}></TodoAdd>
                </div>
            </div>
        </>
    )
}
