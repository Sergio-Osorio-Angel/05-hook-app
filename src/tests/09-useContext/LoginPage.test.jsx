import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../09-useContext/context/UserContext";
import { LoginPage } from "../../09-useContext/LoginPage"

describe('test LoginPage.jsx', () => {

    const setUserMock = jest.fn();

    beforeEach(()=> {
        jest.clearAllMocks();
    });

    test('debe de mostrar el componente sin el usuario', () => {
        render(
            <UserContext.Provider value={ {user:null } }>
                <LoginPage></LoginPage>
            </UserContext.Provider>
        );
    })

    test('debe de llamar el setUser cuando se hace click en el botón', () => {
        render(
            <UserContext.Provider value={ {user:null, setUser: setUserMock} }>
                <LoginPage></LoginPage>
            </UserContext.Provider>
        );
        const btnUser = screen.getByRole('button',{Name:'Establecer usuario'});
        fireEvent.click(btnUser);

        expect(setUserMock).toHaveBeenCalledWith({ id: 123, name: 'Sergio', email: 'sergio@gmail.com' });
        
    })
})