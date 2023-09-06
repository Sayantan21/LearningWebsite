import React, { useState } from 'react'
import '../../assets/css/style.css'

import { Link } from 'react-router-dom';
const Navbar = () => {
  // const menu = document.querySelector(".nav__menu");
  // const menuBtn = window.document.querySelector("#open-menu-btn");
  // const closeBtn = document.querySelector("#close-menu-btn");

  const [open, setopen] = useState(false)


  const haldelOpen = () => {
    // menu.style.display = "flex";
    // closeBtn.style.display = "inline-block";
    // menuBtn.style.display = "none";
    setopen(true)
  }

  const handelClose = () => {
    // menu.style.display = "none";
    // closeBtn.style.display = "none";
    // menuBtn.style.display = "inline-block";
    setopen(false)
  }

  // useEffect(() => {
  //   // Add the event listener to the desired element
  //   menuBtn.addEventListener('click', haldelOpen);

  //   // Return a cleanup function to remove the event listener when the component unmounts
  //   return () => {
  //     menuBtn.removeEventListener('click', haldelOpen)
  //   }
  // }, [])

  // useEffect(() => {
  //   // Add the event listener to the desired element
  //   closeBtn.addEventListener('click', handelClose);

  //   // Return a cleanup function to remove the event listener when the component unmounts
  //   return () => {
  //     closeBtn.removeEventListener('click', handelClose)
  //   }
  // }, [])
  return (
    <div>
      <nav>
        <div className="container nav__container">
          <Link to="/">
            <h4>CİNAR</h4> 
          </Link>
          <ul className="nav__menu" style={open?{display:"flex"}:{}}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/topic">Topic</Link></li>
            {/* <li><Link to="/contact">Contact</Link></li> */}
          </ul>
          <button id="open-menu-btn" onClick={()=>haldelOpen()} style={open?{display:"none"}:{}}><i className='uil uil-bars'></i></button>
          <button id="close-menu-btn" onClick={()=>handelClose()} style={open?{display:"inline-block"}:{}}><i className="uil uil-multiply"></i></button>
          {/* <button id="open-menu-btn" onClick={()=>haldelOpen()}><i className={open? 'uil uil-bars':"uil uil-multiply"}></i></button> */}
          {/* <button id="close-menu-btn" onClick={()=>handelClose()}><i className="uil uil-multiply"></i></button> */}
        </div>
      </nav>
    </div>
  )
}

export default Navbar 