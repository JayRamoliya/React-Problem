import React, { useState } from 'react'

const Auth = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [register, setRegister] = useState(false)

    return (
        <>
            <form action="">
                <input type="email" onChange={(e) => setEmail(e.target.value)} />
                <br />
                <input type="password" onChange={(e) => setPassword(e.target.value)} />
                <br />
                <p>{register ? "Register Now" : "Log in"}</p>
                <br />
                <button onClick={() => setRegister(!register)}>
                    {register ? "Register" : "Login"}
                </button>
            </form>
        </>
    )
}

export default Auth