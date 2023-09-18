import React from 'react'
import '../assets/css/style.css'
import '../assets/css/course_page.css'
// import course1 from '../assets/images/course1.jpg'
// import course2 from '../assets/images/course2.jpg'
// import course3 from '../assets/images/course3.jpg'
// import course4 from '../assets/images/course4.jpg'
// import course5 from '../assets/images/course5.jpg'
// import course6 from '../assets/images/course6.jpg'
// import course7 from '../assets/images/course7.jpg'
// import course8 from '../assets/images/course8.jpg'
// import course9 from '../assets/images/course9.jpg'
// import course10 from '../assets/images/course10.jpg'
// import course11 from '../assets/images/course11.jpg'
// import course12 from '../assets/images/course12.jpg'
// import course13 from '../assets/images/course13.jpg'
// import course14 from '../assets/images/course14.jpg'
// import course15 from '../assets/images/course15.jpg'
// import course16 from '../assets/images/course16.jpg'
// import course17 from '../assets/images/course17.jpg'
// import course18 from '../assets/images/course18.jpg'

import content_details2 from '../assets/topics_content/topic'
import { Link } from 'react-router-dom'

import html_logo from '../assets/topic_image/html.png'
import css_logo from '../assets/topic_image/css.png'
import js_logo from '../assets/topic_image/js.png'
import react_logo from '../assets/topic_image/react.png'
import angular_logo from '../assets/topic_image/angular.png'
import Navbar from '../Components/Navbar/Navbar'


const Course_page = () => {
    return (
        <>
            <Navbar />
            <div className="content__container">
                {
                    content_details2.map((content) => {
                        return <div key={content.id}>
                            <div className="content_heading_box">
                                <h3 className="content_heading">{content.content_name}</h3>
                            </div>
                            <div className="sub_content_container">
                                {content.sub_content.map((data) => {
                                    // console.log(data)
                                    return <Link to="/topics" state={data.content} className="sub_content_box" key={data.id}>
                                        <div className="logo_box">
                                            <img src={data.logo} alt="" className="logo" />
                                        </div>
                                        <p className="sub_content_name">{data.sub_content_name}</p>
                                    </Link>
                                })}
                            </div>
                        </div>
                    })
                }

            </div>
        </>
        // <section className="coursess">
        //     <div className="container courses__container">

        //         {/* {
        //             content_details2.map((content) => {
        //                 console.log(content)
        //                 return <article className="course" key={content.id}>
        //                     <div className="course__image">
        //                         <img src={content.image} />
        //                     </div>
        //                     <div className="course__info">
        //                         <h4>{content.topic_name}</h4>
        //                         <p>{content.description}</p>
        //                         <Link to="/topics" className="btn btn-primary" state={content.content}>Learn More</Link>
        //                     </div>
        //                 </article>

        //             })
        //         } */}
        //         {/* <article className="course">
        //             <div className="course__image">
        //                 <img src={course1} />
        //             </div>
        //             <div className="course__info">
        //                 <h4>Responsive Social Media Website UI Design</h4>
        //                 <p>
        //                     Lorem ipsum dolor sit, amet consectetur adipisicing elit.Rerum ab, nisi iusto nemo aut debitis maiores.
        //                 </p>
        //                 <a href="courses.html" className="btn btn-primary">Learn More</a>
        //             </div>
        //         </article>

        //         <article className="course">
        //             <div className="course__image">
        //                 <img src={course2} />
        //             </div>
        //             <div className="course__info">
        //                 <h4>Responsive SmartHome Website Design</h4>
        //                 <p>
        //                     Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        //                     Rerum ab, nisi iusto nemo aut debitis maiores.
        //                 </p>
        //                 <a href="courses.html" className="btn btn-primary">Learn More</a>
        //             </div>
        //         </article>

        //         <article className="course">
        //             <div className="course__image">
        //                 <img src={course3} />
        //             </div>
        //             <div className="course__info">
        //                 <h4>Responsive Admin Dashboard UI Design</h4>
        //                 <p>
        //                     Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        //                     Rerum ab, nisi iusto nemo aut debitis maiores.
        //                 </p>
        //                 <a href="courses.html" className="btn btn-primary">Learn More</a>
        //             </div>
        //         </article>

        //         <article className="course">
        //             <div className="course__image">
        //                 <img src={course4} />
        //             </div>
        //             <div className="course__info">
        //                 <h4>Responsive Admin Dashboard UI Design</h4>
        //                 <p>
        //                     Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        //                     Rerum ab, nisi iusto nemo aut debitis maiores.
        //                 </p>
        //                 <a href="courses.html" className="btn btn-primary">Learn More</a>
        //             </div>
        //         </article>

        //         <article className="course">
        //             <div className="course__image">
        //                 <img src={course5} />
        //             </div>
        //             <div className="course__info">
        //                 <h4>Responsive Admin Dashboard UI Design</h4>
        //                 <p>
        //                     Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        //                     Rerum ab, nisi iusto nemo aut debitis maiores.
        //                 </p>
        //                 <a href="courses.html" className="btn btn-primary">Learn More</a>
        //             </div>
        //         </article>

        //         <article className="course">
        //             <div className="course__image">
        //                 <img src={course6} />
        //             </div>
        //             <div className="course__info">
        //                 <h4>Responsive Admin Dashboard UI Design</h4>
        //                 <p>
        //                     Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        //                     Rerum ab, nisi iusto nemo aut debitis maiores.
        //                 </p>
        //                 <a href="courses.html" className="btn btn-primary">Learn More</a>
        //             </div>
        //         </article>

        //         <article className="course">
        //             <div className="course__image">
        //                 <img src={course7} />
        //             </div>
        //             <div className="course__info">
        //                 <h4>Responsive Admin Dashboard UI Design</h4>
        //                 <p>
        //                     Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        //                     Rerum ab, nisi iusto nemo aut debitis maiores.
        //                 </p>
        //                 <a href="courses.html" className="btn btn-primary">Learn More</a>
        //             </div>
        //         </article>

        //         <article className="course">
        //             <div className="course__image">
        //                 <img src={course8} />
        //             </div>
        //             <div className="course__info">
        //                 <h4>Responsive Admin Dashboard UI Design</h4>
        //                 <p>
        //                     Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        //                     Rerum ab, nisi iusto nemo aut debitis maiores.
        //                 </p>
        //                 <a href="courses.html" className="btn btn-primary">Learn More</a>
        //             </div>
        //         </article>

        //         <article className="course">
        //             <div className="course__image">
        //                 <img src={course9} />
        //             </div>
        //             <div className="course__info">
        //                 <h4>Responsive Admin Dashboard UI Design</h4>
        //                 <p>
        //                     Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        //                     Rerum ab, nisi iusto nemo aut debitis maiores.
        //                 </p>
        //                 <a href="courses.html" className="btn btn-primary">Learn More</a>
        //             </div>
        //         </article>

        //         <article className="course">
        //             <div className="course__image">
        //                 <img src={course10} />
        //             </div>
        //             <div className="course__info">
        //                 <h4>Responsive Admin Dashboard UI Design</h4>
        //                 <p>
        //                     Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        //                     Rerum ab, nisi iusto nemo aut debitis maiores.
        //                 </p>
        //                 <a href="courses.html" className="btn btn-primary">Learn More</a>
        //             </div>
        //         </article>

        //         <article className="course">
        //             <div className="course__image">
        //                 <img src={course11} />
        //             </div>
        //             <div className="course__info">
        //                 <h4>Responsive Admin Dashboard UI Design</h4>
        //                 <p>
        //                     Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        //                     Rerum ab, nisi iusto nemo aut debitis maiores.
        //                 </p>
        //                 <a href="courses.html" className="btn btn-primary">Learn More</a>
        //             </div>
        //         </article>

        //         <article className="course">
        //             <div className="course__image">
        //                 <img src={course12} />
        //             </div>
        //             <div className="course__info">
        //                 <h4>Responsive Admin Dashboard UI Design</h4>
        //                 <p>
        //                     Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        //                     Rerum ab, nisi iusto nemo aut debitis maiores.
        //                 </p>
        //                 <a href="courses.html" className="btn btn-primary">Learn More</a>
        //             </div>
        //         </article>

        //         <article className="course">
        //             <div className="course__image">
        //                 <img src={course13} />
        //             </div>
        //             <div className="course__info">
        //                 <h4>Responsive Admin Dashboard UI Design</h4>
        //                 <p>
        //                     Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        //                     Rerum ab, nisi iusto nemo aut debitis maiores.
        //                 </p>
        //                 <a href="courses.html" className="btn btn-primary">Learn More</a>
        //             </div>
        //         </article>

        //         <article className="course">
        //             <div className="course__image">
        //                 <img src={course14} />
        //             </div>
        //             <div className="course__info">
        //                 <h4>Responsive Admin Dashboard UI Design</h4>
        //                 <p>
        //                     Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        //                     Rerum ab, nisi iusto nemo aut debitis maiores.
        //                 </p>
        //                 <a href="courses.html" className="btn btn-primary">Learn More</a>
        //             </div>
        //         </article>

        //         <article className="course">
        //             <div className="course__image">
        //                 <img src={course15} />
        //             </div>
        //             <div className="course__info">
        //                 <h4>Responsive Admin Dashboard UI Design</h4>
        //                 <p>
        //                     Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        //                     Rerum ab, nisi iusto nemo aut debitis maiores.
        //                 </p>
        //                 <a href="courses.html" className="btn btn-primary">Learn More</a>
        //             </div>
        //         </article>

        //         <article className="course">
        //             <div className="course__image">
        //                 <img src={course16} />
        //             </div>
        //             <div className="course__info">
        //                 <h4>Responsive Admin Dashboard UI Design</h4>
        //                 <p>
        //                     Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        //                     Rerum ab, nisi iusto nemo aut debitis maiores.
        //                 </p>
        //                 <a href="courses.html" className="btn btn-primary">Learn More</a>
        //             </div>
        //         </article>

        //         <article className="course">
        //             <div className="course__image">
        //                 <img src={course17} />
        //             </div>
        //             <div className="course__info">
        //                 <h4>Responsive Admin Dashboard UI Design</h4>
        //                 <p>
        //                     Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        //                     Rerum ab, nisi iusto nemo aut debitis maiores.
        //                 </p>
        //                 <a href="courses.html" className="btn btn-primary">Learn More</a>
        //             </div>
        //         </article>

        //         <article className="course">
        //             <div className="course__image">
        //                 <img src={course18} />
        //             </div>
        //             <div className="course__info">
        //                 <h4>Responsive Admin Dashboard UI Design</h4>
        //                 <p>
        //                     Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        //                     Rerum ab, nisi iusto nemo aut debitis maiores.
        //                 </p>
        //                 <a href="courses.html" className="btn btn-primary">Learn More</a>
        //             </div>
        //         </article> */}
        //     </div>
        // </section>
    )
}

export default Course_page