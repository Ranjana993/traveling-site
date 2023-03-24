import React from 'react'
import "./Casrusel.css"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Borabora from "../../assets/borabora.jpg"
import Borabora2 from "../../assets/borabora.jpg"
import Maldives from "../../assets/maldives.jpg"


const ImgCarusel = () => {
    return (
        <div name="crusel" className="container">
            <Carousel className='crusel' showerror={true} autoPlay={true} infiniteLoop={true}>
                <div>
                    <img src={Borabora} alt="/" />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src={Borabora2} alt="/" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src={Maldives} alt="/" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
        </div>

    )
}

export default ImgCarusel