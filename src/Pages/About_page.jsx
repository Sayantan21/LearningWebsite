import React from 'react'
import '../assets/css/style.css'
import '../assets/css/about.css'
import about_image from '../assets/images/about achievements.svg'
import Navbar from '../Components/Navbar/Navbar'
const About_page = () => {
    return (
        <>
            <Navbar />
            <section className="about__achievements">
                <div className="container about__achievements-container">
                    <div className="about__achievements-left">
                        <img src={about_image} />
                    </div>

                    <div className="about__achievements-right">
                        <h1>Achievements</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Provident dolorem ut voluptate dicta aspernatur numquam,
                            iste ea, accusantium repellat, laboriosam animi corporis
                            quidem? Vitae enim impedit odit mollitia consequuntur.
                        </p>
                        <div className="achievements__cards">
                            <article className="achievement__card">
                                <span className="achievement__icon">
                                    <i className="uil uil-video"></i>
                                </span>
                                <h3>450+</h3>
                                <p>Courses</p>
                            </article>

                            <article className="achievement__card">
                                <span className="achievement__icon">
                                    <i className="uil uil-users-alt"></i>
                                </span>
                                <h3>79,000+</h3>
                                <p>Students</p>
                            </article>

                            <article className="achievement__card">
                                <span className="achievement__icon">
                                    <i className="uil uil-award"></i>
                                </span>
                                <h3>26</h3>
                                <p>Awards</p>
                            </article>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About_page