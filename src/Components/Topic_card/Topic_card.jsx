import React from 'react'
import './topic_card.css'
import { Link } from 'react-router-dom'
const Topic_card = (props) => {
    console.log(props.data)
    return (
        <div>
            {/* <div className="box-wrapper"> */}
            <figure className="shape-box shape-box_half">
                <img src={props.data.image}
                    alt="" />
                <div className="brk-abs-overlay z-index-0 bg-black opacity-60"></div>
                <figcaption>
                    <div className="show-cont">
                        <h3 className="card-no">{props.data.id}</h3>
                        <h4 className="card-main-title">{props.data.topic_name}</h4>
                    </div>
                    <p className="card-content">{props.data.description}</p>
                    <Link to="/topics" state={props.data.content} className="read-more-btn">Read More</Link>
                </figcaption>
                <span className="after"></span>
            </figure>
            {/* </div> */}
        </div>
    )
}

export default Topic_card