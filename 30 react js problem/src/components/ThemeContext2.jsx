import React from 'react'
import { useTheme } from '../context/ThemeContext'
import '../styles/ThemeContext.css'

const ThemeContext2 = () => {
  const { theme } = useTheme()

  const themeclass = theme ? 'dark-theme' : 'light-theme'

  return (
    <>
      <div className={`container ${themeclass}`}>
        <h1>Theme Change</h1>
      </div>
    </>
  )
}

export default ThemeContext2