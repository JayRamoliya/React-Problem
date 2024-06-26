import React, { useEffect, useState } from 'react'

const combined = () => {
    const [data,setData] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => setData(res.data))
    }, [])
    return (
        <>

        </>
    )
}

export default combined