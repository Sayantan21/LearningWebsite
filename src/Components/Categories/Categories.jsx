import React from 'react'
import '../../assets/css/style.css'

const Categories = () => {
  return (
    <section className="categories">
        <div className="container categories__container">
            <div className="categories__left">
                <h1>Categories</h1> 
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Architecto praesentium facilis voluptatum illum blanditiis 
                    distinctio nulla quisquam enim quos fugit accusamus, nesciunt 
                    doloremque tempora quod quo incidunt sint! Iure, reiciendis!
                </p>
                <a href="#" className="btn">Learn More</a>
            </div>

            <div className="categories__right">
                <article className="category">
                    <span className="category__icon"><i className="uil uil-bitcoin-circle"></i></span>
                    <h5>Blockchain</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing iure laborum animi.</p>
                </article>
                
                <article className="category">
                    <span className="category__icon"><i className="uil uil-palette"></i></span>
                    <h5>Graphic Desing</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing iure laborum animi.</p>
                </article>
                
                <article className="category">
                    <span className="category__icon"><i className="uil uil-usd-circle"></i></span>
                    <h5>Finance</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing iure laborum animi.</p>
                </article>
                
                <article className="category">
                    <span className="category__icon"><i className="uil uil-megaphone"></i></span>
                    <h5>Marketing</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing iure laborum animi.</p>
                </article>
                
                <article className="category">
                    <span className="category__icon"><i className="uil uil-music"></i></span>
                    <h5>Music</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing iure laborum animi.</p>
                </article>
                
                <article className="category">
                    <span className="category__icon"><i className="uil uil-puzzle-piece"></i></span>
                    <h5>Business</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing iure laborum animi.</p>
                </article>
            </div>
        </div>
    </section> 
  )
}

export default Categories