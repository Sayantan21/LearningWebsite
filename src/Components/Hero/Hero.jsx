import React from 'react'
import '../../assets/css/style.css'
import header_svg from '../../assets/images/header.svg'
import { Link } from 'react-router-dom'
const Hero = () => {
    return (
        <header>
            <div className="container header__container">
                <div className="header__left">
                    <h1>Grow your skills to advance your career part</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Consequatur assumenda voluptas, ipsum nihil eligendi eaque
                        odio doloremque nam a accusantium?
                    </p>
                    <Link to="/course" className="btn btn-primary">Get Started</Link>
                </div>

                <div className="header__right">
                    <div className="header__right-image">
                        <img src={header_svg} alt="" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Hero