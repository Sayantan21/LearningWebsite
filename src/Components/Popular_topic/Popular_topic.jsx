import React from 'react'
import '../../assets/css/style.css'
import course1 from '../../assets/images/course1.jpg'
import course2 from '../../assets/images/course2.jpg'
import course3 from '../../assets/images/course3.jpg'

import content_details from '../../assets/topics_content/topic'
import { Link } from 'react-router-dom'
import Topic_card from '../Topic_card/Topic_card'

const Popular_topic = () => {

    return (
        <section className="courses">
            <h2>Our Popular Topics</h2>
            <div className="container courses__container">
                {
                    content_details.slice(0, 6).map((item) => {
                        console.log(item)
                        return  <Topic_card data={item}/>
                        // <Link to="/topics" className="course">
                        //     <div className="course__image">
                        //         <img src={`${item.image}`} />
                        //     </div>
                        //     <div className="course__info">
                        //         <h4>{item.topic_name}</h4>
                        //         <p>
                        //             {item.description}
                        //         </p>
                        //         {/* <Link to="/topics" state={item.content} className="btn btn-primary">Learn More</Link> */}
                        //     </div>
                        // </Link>
                    })
                }
                {/* <article className="course">
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
                        <img src={course2} />
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
                        <img src={course3} />
                    </div>
                    <div className="course__info">
                        <h4>Responsive Admin Dashboard UI Design</h4>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Rerum ab, nisi iusto nemo aut debitis maiores.
                        </p>
                        <a href="courses.html" className="btn btn-primary">Learn More</a>
                    </div>
                </article> */}
            </div>
        </section>
    )
}

export default Popular_topic