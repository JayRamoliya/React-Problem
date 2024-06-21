import React, { useState } from 'react'

const ColorPicker = () => {
    const [color, setColor] = useState('black')
    const handlechange = (e) => {
        setColor(e.target.value)
    }
    return (
        <>
            <input type="color" onChange={handlechange} />
            <div style={{width:"100px", height:'100px', backgroundColor:color, position:'absolute',left:"50%"}}></div>
        </>
    )
}

export default ColorPicker