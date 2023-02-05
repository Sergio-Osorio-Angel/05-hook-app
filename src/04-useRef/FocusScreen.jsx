import { useRef } from "react"

export  function FocusScreen() {

    const inputRef = useRef();

    function onclick() {
        // Imprime el elemento html
        console.log(inputRef);
        // Realizar focus
        inputRef.current.focus();
    }

    return (
    <>
        <h1>Focus Screen</h1>
        <hr />

        <input ref={inputRef} type="text" placeholder="Ingrese su nombre" className="form-control"/>
        <button className="btn btn-primary mt-2" onClick={onclick}>Set focus</button>
    </>
    )
}
