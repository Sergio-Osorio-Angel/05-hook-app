import { todoReducer } from "../../08-useReducer/todoReducer"

describe('tests todoReducer', () => {
    const initialState = [{
        id: 1,
        description: 'Demo todo',
        done: false
    }];

    test('debe regresar el estado inicial', () => {
        const newState = todoReducer(initialState, {});
        expect(newState).toBe(initialState);
    })

    test('debe de agregar un todo', () => {
        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'New todo',
                done: false
            }
        };
        const newState = todoReducer(initialState, action);

        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
    })

    test('debe eliminar un todo', () => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: {
                id: 1,
                description: 'Demo todo',
                done: false
            }
        };
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(0);
        expect(newState).not.toContain(action.payload);
    })

    test('debe realizar el Toogle del todo', () => { 
        const action = {
            type: '[TODO] Toogle Todo',
            payload: {
                id: 1,
                description: 'Demo todo',
                done: false
            }
        };
        const newState = todoReducer(initialState, action);
        expect(newState.find(e => e.id === 1).done ).toBeTruthy();
    })
})