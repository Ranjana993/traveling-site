import React from 'react'
import "./Select.css"
import Borabora from "../../assets/borabora.jpg"
import Borabora2 from "../../assets/borabora.jpg"
import Maldives from "../../assets/maldives.jpg"
import Maldives2 from "../../assets/maldives2.jpg"
import Maldives3 from "../../assets/maldives2.jpg"
import Keywest from "../../assets/keywest.jpg"
import Selectimg from '../SelectImg/Selectimg'





const Select = () => {
    return (
        <div name="views" className='Selects'>
            <div className="container">
                <Selectimg Borabora={Borabora} text="Borabora" />
                <Selectimg Borabora={Borabora2} text="Enurald Bay" />
                <Selectimg Borabora={Maldives} text="Maldives" />
                <Selectimg Borabora={Maldives2} text="Grenda" />
                <Selectimg Borabora={Maldives3} text="Barbaodas" />
                <Selectimg Borabora={Keywest} text="key wasst" />
            </div>

        </div>
    )
}

export default Select