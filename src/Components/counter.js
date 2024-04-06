import React, { Component } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    function increment(){
        const crr = count;
        setCount(crr + 1);
    }
    return (
        <>
        <p>Button clicked {count} times</p>
        <button onClick={() => increment()}>Click me</button>
        </>
    )
}

export default Counter;
