import React from 'react'
import InsertImage from './components/InsertImage'
import Display from './components/display'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ViewImage from './components/view-image'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<InsertImage />}></Route>
          <Route path='/display' element={<Display />}></Route>
          <Route path='/view/:id' element={<ViewImage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
