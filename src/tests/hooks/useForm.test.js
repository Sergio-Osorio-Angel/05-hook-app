import { renderHook } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import { useForm } from "../../hooks/useForm"

describe('Test useForm', () => {
    const initialValue = {
        name: 'Sergio',
        email: 'sergio@gmail.com'
    }

    test('debe de regresar la información por defecto', () => {
        const { result } = renderHook(() => useForm(initialValue));
        
        expect(result.current).toEqual(
            {
                name: initialValue.name,
                email: initialValue.email,
                formState: initialValue,
                onInputChange: expect.any(Function),
                onResetForm: expect.any(Function)
              }
        );
    })

    test('debe de cambiar el nombre del formulario', () => {
        const newValue = 'Angel';
        const { result } = renderHook(() => useForm(initialValue));
        const {onInputChange} = result.current;

        act(()=> {
            onInputChange( {target: {name:'name', value:newValue}} );
        });
        expect( result.current.name ).toBe(newValue);
        expect( result.current.formState.name ).toBe(newValue);
    })

    test('debe de realizar el reset del formulario', () => {
        const newValue = 'Angel';
        const { result } = renderHook(() => useForm(initialValue));
        const {onInputChange, onResetForm} = result.current;

        act(()=> {
            onInputChange( {target: {name:'name', value:newValue}} );
            onResetForm();

        });
        expect( result.current.name ).toBe(initialValue.name);
        expect( result.current.formState.name ).toBe(initialValue.name);
    })

})