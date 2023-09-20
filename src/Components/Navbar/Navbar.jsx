import React, { useState } from 'react'
import '../../assets/css/style.css'

import { Link } from 'react-router-dom';
const Navbar = () => {
  // const menu = document.querySelector(".nav__menu");
  // const menuBtn = window.document.querySelector("#open-menu-btn");
  // const closeBtn = document.querySelector("#close-menu-btn");

  const [open, setopen] = useState(false)


  const haldelOpen = () => {
    setopen(true)
  }

  const handelClose = () => {
    setopen(false)
  }
  return (
    <div>
      <nav>
        <div className="container nav__container">
          <Link to="/" className='nav_logo'>
            <h4>EduTech</h4> 
          </Link>
          <ul className="nav__menu" style={open?{display:"flex"}:{}}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/topic">Topic</Link></li>
            {/* <li><Link to="/contact">Contact</Link></li> */}
          </ul>
          <button id="open-menu-btn" onClick={()=>haldelOpen()} style={open?{display:"none"}:{}}><i className='uil uil-bars'></i></button>
          <button id="close-menu-btn" onClick={()=>handelClose()} style={open?{display:"inline-block"}:{}}><i className="uil uil-multiply"></i></button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar 