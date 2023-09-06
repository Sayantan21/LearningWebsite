import React from 'react'
import '../assets/css/style.css'
import '../assets/css/contact.css'

import contact_image from '../assets/images/contact.svg'
const Contact_page = () => {
    return (
        <section className="contact">
            <div className="container contact__container">
                <aside className="contact__aside">
                    <div className="aside__image">
                        <img src={contact_image} />
                    </div>
                    <h2>Contact Us</h2>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Repellat molestiae ab dolores!
                    </p>
                    <ul className="contact__details">
                        <li>
                            <i className="uil uil-phone-times"></i>
                            <h5>+916294748063</h5>
                        </li>
                        <li>
                            <i className="uil uil-envelope"></i>
                            <h5>sayantan@gmail.com</h5>
                        </li>
                        <li>
                            <i className="uil uil-location-point"></i>
                            <h5>Barddhaman, India</h5>
                        </li>
                    </ul>
                    <ul className="contact__socials">
                        <li>
                            <a href="#"><i className="uil uil-facebook-f"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="uil uil-instagram"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="uil uil-twitter"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="uil uil-linkedin-alt"></i></a>
                        </li>
                    </ul>
                </aside>

                <form action="" method="POST" className="contact__form">
                    <div className="form__name">
                        <input type="text" name="First Name" placeholder="First Name" required/>
                            <input type="text" name="Last Name" placeholder="Last Name" required/>
                            </div>
                            <input type="email" name="Email Address" placeholder="Your Email Address" required/>
                                <textarea name="Message" rows="7" placeholder="Message..." required></textarea>
                                <button type="submit" className="btn btn-primary">Send Message</button>
                            </form>
                    </div>
                </section>
                )
}

                export default Contact_page