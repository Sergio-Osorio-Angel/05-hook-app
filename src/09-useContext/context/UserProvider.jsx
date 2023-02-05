
// Un Provider es un High Orde Component
// Esto quiere decir que recibe un elemento hijo

import { useState } from "react";
import { UserContext } from "./UserContext";

export function UserProvider({ children }) {


    const [user, setUser] = useState({});

    return (
        <UserContext.Provider value={ {user, setUser} }>
            { children }
        </UserContext.Provider>
    )
}
