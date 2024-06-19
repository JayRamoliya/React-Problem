import React from 'react'
import NetfilxCard from './components/NetfilxCard';
import Interview from './components/Interview';

const App = () => {
  return (
    <>
      <Interview/>
      <h1>Hello Jay Ramoliya</h1>
      <NetfilxCard/>
    </>
  )
}

export default App


console.log(React.createElement('h1', null, "Hello Jay Ramoliya"));