import React, { useReducer, useState } from 'react';
import styled from 'styled-components';

function boxreducer(state, action) {
    switch (action.type) {
        case 'MOVE':
            return {
                ...state,
                left: action.payload.left,
                top: action.payload.top,
            };
        default:
            return state;
    }
}

const Draggable = () => {
    const [boxstate, dispatch] = useReducer(boxreducer, { left: 0, top: 0 });
    
    const [isDragging, setIsDragging] = useState(false);
    const [initialX, setInitialX] = useState(0);
    const [initialY, setInitialY] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setInitialX(e.clientX - boxstate.left);
        setInitialY(e.clientY - boxstate.top);
    };

    const handleMouseMove = (e) => {
        if (isDragging) {
            dispatch({
                type: 'MOVE', 
                payload: {
                    left: e.clientX - initialX,
                    top: e.clientY - initialY,
                }
            });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    return (
        <Container
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            style={{
                left: boxstate.left,
                top: boxstate.top,
            }}
        >
            <Text>Drag me</Text>
        </Container>
    );
};

const Container = styled.div`
    position: absolute;
    width: 100px;
    height: 100px;
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: grab;
    user-select: none;
`;

const Text = styled.p`
    color: white;
    font-size: 16px;
    margin: 0;
`;

export default Draggable;
