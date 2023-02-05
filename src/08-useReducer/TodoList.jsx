import { TodoItem } from "./TodoItem";

export function TodoList({ todos=[] , onDeleteTodo=()=>{}, onToogleTodo = ()=>{}}) {

    return (
        <>
            <ul className="list-group">
                {
                    todos.map((todo) => (
                        <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} onToogleTodo={onToogleTodo}></TodoItem>
                    ))
                }
            </ul>
        </>
    )
}
