import React from 'react'

const Interview = () => {
    const students = []
    return (
        <>
            <p>{students.length && "No Student Found 1"}</p>
            <p>{students.length === 0 && "No Student Found 2"}</p>
            <p>{!students.length && "No Student Found 3"}</p>
            <p>Number of student {students.length}</p>
        </>
    )
}

export default Interview