import React from 'react'
import { Link } from 'react-router-dom'

// STYLES
import '../StylesCntr/Poster.css'

const Poster = () => {
    return (
        <div className="card-welcome">
            <div className="welcomeBtn">
                <Link className="link" to='/home-search'><button>Enter</button></Link>
            </div>
            <div className="welcomeImg">
                <img src="https://wallpaperaccess.com/full/793614.jpg" alt="" />
            </div>
        </div>
    )
}

export default Poster
