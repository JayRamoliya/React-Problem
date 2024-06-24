import React, { useReducer, useState } from 'react';
import styled from 'styled-components';

const taskreducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, { id: Date.now(), text: action.payload, completed: false }];
        case 'REMOVE':
            return state.filter((task) => task.id !== action.payload);
        case 'TOGGLE_TASK':
            return state.map((task) => task.id === action.payload ? { ...task, completed: !task.completed } : task);
        default:
            return state;
    }
};

const Container = styled.div`
    text-align: center;
    padding: 20px;
    border: 2px solid #ccc;
    border-radius: 10px;
    width: 300px;
    margin: 20px auto;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
    font-size: 1.8em;
    color: #333;
`;

const Input = styled.input`
    padding: 10px;
    width: calc(100% - 22px);
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1em;
`;

const Button = styled.button`
    background-color: #28a745;
    color: white;
    border: none;
    padding: 10px 15px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #218838;
    }

    &:focus {
        outline: none;
    }
`;

const TaskList = styled.ul`
    list-style: none;
    padding: 0;
`;

const TaskItem = styled.li`
    text-align: left;
    margin: 10px 0;
    padding: 10px;
    background-color: #f9f9f9;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const TaskText = styled.span`
    cursor: pointer;
    text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
`;

const TodoReducer = () => {
    const [tasks, dispatch] = useReducer(taskreducer, []);
    const [taskText, setTaskText] = useState('');

    const addTask = () => {
        if (taskText.trim() !== '') {
            dispatch({
                type: 'ADD_TASK',
                payload: taskText,
            });
            setTaskText('');
        }
    };

    return (
        <Container>
            <Title>Todo Reducer</Title>
            <Input
                type="text"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                placeholder="Add new task..."
            />
            <Button onClick={addTask}>Add new task</Button>
            <TaskList>
                {tasks.map((task) => (
                    <TaskItem key={task.id}>
                        <TaskText
                            completed={task.completed}
                            onClick={() => dispatch({ type: 'TOGGLE_TASK', payload: task.id })}
                        >
                            {task.text}
                        </TaskText>
                        <Button onClick={() => dispatch({ type: 'REMOVE', payload: task.id })}>Remove</Button>
                    </TaskItem>
                ))}
            </TaskList>
        </Container>
    );
};

export default TodoReducer;
