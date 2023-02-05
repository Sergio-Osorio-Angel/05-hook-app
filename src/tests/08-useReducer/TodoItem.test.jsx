import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../08-useReducer/TodoItem";

describe('test TodoItem.jsx', () => {

    const todo = {id: 1, description: 'Piedra del Alma', done: false }
    const todoComplete = {id: 1, description: 'Piedra del Alma', done: true }

    const onDeleteTodoMock = jest.fn();

    const onToogleTodoMock = jest.fn();

    beforeEach( ()=> jest.clearAllMocks() );

    test('debe de mostrar el Todo pendiente de completar', () => {
        render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToogleTodo={onToogleTodoMock}></TodoItem>);

        const liElement = screen.getByRole('listitem');
        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByTestId('span-todo');
        expect(spanElement.className ).toBe('align-self-center ');
        expect(spanElement.className ).not.toContain('text-decoration-line-through');
    })

    test('debe de mostrar el Todo completado', () => {
        render(<TodoItem todo={todoComplete} onDeleteTodo={onDeleteTodoMock} onToogleTodo={onToogleTodoMock}></TodoItem>);

        const spanElement = screen.getByTestId('span-todo');
        expect(spanElement.className ).toContain('text-decoration-line-through');
    })

    test('debe de mostrar el Todo completado al momento de darle click al span', () => {
        render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToogleTodo={onToogleTodoMock}></TodoItem>);

        const spanElement = screen.getByTestId('span-todo');
        fireEvent.click(spanElement);

        expect( onToogleTodoMock ).toHaveBeenCalled();
        expect( onToogleTodoMock ).toHaveBeenCalledWith(todo);
    })

    test('el boton delete debe de llamar el deleteTodo', () => {
        render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToogleTodo={onToogleTodoMock}></TodoItem>);

        const btnDelete = screen.getByRole('button',{Name:'Borrar'});
        fireEvent.click(btnDelete);
        expect( onDeleteTodoMock ).toHaveBeenCalled();
        expect( onDeleteTodoMock ).toHaveBeenCalledWith(todo);
    })
})