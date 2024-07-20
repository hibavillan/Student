import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import AddStudent from './components/AddStudent'
import ViewStudent from './components/ViewStudent'
import { Routes ,Route } from 'react-router-dom'

function App() {

  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Routes>
          <Route path='/' element={<AddStudent />} />
          <Route path='/T' element={<ViewStudent/>} />
        </Routes>
    </>
  )
}

export default App
