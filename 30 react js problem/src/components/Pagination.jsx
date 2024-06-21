import React, { useState } from 'react'

const Pagination = ({ items, itemparpage }) => {

    const [currentpage, setCurrentpage] = useState(1)

    const indexoflastitem = currentpage * itemparpage
    const indexoffirstitem = indexoflastitem - itemparpage

    const currentitems = items.slice(indexoffirstitem, indexoflastitem)
    
    const pagenumber = []
    for (let i = 1; i <= Math.ceil(items.length / itemparpage);
        i++) {
        pagenumber.push(i)
    }
    return (
        <>
        <div>
            <ul>
                {currentitems.map((item,i)=>(
                    <li key={i}>{item}</li>
                ))}
            </ul>
            {pagenumber.map((num,i)=>(
                <button key={i} onClick={()=>setCurrentpage(num)}>{num}</button>
            ))}
        </div>
        </>
    )
}

export default Pagination