import React, { useState } from 'react'
import '../styles/NavigationMenu.css'

const NavigationMenu = () => {
    const [open,setOpen] = useState(false)

    const togglemenu = () => {
        setOpen(!open)
    }
    return (
        <>
            <div>
                <button className='menu-icon' onClick={togglemenu}>
                    =
                </button>
                <ul className={`menu ${open ? 'open' : ''}`}>
                    <li>
                        <a href='#'>Home</a>
                    </li>
                    <li>
                        <a href='#'>About</a>
                    </li>
                    <li>
                        <a href='#'>Contact</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default NavigationMenu