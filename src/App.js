import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Homescreen from './Pages/Homescreen/Homescreen';
import './App.css'
import Profilescreen from './Pages/Profilescreen/Profilescreen';
import Loginscreen from './Pages/Loginscreen/Loginscreen';
const App = () => {
  const user = null;
  return (
    <div className='app'>
      <Router>
      {
        !user ? 
        
       <Loginscreen />
        : 
        <Routes>
          <Route path="/profile" element={<Profilescreen />} />
          <Route path="/" element={<Homescreen />} />
        </Routes>
      }
      </Router>
    </div>
  )
}

export default App