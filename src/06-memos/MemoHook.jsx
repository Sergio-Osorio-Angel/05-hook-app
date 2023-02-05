import { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter"
import Small from "./Small";

function heavyStuff(iterationNumber=100) {
    for (let i = 0; i < iterationNumber; i++) {
        console.log('Ahí vamos');
    }
    return `${iterationNumber} iteraciones`;
}

export function MemoHook() {

    const {counter, increment} = useCounter(4000);

    const [show, setShow] = useState(true);

    const memorizeCounter =  useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
    <h1>Counter: <Small value={counter}></Small></h1>
    <hr />

    <h4>{ memorizeCounter }</h4>

    <button className="btn btn-primary" onClick={ ()=> increment() }>+1</button>

    <button className="btn btn-outline-primary" onClick={()=> {setShow(!show)}}>
        Show/Hide {JSON.stringify(show)}
    </button>
    </>
  )
}