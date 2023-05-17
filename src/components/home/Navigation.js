import React from 'react'
import '../../App.css'
import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
    
     <nav className="main-nav">
      <ul>
        <li><NavLink to="/" >Mountain</NavLink></li>
        <li><NavLink to="/beaches">Beaches</NavLink></li>
        <li><NavLink to="/birds">Birds</NavLink></li>
        <li><NavLink to="/food">Food</NavLink></li>
      </ul>
      
    </nav>
    
  )
}

export default Navigation
