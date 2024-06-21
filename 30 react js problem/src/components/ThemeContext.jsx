import React from 'react'
import { useTheme } from '../context/ThemeContext'

const ThemeContext = () => {
    const { toggleTheme, theme } = useTheme()

    return (
        <>
            <label htmlFor="">
                <input type="checkbox" checked={theme} onChange={toggleTheme} />
                Dark Mode
            </label>
        </>
    )
}

export default ThemeContext