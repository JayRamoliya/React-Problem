import React, { useState } from 'react'

const ToggleSwitch = () => {
    const [toggle, setToggle] = useState(false)
    function handletoggle(){
        setToggle(!toggle)
    }
  return (
    <>
        <label>
            <input type="checkbox" onChange={handletoggle} />
        </label>
        <p>{toggle ? 'On' : 'Off'}</p>
    </>
  )
}

export default ToggleSwitch