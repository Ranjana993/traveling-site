import React from 'react'
import "./Destination.css"
import Borabora from "../../assets/borabora.jpg"
import Borabora2 from "../../assets/borabora.jpg"
import Maldives from "../../assets/maldives.jpg"
import Maldives2 from "../../assets/maldives2.jpg"
import Keywest from "../../assets/keywest.jpg"



const Destination = () => {
    return (
        <div name="destination" className='destination'>
            <div className="container">
                <h1>All Inclusives Resort</h1>
                <p>On the Caribbian's Best Beaches</p>
                <div className="img-container">
                    <img className='span-3 image-grid-row-2' src={Borabora} alt="/" />
                    <img src={Borabora2} alt="/" />
                    <img src={Maldives} alt="/" />
                    <img src={Maldives2} alt="/" />
                    <img src={Keywest} alt="/" />
                </div>
            </div>
        </div>
    )
}

export default Destination