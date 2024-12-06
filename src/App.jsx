import { useState } from 'react'
import './App.css'
import {Routes, Route, Link} from 'react-router-dom'
import CalculatorPage from './pages/CalculatorPage'
import TodoListPage from './pages/TodoListPage'
import UserListPage from './pages/UserListPage'

function App() {


  return (
    <>
    <h1>Git-Konflikter</h1>
    <nav>
      <ul>
        <li>
            <Link to="/calculator">Calculator</Link>
        </li>
        <li>
            <Link to="/todolist">Todolist</Link>
        </li>
        <li>
            <Link to="/userlist">Userlist</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path='/calculator' element={<CalculatorPage/>}/>
      <Route path='/todolist' element={<TodoListPage/>}/>
      <Route path='/userlist' element={<UserListPage/>}/>
    </Routes>
    </>
  )
}

export default App
