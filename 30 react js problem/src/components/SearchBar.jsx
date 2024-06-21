import React, { useState } from 'react'

const SearchBar = ({ items }) => {
    console.log(items);
    const [search, setSearch] = useState('')

    const filtertem = items.filter((item) => {
        return item.toLowerCase().includes(search.toLocaleLowerCase());
    })
    return (
        <>
            <input type="text" placeholder="Search..." onChange={(e) => setSearch(e.target.value)} />
            <ul>
                {filtertem.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </>
    )
}

export default SearchBar