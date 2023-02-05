import { useState } from "react"

export function CounterApp() {


    const [counter, setcounter] = useState({counter1: 10, counter2:20, counter3:30});

    return (
    <>
        <h1>Counter 1: {counter.counter1}</h1>
        <h1>Counter 2: {counter.counter2}</h1>
        <h1>Counter 3: {counter.counter3}</h1>
        <hr />

        <button onClick={ () => setcounter({...counter, counter1: counter.counter1+1})}>+1</button>
    </>
    )
}
