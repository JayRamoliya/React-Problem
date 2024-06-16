import React from 'react'
import HelloWorld from './components/HelloWorld'
import CounterApp from './components/CounterApp'
import FormInput from './components/FormInput'
import ListItems from './components/ListItems'
import ToggleSwitch from './components/ToggleSwitch'

const App = () => {
  return (
    <>
      <HelloWorld/>
      <CounterApp/>
      <FormInput/>
      <ListItems/>
      <ToggleSwitch/>
    </>
  )
}

export default App