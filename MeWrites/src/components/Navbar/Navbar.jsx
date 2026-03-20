import React from 'react'
import "./Navbar.css";
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <img src={logo} alt="logo" />
        <h2>MeWrites</h2>
      </div>
      <ul className='nav-links'>
        <li>
            <a href="#home">Home</a>
        </li>
        <li>
            <a href="#about">About</a>
        </li>
        <li>
            <a href="#features">Features</a>
        </li>
      </ul>
      <div className="auth-buttons">
        <button>Login</button>
        <button>Signup</button>
      </div>
    </nav>
  )
}

export default Navbar
