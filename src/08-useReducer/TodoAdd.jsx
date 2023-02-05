// import { useState } from "react";
import { useForm } from "../hooks";

export function TodoAdd({onNewTODO = ()=>{}}) {

    
    const {description, onInputChange, onResetForm} = useForm({description: ''});


    // const [newTodo, setNewTodo] = useState({id: new Date().getTime(), description: '', done: false});
    // function onInputChange(event) {
    //     setNewTodo({...newTodo, description:event.target.value});
    // }
    
    function onSubmitForm(event) {
        event.preventDefault();
        if (description.length > 3) {
            const newTodo = {
                id: new Date().getTime(), 
                description: description,
                done: false
            };
            onNewTODO(newTodo);
            onResetForm();

        }
    }

    return (
        <>
            <form onSubmit={onSubmitForm}>
                <input type="text" placeholder="¿Que hay que hacer?" 
                className="form-control" 
                onChange={onInputChange}
                value={description}
                name="description"/>

                <button type="submit" className="btn btn-outline-primary mt-2">Agregar</button>
            </form>
        </>
    )
}
