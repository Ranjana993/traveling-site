import React, { useState } from 'react'
import "./Navbar.css"
import { BiSearch } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai"
import { BsPerson } from "react-icons/bs"
import { HiOutlineMenuAlt4 } from "react-icons/hi"
import { FaPinterest, FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa"
import { Link } from "react-scroll"

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const HandleNav = () => {
        setNav(!nav)
    }

    return (
        <div name="home" className={nav ? 'navbar navbar-bg' : "navbar"}>
            <div className={nav ? "logo dark" : "logo"}>
                <h2>BEACHS.</h2>
            </div>
            <ul className="nav-menu">
                <Link to='home' smooth={true} dureation={400}><li>Home</li> </Link>
                <Link to='destination' smooth={true} dureation={400}><li>Destination</li></Link>
                <Link to='crusel' smooth={true} dureation={400}><li>Travel</li></Link>
                <Link to='search' smooth={true} dureation={400}><li>Books</li></Link>
                <Link to='views' smooth={true} dureation={400}><li>Views</li></Link>
            </ul>
            <div className="nav-icons">
                <BiSearch className="icon" style={{ marginRight: "1rem" }} />
                <BsPerson className="icon" />
            </div>
            <div onClick={HandleNav} className="hamburger">
                {
                    !nav ? <HiOutlineMenuAlt4 className="icon" /> : <AiOutlineClose className="icon" style={{ color: "#000" }} />
                }
            </div>

            <div className={nav ? 'mobile-menu active' : "mobile-menu"}>
                <ul className='mobileNavmenus'>
                    <Link to='home' smooth={true} dureation={400}><li>Home</li> </Link>
                    <Link to='destination' smooth={true} dureation={400}><li>Destination</li></Link>
                    <Link to='crusel' smooth={true} dureation={400}><li>Travel</li></Link>
                    <Link to='search' smooth={true} dureation={400}><li>Books</li></Link>
                    <Link to='views' smooth={true} dureation={400}><li>Views</li></Link>
                    <div className="mobile-menu-bottom">
                        <div className='menu-icons'>
                            <button>Search</button>
                            <button>Count</button>
                        </div>
                        <div className="social-icons">
                            <FaFacebook className="icon" />
                            <FaInstagram className="icon" />
                            <FaPinterest className="icon" />
                            <FaTwitter className="icon" />
                            <FaYoutube className="icon" />
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Navbar