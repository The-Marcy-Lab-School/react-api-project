import React from 'react'
import Home from './pages/HomePage'
import Info from './pages/Info'
import {Routes, Route} from 'react-router-dom'

function App() {
return (
  <>

  <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/GazaInfo" element={<Info/>} />
  </Routes>
 
  </>
)
}

export default App
