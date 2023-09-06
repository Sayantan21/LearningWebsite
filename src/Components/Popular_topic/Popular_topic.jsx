import React from 'react'
import '../../assets/css/style.css'
import course1 from '../../assets/images/course1.jpg'
import course2 from '../../assets/images/course2.jpg'
import course3 from '../../assets/images/course3.jpg'
const Popular_topic = () => {
  return (
    <section className="courses">
        <h2>Our Popular Topics</h2>
        <div className="container courses__container">
            <article className="course">
                <div className="course__image">
                    <img src={course1} />
                </div>
                <div className="course__info">
                    <h4>Responsive Social Media Website UI Design</h4>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Rerum ab, nisi iusto nemo aut debitis maiores.
                    </p>
                    <a href="courses.html" className="btn btn-primary">Learn More</a>
                </div>
            </article>

            <article className="course">
                <div className="course__image">
                    <img src={course2}/>
                </div>
                <div className="course__info">
                    <h4>Responsive SmartHome Website Design</h4>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Rerum ab, nisi iusto nemo aut debitis maiores.
                    </p>
                    <a href="courses.html" className="btn btn-primary">Learn More</a>
                </div>
            </article>
        
            <article className="course">
                <div className="course__image">
                    <img src={course3}/>
                </div>
               <div className="course__info">
                    <h4>Responsive Admin Dashboard UI Design</h4>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Rerum ab, nisi iusto nemo aut debitis maiores.
                    </p>
                    <a href="courses.html" className="btn btn-primary">Learn More</a>
               </div>
            </article>        
        </div>
    </section>
  )
}

export default Popular_topic