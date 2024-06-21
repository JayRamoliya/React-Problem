import { createContext } from "react";

const ThemeContext = createContext()

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("light")
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
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