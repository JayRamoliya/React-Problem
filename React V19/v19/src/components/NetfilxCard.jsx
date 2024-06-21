import React from 'react'
import seriesData from '../api/seriesData.json'
import SeriesCard from './SeriesCard'


// export const NetfilxCard = () => {
const NetfilxCard = () => {
    let name = "Naruto Uzumaki"
    let rating = 10.0
    let age = 16

    return (
        // [<NetfilxCard key={1}/>,<NetfilxCard key={2}/>] don't use like this use <></>
        <>
            <ul>
                {seriesData.map((current) => (
                    <SeriesCard key={current.id} current={current} age={age} />
                ))}
            </ul>
        </>
    )
}

export default NetfilxCard

