import React, { useState } from 'react'

const Auth = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isregistered, setIsRegistered] = useState(false)
    const [islogined, setIsLogined] = useState(false)
    const [users, setUsers] = useState([])

    const handleauth = () => {
        if (isregistered) {
            // login logic
            console.log('login')
            if (isregistered) {
                const user = users.find((u) => u.email === email && u.password === password)
                if (user) {
                    setIsLogined(true)
                } else {
                    alert('Invalid email or password')
                }
            }
        } else {
            // register logic
            console.log('register')
            const newuser = { email, password }
            setUsers([...users, newuser])
            localStorage.setItem('user', JSON.stringify([...users, newuser]))
            setIsLogined(true)
        }
    }

    const handlelogout = () => {
        setIsLogined(false)
        setEmail('')
        setPassword('')
    }
    return (
        <>
            {
                islogined ? (
                    <div>
                        <h2>Welcome {email}</h2>
                        <button onClick={handlelogout}>Logout</button>
                    </div>
                ) : (
                    <div>
                        <h2>{isregistered ? "Login" : "Register"}</h2>

                        <form action="">
                            <input type="email" onChange={(e) => setEmail(e.target.value)} />
                            <input type="password" onChange={(e) => setPassword(e.target.value)} />
                            <button onClick={handleauth}>{isregistered ? "Login" : "Register"}</button>
                        </form>
                        <p>{isregistered ? "Register Now" : "Log in"}</p>
                        <button onClick={() => setIsRegistered(!isregistered)}>
                            {isregistered ? "Go To Register Page" : "Go To Login Page"}
                        </button>
                    </div>
                )
            }
        </>
    )
}

export default Auth