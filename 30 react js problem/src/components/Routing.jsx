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
import Cart from './Cart'
import CounterReducer from './CounterReducer'
import TodoReducer from './TodoReducer'
import HelloWorld from './HelloWorld'
import PaginationReducer from './PaginationReducer'
import Draggable from './Draggable'
import CombinedDataFetch from './CombinedDataFetch'


import styled from 'styled-components'
import MultipleStates from './MultipleStates'
import ImageGallery from './ImageGallery'
import RoutePages from './RoutePages'

const Nav = styled.nav`
  background-color: red;
`
const UL = styled.ul`
list-style: none;
display: flex;
justify-content: space-around;
`
const LI = styled.li`
padding: 10px;
`


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
        <Nav>
          <UL>
            <LI>
              <Link to='/hello'>Hello World</Link>
            </LI>
            <LI>
              <Link to='/background'>Background</Link>
            </LI>
            <LI>
              <Link to='/counterapp'>Counter App</Link>
            </LI>
            <LI>
              <Link to='/fetchesapi'>Fetche API</Link>
            </LI>
            <LI>
              <Link to='/forminput'>Form Input</Link>
            </LI>
            <LI>
              <Link to='/listitem'>List Items</Link>
            </LI>
            <LI>
              <Link to='/timer'>Timer</Link>
            </LI>
            <LI>
              <Link to='/todo'>To Do</Link>
            </LI>
            <LI>
              <Link to='/toggleswitch'>Toggle Switch</Link>
            </LI>
            <LI>
              <Link to='/quote'>Quote</Link>
            </LI>
            <LI>
              <Link to='/fileuploader'>File Uploader</Link>
            </LI>
            <LI>
              <Link to='/auth'>Auth</Link>
            </LI>
            <LI>
              <Link to='/weather'>WeatherApp</Link>
            </LI>
            <LI>
              <Link to='/search'>SearchBar</Link>
            </LI>
          </UL>
        </Nav>
        <Nav>
          <UL>
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
              <Link to='/counter'>Counter Reducer</Link>
            </li>
            <li>
              <Link to='/todoreducer'>To Do Reducer</Link>
            </li>
            <li>
              <Link to='/pagireducer'>Pagination Reducer</Link>
            </li>
            <li>
              <Link to='/draggable'>Draggable</Link>
            </li>
            <li>
              <Link to='/combineddatafetch'>Combined DataFetch</Link>
            </li>
            <LI>
              <Link to='/multiplestates'>Multiple States</Link>
            </LI>
            <LI>
              <Link to='/imagegallery'>Image Gallery</Link>
            </LI>
          </UL>
        </Nav>
        <Routes>
          <Route path='/hello' element={<HelloWorld />}></Route>
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
          <Route path='/counter' element={<CounterReducer />}></Route>
          <Route path='/todoreducer' element={<TodoReducer />}></Route>
          <Route path='/pagireducer' element={<PaginationReducer />}></Route>
          <Route path='/draggable' element={<Draggable />}></Route>
          <Route path='/combineddatafetch' element={<CombinedDataFetch />}></Route>
        </Routes>
      </BrowserRouter>
      <RoutePages/>
    </>
  )
}

export default Routing



