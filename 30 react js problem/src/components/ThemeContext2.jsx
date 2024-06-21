import React from 'react'
import { useTheme } from '../context/ThemeContext'

const ThemeContext2 = () => {
    const {theme} = useTheme()
    const themeclass = theme ? 'dark-theme' : 'light-theme'
  return (
    <>
    <div className={`container ${themeclass}`}>
    <h1>Theme Context 2</h1>
    </div>
    </>
  )
}

export default ThemeContext2