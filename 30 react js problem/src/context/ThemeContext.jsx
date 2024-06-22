import { createContext, useContext, useState } from "react";

const ThemeContext = createContext()

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(false)

    const toggleTheme = () => {
        setTheme((prev) => !prev)
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}


const useTheme = () => {
    return useContext(ThemeContext)
}

export { ThemeProvider, useTheme }