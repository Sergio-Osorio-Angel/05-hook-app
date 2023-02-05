export function TodoItem({ todo = {}, onDeleteTodo = () => { },onToogleTodo = ()=>{} }) {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span data-testid="span-todo" className={`align-self-center ${ (todo.done) ? 'text-decoration-line-through' : ''}`} 
                onClick={() => { onToogleTodo(todo) }}>
                {todo.description}
            </span>
            <button className="btn btn-danger" onClick={() => { onDeleteTodo(todo) }}>Borrar</button>
        </li>
    )
}
