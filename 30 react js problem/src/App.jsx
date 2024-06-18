import React from 'react'
import HelloWorld from './components/HelloWorld'
import CounterApp from './components/CounterApp'
import FormInput from './components/FormInput'
import ListItems from './components/ListItems'
import ToggleSwitch from './components/ToggleSwitch'
import FetchesAPI from './components/FetchesAPI'
import Timer from './components/Timer'
import ToDo from './components/ToDo'

const App = () => {
  return (
    <>
      <Timer/>
      <ToDo/>
      <HelloWorld/>
      <CounterApp/>
      <FormInput/>
      <ListItems/>
      <ToggleSwitch/>
      <FetchesAPI/>
    </>
  )
}

export default App