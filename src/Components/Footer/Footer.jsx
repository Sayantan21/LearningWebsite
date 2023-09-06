import React from 'react'
import '../../assets/css/style.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer> 
    <div className="container footer__container">
        <div className="footer__1">
            <Link to="/" className="footer__logo">
                <h4>EduTech</h4>
            </Link>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit amet placeat corrupti.
            </p>
        </div>

        <div className="footer__2">
            <h4>Permalinks</h4>
            <ul className="permalinks">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/topic">Courses</Link></li>
                {/* <li><Link to="/contact">Contact</Link></li> */}
            </ul>
        </div>

        <div className="footer__3">
            <h4>Privacy</h4>
            <ul className="privacy">
                <li><Link to="#">Privacy Policy</Link></li>
                <li><Link to="#">Terms and Conditions</Link></li>
                <li><Link to="#">Refund Policy</Link></li>
            </ul>
        </div>

        <div className="footer__4">
            <h4>Contact Us</h4>
            <div>
                <p>+916294748063</p>
                <p>sayantan@gmail.com</p>
            </div>

            <ul className="footer__socials">
                <li>
                <a href="#"><i className="uil uil-facebook-f"></i></a>
                </li>
                <li>
                <a href="#"><i className="uil uil-instagram-alt"></i></a>
                </li>
                <li>
                <a href="#"><i className="uil uil-twitter"></i></a>
                </li>
                <li>
                <a href="#"><i className="uil uil-linkedin-alt"></i></a>
                </li>
            </ul>
        </div>
        </div>
    <div className="footer__copyright">
        <small>© {new Date().getFullYear()} EduTech </small>
    </div>
</footer>
  )
}

export default Footer