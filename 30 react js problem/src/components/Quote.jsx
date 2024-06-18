import React, { useState } from 'react'

const Quote = () => {
    const [quote,setQuote] = useState('')

    const quotes = ['“Stay hungry, stay foolish” - Steve Jobs',
        '“The most effective and inspiring quotes are the shortest.”',
        '“The best way to predict your future is to create it.” - Abraham Lincoln',
        '“The biggest risk is not taking any risk.” - Mark Zuckerberg',
        '“The only way to do great work is to love what you do.” - Steve Jobs',
        '“Success is not final, failure is not fatal: It is the courage to continue that counts.” - Winston Churchill',
        '“Do not watch the clock; do what it does. Keep going.”',
        '“The biggest adventure you can take is to live the life of your dreams.” - Oprah'
    ]
    const changequote = () => {
        const randomquote = Math.floor(Math.random() * quotes.length)
        setQuote(quotes[randomquote])
    }

    return (
        <>
            {quote}
            <br />
            <button onClick={changequote}>Click</button>
        </>
    )
}

export default Quote