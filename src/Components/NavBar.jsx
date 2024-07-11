import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            <h2>Employee <br /> DashBoard</h2>
        </div>
        <div className="items">
            <Link to="/">Home</Link>
            <Link to="/Login">Login</Link>
        </div>
    </div>
  )
}

export default NavBar