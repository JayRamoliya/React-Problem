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
import WeatherApp from './WeatherApp'
import SearchBar from './SearchBar'
import Pagination from './Pagination'
import ColorPicker from './ColorPicker'
import NavigationMenu from './NavigationMenu'
import ThemeContext from './ThemeContext'
import { ThemeProvider } from '../context/ThemeContext'


const Routing = () => {
  const lists = ['jay',
    'sneh',
    'manav',
    'prince',
    'gopi',
    'happy',
    'darshali',
    'niv',
    'het',
    'khushi',
  ]
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
            <li>
              <Link to='/weather'>WeatherApp</Link>
            </li>
            <li>
              <Link to='/search'>SearchBar</Link>
            </li>
            <li>
              <Link to='/pagi'>Pagination</Link>
            </li>
            <li>
              <Link to='/colorpicker'>ColorPicker</Link>
            </li>
            <li>
              <Link to='/navmenu'>NavigationMenu</Link>
            </li>
            <li>
              <Link to='/themecontext'>ThemeContext</Link>
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
          <Route path='/weather' element={<WeatherApp />}></Route>
          <Route path='/search' element={<SearchBar items={lists} />}></Route>
          <Route path='/pagi' element={<Pagination items={lists} itemparpage={3} />}></Route>
          <Route path='/colorpicker' element={<ColorPicker />}></Route>
          <Route path='/navmenu' element={<NavigationMenu />}></Route>
          
          <ThemeProvider>
            <Route path='/themecontext' element={<ThemeContext />}></Route>
          </ThemeProvider>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default Routing