import React, { useRef, useState } from 'react'
import './Home.css'
import { Link } from "react-router-dom"


export function Home() {


    return (
        <div className='cont'>
            <h1>Learning Style Quiz</h1>
            <hr />
            <h2>Welcome to the Learning Style Quiz! This will help you figure out what your learning style is so that you can study more efficiently in the future! :)</h2>
            <Link to = "/instructions" className = "go">Let's go!</Link>
        </div>
    )
 
}


export default Home
