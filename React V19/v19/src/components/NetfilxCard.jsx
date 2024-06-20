import React from 'react'
import seriesData from '../api/seriesData.json'


// export const NetfilxCard = () => {
const NetfilxCard = () => {
    let name = "Naruto Uzumaki"
    let rating = 10.0
    let age = 16

    const clickimg = () => {
        alert('click')
    }
    return (
        // [<NetfilxCard key={1}/>,<NetfilxCard key={2}/>] don't use like this use <></>
        <>
            <ul>
                {seriesData.map((current) => {
                    return (
                        <li key={current.id}>
                            <div onClick={clickimg}>
                                <img src={current.img_url} alt=""  width={300}/>
                            </div>

                            <h2>{current.name}</h2>

                            <h3>Rating:{current.rating}</h3>
                            <p>{current.description}</p>
                            <p>Genre : {current.genre}</p>
                            <p>Cast : {current.cast}</p>

                            <a href={current.watch_url}>
                                <button>{age >= 18 ? 'watch now' : 'not watch'}</button>
                            </a>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default NetfilxCard

