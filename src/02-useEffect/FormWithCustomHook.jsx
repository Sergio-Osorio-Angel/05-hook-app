import { useEffect } from "react"
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";

export function FormWithCustomHook() {

    // 1. Formulario sin Custom Hook
    // const [formState, setformState] = useState({
    //     username: '',
    //     email: '',
    //     password: ''
    // });

    // const {username, email, password} = formState;

    // function onInputChange({target}) {
    //     const {name, value} = target;
    //     setformState({
    //         ...formState,
    //         [name]:value
    //     })
    // }


    // 2. Formulario con Custom Hook
    const {formState, onInputChange, onResetForm} = useForm({username: '', email: '', password: ''});
    const {username, email, password} = formState;



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
        <h1>Formulario con Custom Hook</h1>
        <hr></hr>
        <input type="text" className="form-control" placeholder="Username" name="username" value={username} onChange={onInputChange}/>
        <input type="email" className="form-control mt-2" placeholder="sergio@gmail.com" name="email" value={email} onChange={onInputChange}/>
        <input type="password" className="form-control mt-2" placeholder="contraseña" name="password" value={password} onChange={onInputChange}/>

        {
            (username === 'sergio') && <Message></Message>
        }

        <button className="btn btn-primary mt-2" onClick={onResetForm}>Limpiar</button>
        </>
    )
}
