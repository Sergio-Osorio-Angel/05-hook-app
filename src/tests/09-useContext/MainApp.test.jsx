const { render, screen } = require("@testing-library/react");
const { MemoryRouter } = require("react-router-dom");
const { MainApp } = require("../../09-useContext/MainApp");

describe('debe mostrar MainApp', () => {

    test('debe mostrar el HomePage', () => {
        render(
            <MemoryRouter>
                <MainApp></MainApp>
            </MemoryRouter>
        );
        // screen.debug();
        const h1 = screen.getByRole('heading', { level: 1 });
        expect(h1.innerHTML).toContain('Home Page');
    })

    test('debe mostrar el LoginPage', () => {
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp></MainApp>
            </MemoryRouter>
        );
        const h1 = screen.getByRole('heading', { level: 1 });
        expect(h1.innerHTML).toContain('Login Page');
    })

    test('debe mostrar el AboutPage', () => {
        render(
            <MemoryRouter initialEntries={['/about']}>
                <MainApp></MainApp>
            </MemoryRouter>
        );
        const h1 = screen.getByRole('heading', { level: 1 });
        expect(h1.innerHTML).toContain('About Page');
    })

})