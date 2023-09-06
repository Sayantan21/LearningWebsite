import React from 'react'
import Hero from '../Components/Hero/Hero'
import Categories from '../Components/Categories/Categories'
import Popular_topic from '../Components/Popular_topic/Popular_topic'

const Home_page = () => {
    return (
        <>
            <Hero />
            <Categories />
            <Popular_topic />
        </>
    )
}

export default Home_page