import React, { useState } from 'react'

const CounterApp = () => {
    const [count, setCount] = useState(0)
    return (
        <>
            <button onClick={() => setCount(count-1)}>-</button>
            <span>{count}</span>
            <button onClick={() => setCount(count+1)}>+</button>
        </>
    )
}

export default CounterApp