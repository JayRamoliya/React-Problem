import React from 'react'

const SeriesCard = (props) => {
    const {age,current} = props

    return (
        <>
            <li>
                <div>
                    <img src={current.img_url} alt="" width={300} />
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
        </>
    )
}

export default SeriesCard