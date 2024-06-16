import React, { useState } from 'react'

const FormInput = () => {
    const [live, setLive] = useState('type something')

    return (
        <>
            <input type="text" value={live} onChange={(e) => setLive(e.target.value)} />
            <p>User Input: {live}</p>
        </>
    )
}

export default FormInput