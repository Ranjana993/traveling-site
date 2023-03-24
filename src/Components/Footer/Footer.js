import React from 'react'
import "./Footer.css"
import { FaPinterest, FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa"



const Footer = () => {
    return (
        <div name="footer" className='footer'>
            <div className="container">
                <div className="top">
                    <h3>BEACHES.</h3>
                    <div className="social">
                        <FaFacebook className="icon" />
                        <FaInstagram className="icon" />
                        <FaPinterest className="icon" />
                        <FaTwitter className="icon" />
                        <FaYoutube className="icon" />
                    </div>
                </div>
                <div className="bottom">
                    <div className="left">
                        <ul>
                            <li>About</li>
                            <li>PartnerShip</li>
                            <li>Career</li>
                            <li>NewsRoom</li>
                            <li>Advertising</li>
                        </ul>
                    </div>
                    <div className="right">
                        <ul>
                            <li>Contact</li>
                            <li>Terms</li>
                            <li>Policy</li>
                            <li>Privacy</li>
                            <li>Privacy</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer