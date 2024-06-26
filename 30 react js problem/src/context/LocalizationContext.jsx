import { createContext, useContext, useState } from "react";


const LocalizationContext = createContext()



export function LocalizationProvider({ children }) {
    const [local, setLocal] = useState('en')

    const localizedstring = {
        "en": {
            "title": "Welcome to the ReactJS App",
            "subtitle": "This is a simple ReactJS App using React Hooks and Context API",
        },
        "gj": {
            "title": "ReactJS એપમાં આપનું સ્વાગત છે",
            "subtitle": "રિએક્ટ હુક્સ અને કોન્ટેક્સ્ટ API નો ઉપયોગ કરીને આ એક સરળ ReactJS એપ્લિકેશન છે",
        }
    }

    const translate = (key) => {
        return localizedstring[local][key]
    }

    return (
        <LocalizationContext.Provider value={{setLocal,local,translate}} >
            {children}
        </LocalizationContext.Provider>
    )
}


export const useLocalization = () => {
    return useContext(LocalizationContext)
}