import { useEffect, useState } from "react"
import { Message } from "./Message";

export function SimpleForm() {

    const [formState, setformState] = useState({
        username: '',
        email: ''
    });

    const {username, email} = formState;

    function onInputChange({target}) {
        const {name, value} = target;
        setformState({
            ...formState,
            [name]:value
        })
    }

    useEffect(() => {
        // 1. Listener
            
        return () => {
            // 2. Clean up
            // Se limpia el listener para evitar consumir memoria
        }
        //3. Lista de dependencias
    }, [])
    
    

    return (
        <>
        <h1>Formulario Simple</h1>
        <hr></hr>
        <input type="text" className="form-control" placeholder="Username" name="username" value={username} onChange={onInputChange}/>
        <input type="email" className="form-control mt-2" placeholder="sergio@gmail.com" name="email" value={email} onChange={onInputChange}/>

        {
            (username === 'sergio') && <Message></Message>
        }
        </>
    )
}
