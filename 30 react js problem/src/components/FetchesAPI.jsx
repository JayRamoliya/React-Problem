import React, { useEffect, useState } from 'react'

const FetchesAPI = () => {

    const [data, setData] = useState()
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => setData(data))
    }, [])
    return (
        <>
            {
                data ? (
                    <div>
                        {data.map((item) => (
                            <div key={item.id}>
                                <h2>{item.name}</h2>
                                <p>{item.email}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Loading...</p>
                )
            }
        </>
    )
}

export default FetchesAPI