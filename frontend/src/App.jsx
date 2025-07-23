import React from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Statistics from './pages/Statistics'

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/stats' element={<Statistics />} />
        </Routes>
      </div>
    </>
  )
}

export default App