import { useState } from "react";

function Counter() {
    // getState and setState -> default value
    // ONLY change state using a setter
    const [count, setCount] = useState(0);
    return (<>
        <title>Counter</title>
        <h2>Counter</h2>
        <input type="number" readOnly value={count} />
        <button onClick={() => setCount(count + 1)}>+1</button>
        <p>{new Date().toLocaleTimeString()}</p>
    </>);
}

export default Counter;