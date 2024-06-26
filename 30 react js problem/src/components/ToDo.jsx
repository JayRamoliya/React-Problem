import React, { useState } from 'react';
import styled from 'styled-components';

const ToDoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`;

const Input = styled.input`
    padding: 10px;
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 10px;
    font-size: 16px;
    &:focus {
        border-color: #1e90ff;
        outline: none;
    }
`;

const AddButton = styled.button`
    padding: 10px 20px;
    background-color: #1e90ff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 20px;
    &:hover {
        background-color: #1c86ee;
    }
`;

const ToDoList = styled.ul`
    list-style-type: none;
    padding: 0;
    width: 300px;
`;

const ToDoItem = styled.li`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 10px;
    font-size: 16px;
    background-color: #f9f9f9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:hover {
        background-color: #f1f1f1;
    }
`;

const RemoveButton = styled.button`
    padding: 5px 10px;
    background-color: #ff4d4d;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background-color: #ff1a1a;
    }
`;

const ToDo = () => {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);

    const addtodo = () => {
        if (input.trim() !== '') {
            setTodos([...todos, input]);
            setInput('');
        }
    };

    const removetodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    return (
        <ToDoContainer>
            <Input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <AddButton onClick={addtodo}>Add</AddButton>
            <ToDoList>
                {todos.map((todo, i) => (
                    <ToDoItem key={i}>
                        {todo}
                        <RemoveButton onClick={() => removetodo(i)}>
                            Remove
                        </RemoveButton>
                    </ToDoItem>
                ))}
            </ToDoList>
        </ToDoContainer>
    );
};

export default ToDo;
