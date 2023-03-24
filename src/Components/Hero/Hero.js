import React from 'react'
import "./Hero.css"
import { AiOutlineSearch } from "react-icons/ai"
import Video from "../../assets/maldivesVideo.mp4"



const Hero = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video' >
                <source src={Video} type='video/mp4' />
            </video>
            <div className="overlay">

            </div>
            <div className="content">
                <h1>Fisrt Class Travel</h1>
                <h2>Top 1% Location World Wide </h2>
                <form className="form">
                    <div>
                        <input type="text" placeholder='Search Destination' />
                    </div>
                    <div>
                        <button><AiOutlineSearch /> </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Hero