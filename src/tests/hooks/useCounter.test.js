import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../hooks/useCounter"

describe('Test useCounter', () => {

    test('debe de retornar los valores por defecto', () => {
        const {result} = renderHook( () => useCounter() );
        const {counter,decrement,increment,reset} = result.current;

        expect(counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    })


    test('debe generar el counter con el valor de 100', () => {
        const {result} = renderHook( () => useCounter(100) );
        const {counter} = result.current;

        expect(counter).toBe(100);
    })

    test('debe decrementar dos veces el contador', () => {
        const {result} = renderHook( () => useCounter(100) );
        const {decrement} = result.current;

        act(()=> {
            decrement(20);
            decrement(10);
        });

        expect( result.current.counter ).toBe(70);
    })

    test('debe incrementar dos veces el contador', () => {
        const {result} = renderHook( () => useCounter(100) );
        const {increment} = result.current;

        act(()=> {
            increment(20);
            increment(10);
        });

        expect( result.current.counter ).toBe(130);
    })

    test('debe volver al estado inicial del contador', () => {

        const initialValue = 100;
        const {result} = renderHook( () => useCounter(initialValue));
        const {increment, reset} = result.current;

        act(()=> {
            increment(20);
            increment(10);
            reset();
        });

        expect( result.current.counter ).toBe(initialValue);
    })
})