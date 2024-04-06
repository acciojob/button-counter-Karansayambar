import {react,component} from "react"

const AppCounter = () => {
    const [count, setCount] = useState(0);
    function increment(){
        const crr = count;
        setCount(crr + 1);
    }
    return (
        <>
        <p>Button clicked {count} times</p>
        <button onclick={() => increment}>Click me</button>
        </>
    )
}


export default Counter;