import React, { useState } from 'react'

const ToDo = () => {
    const [input, setInput] = useState('')
    const [todos, setTodos] = useState([])

    const addtodo = () => {
        if (input.trim()!=='') {
            setTodos([...todos, input])
            setInput('')
        }
    }
    const removetodo = (i) => {
        setTodos(todos.filter((todo, i) => i !== i))
    }
    return (
        <>
            <input type="text" onChange={(e) => setInput(e.target.value)} />
            <button onClick={addtodo}>Add</button>
            <ul>
                {todos.map((todo, i) => (
                <li key={i}>{todo} <button onClick={() => removetodo(i)}>Remove</button> </li> 
                ))}
            </ul>
        </>
    )
}

export default ToDo