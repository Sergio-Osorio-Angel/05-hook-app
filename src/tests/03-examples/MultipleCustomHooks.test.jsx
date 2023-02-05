import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../03-examples/MultipleCustomHooks";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";

jest.mock('../../hooks/useFetch');
jest.mock('../../hooks/useCounter');

describe('MultipleCustomHooks.jsx', () => {


    // Se simula una respuesta del hook useCounter - para todas las pruebas
    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    // Ciclo de vida de las pruebas
    // Antes de cada prueba
    beforeEach(()=> {
        jest.clearAllMocks();
    });

    test('debe mostrar el componente correctamente', () => {

        // Se simula una respuesta del hook useFetch
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render(<MultipleCustomHooks></MultipleCustomHooks>);

        expect(screen.getByText('Cargando...'));
        expect(screen.getByText('Breaking Bad'));

        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        expect(nextButton.disabled).toBeTruthy();
    })

    test('debe de mostrar un Quote', () => {
        // Se simula una respuesta del hook useFetch
        useFetch.mockReturnValue({
            data: [{ author: 'Sergio', quote: 'Hola mundo' }],
            isLoading: false,
            hasError: null
        });
        render(<MultipleCustomHooks></MultipleCustomHooks>);

        expect(screen.getByText('Hola mundo')).toBeTruthy();
        expect(screen.getByText('Sergio')).toBeTruthy();

        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        expect(nextButton.disabled).toBeFalsy();
    })

    test('debe de llamar la función de incrementar', () => {
        // Se simula una respuesta del hook useFetch
        useFetch.mockReturnValue({
            data: [{ author: 'Sergio', quote: 'Hola mundo' }],
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks></MultipleCustomHooks>);

        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        fireEvent.click(nextButton);


        expect(mockIncrement).toHaveBeenCalled();
    })
})