import React from 'react'

const NetfilxCard = () => {
    let name = "Naruto Uzumaki"
    let rating = 10.0

    const clickimg = () => {
        alert('click')
    }
    return (
        // [<NetfilxCard key={1}/>,<NetfilxCard key={2}/>] don't use like this use <></>
        <>
            <div onClick={clickimg}>
                <img src="Naruto_newshot.webp" alt="" />
            </div>
            <h2>{name}</h2>
            <h3>Rating:{rating}</h3>
            <p>
                Naruto Uzumaki (うずまきナルト, Uzumaki Naruto) is a shinobi of Konohagakure's Uzumaki clan. He became the jinchūriki of the Nine-Tails on the day of his birth — a fate that caused him to be shunned by most of Konoha throughout his childhood. After joining Team Kakashi, Naruto worked hard to gain the village's acknowledgement all the while chasing his dream to become Hokage. In the following years, through many hardships and ordeals, he became a capable ninja, regarded as a hero both by the villagers, and soon after, the rest of the world, becoming known as the Hero of the Hidden Leaf (木ノ葉隠れの英雄, Konohagakure no Eiyū, literally meaning: Hero of the Hidden Tree Leaves).
            </p>
        </>
    )
}

export default NetfilxCard

