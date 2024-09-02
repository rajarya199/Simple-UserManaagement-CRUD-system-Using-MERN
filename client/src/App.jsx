import { useState } from 'react'
import AddUser from './components/AddUser'
import './App.css'
import Navbar from './components/Navbar'
import AllUser from './components/AllUser'
import Home from './components/Home'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import EditUser from './components/EditUser'


function App() {

  return (
    <BrowserRouter>
     
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/users' element={<AllUser/>}/>
      <Route path='/adduser' element={<AddUser/>}/>
      <Route path='/updateuser/:id' element={<EditUser/>}/>
     </Routes>
  
    </BrowserRouter>
  )
}

export default App
