import React from 'react'
import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <div>Hello</div>
    </div>
  )
}

export default App
