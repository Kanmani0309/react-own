import { useState } from 'react'
import './App.css'
import Header from './Header'
import Navbar from './Navbar'
import Home from './Home'

function App() {
  const [openNavbarToggle, setOpenNavbarToggle] = useState(false)

  const OpenNavbar = () => {
    setOpenNavbarToggle(!openNavbarToggle)
  }
  return (
    <div className = 'grid-container'  >
      <Header OpenNavbar = {OpenNavbar}/>
      <Navbar openNavbarToggle = {openNavbarToggle} OpenNavbar = {OpenNavbar}/>
      <Home/>     
     
    </div>
  )
}

export default App