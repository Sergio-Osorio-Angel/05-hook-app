import { render, screen } from "@testing-library/react"
import { UserContext } from "../../09-useContext/context/UserContext";
import { HomePage } from "../../09-useContext/HomePage";

describe('tests HomePage', () => {

    const user = { name: 'Sergio', email: 'sergio@gmail.com' }

    test('debe de mostrar el componente sin el usuario', () => {
        render(
            <UserContext.Provider value={{ user: null }} >
                <HomePage></HomePage>
            </UserContext.Provider>
        );

        const preTag = screen.getByTestId('pre-label');
        expect(preTag.innerHTML).toBe('null');
    })

    test('debe mostrar el componente con el usuario', () => {
        render(
            <UserContext.Provider value={{ user: user }} >
                <HomePage></HomePage>
            </UserContext.Provider>
        );
        expect(screen.getByRole('heading',{level:1}).innerHTML).toContain(user.name);
    })
})