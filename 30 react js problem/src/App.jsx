import React from 'react'
import Routing from './components/Routing'
import { ThemeProvider } from './context/ThemeContext'
import ThemeContext from './components/ThemeContext'
import ThemeContext2 from './components/ThemeContext2'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart'
import { AuthProvider } from './context/AuthContext'
import UserContext from './components/UserContext'

const App = () => {
  return (
    <>
      <Routing />
      <ThemeProvider>
        <div className="themepro">
          <ThemeContext />
          <ThemeContext2 />
        </div>
      </ThemeProvider>

      <CartProvider>
        <Cart/>
      </CartProvider>    

      <AuthProvider>
        <UserContext/>
      </AuthProvider>  
    </>
  )
}

export default App