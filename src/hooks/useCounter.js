import { useState } from "react";

export function useCounter(initialValue = 10) {
    const [counter, setCounter] = useState(initialValue);

    function increment(value=1) {
        setCounter( current => current+value);
    }
    function decrement(value=1) {
        if (counter > 0) {
            setCounter(current => current-value);
        }
    }
    function reset() {
        setCounter(initialValue);
    }

    return {
        counter: counter,
        increment: increment,
        decrement: decrement,
        reset: reset
    };
}