import React, { useState } from 'react';

const Background = () => {
    const [color, setColor] = useState('white');

    const handleClick = () => {
        const newColor = color === 'white' ? 'red' : 'green';
        setColor(newColor);
    };

    return (
        <div
            onClick={handleClick}
            style={{
                backgroundColor: color,
                width: '200px',
                height: '200px',
            }}
        >
            Click me to change color
        </div>
    );
};

export default Background;
