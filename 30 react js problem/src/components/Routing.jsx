import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Background from './Background'
import CounterApp from './CounterApp'
import FetchesAPI from './FetchesAPI'
import FormInput from './FormInput'
import ListItems from './ListItems'
import Timer from './Timer'
import ToDo from './ToDo'
import ToggleSwitch from './ToggleSwitch'
import Quote from './Quote'
import FileUploader from './FileUploader'
import Auth from './Auth'


const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to='/background'>Background</Link>
            </li>
            <li>
              <Link to='/counterapp'>Counter App</Link>
            </li>
            <li>
              <Link to='/fetchesapi'>Fetche API</Link>
            </li>
            <li>
              <Link to='/forminput'>Form Input</Link>
            </li>
            <li>
              <Link to='/listitem'>List Items</Link>
            </li>
            <li>
              <Link to='/timer'>Timer</Link>
            </li>
            <li>
              <Link to='/todo'>To Do</Link>
            </li>
            <li>
              <Link to='/toggleswitch'>Toggle Switch</Link>
            </li>
            <li>
              <Link to='/quote'>Quote</Link>
            </li>
            <li>
              <Link to='/fileuploader'>File Uploader</Link>
            </li>
            <li>
              <Link to='/auth'>Auth</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/background' element={<Background />}></Route>
          <Route path='/counterapp' element={<CounterApp />}></Route>
          <Route path='/fetchesapi' element={<FetchesAPI />}></Route>
          <Route path='/forminput' element={<FormInput />}></Route>
          <Route path='/listitem' element={<ListItems />}></Route>
          <Route path='/timer' element={<Timer />}></Route>
          <Route path='/todo' element={<ToDo />}></Route>
          <Route path='/toggleswitch' element={<ToggleSwitch />}></Route>
          <Route path='/quote' element={<Quote />}></Route>
          <Route path='/fileuploader' element={<FileUploader />}></Route>
          <Route path='/auth' element={<Auth />}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default Routing