import { useEffect } from "react"

export  function Message() {

    useEffect(() => {

        function onMouseMove({x,y}) {
            const coords = {x,y};
            console.log(coords);   
        }
        window.addEventListener('mousemove', onMouseMove);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        }
    }, [])
    
    return (
        <>
        <h3>Usuario ya existe</h3>
        </>
    )
}
