import React from 'react'
import "./Selectimg.css"

const Selectimg = ({ Borabora , text }) => {
    return (
        <div name="selectImg" className='select-Img'>
            <img src={Borabora} alt="/" />
            <div className="overlay">
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Selectimg