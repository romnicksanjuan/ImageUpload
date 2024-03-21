import React from 'react'
import InsertImage from './components/InsertImage'
import Display from './components/display'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<InsertImage />}></Route>
          <Route path='/display' element={<Display />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
