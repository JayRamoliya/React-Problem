import React from 'react'

const ListItems = () => {
    const items = ['Item 1', 'Item 2', 'Item 3',]
    return (
        <>
            <ul>
                {items.map((item, i) => {
                    return <li key={i}>{item}</li>
                })}
            </ul>
        </>
    )
}

export default ListItems