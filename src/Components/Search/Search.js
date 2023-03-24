import React from 'react'
import "./Search.css"
import Gold from "../../assets/gold.png"

const Search = () => {
    return (
        <div name="search" className='Search'>
            <div className="container">
                <div className="left">
                    <h2>LUXURY INCLUDED FOR TWO PEOPLE</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi excepturi ullam adipisci ea accusamus iure voluptatum!
                        Quas officiis provident suscipit eveniet tempora quo id, inventore recusandae est, doloremque tenetur architecto vel quod porro perferendis hic dolor. Natus itaque laborum iusto quis, laudantium consectetur debitis illum accusantium quae, adipisci, inventore numquam incidunt doloribus sit! Ab, iste quas. Vero nobis nisi, suscipit nulla aspernatur omnis odit officiis velit consectetur doloribus corrupti consequatur ea eveniet rerum totam molestias perferendis id soluta laudantium sunt deleniti nemo, accusantium expedita! Magni nulla deserunt, atque obcaecati tempore delectus possimus itaque porro deleniti culpa at, eveniet molestias placeat libero omnis sint .
                    </p>
                    <div className="search-col-2">
                        <div className="box">
                            <div>
                                <img src={Gold} alt="" style={{ marginRight: "1rem" }} />
                            </div>
                            <div>
                                <h3>WORLD'S LEADING</h3>
                                <p>All INCLUSIVE COMPANY FOR 20 YEAR IN-A-ROW</p>
                            </div>
                        </div>
                        <div className="box">
                            <div>
                                <h3>NO ONE INCLUDES MORE </h3>
                                <p>All INCLUSIVE COMPANY FOR 20 YEAR IN-A-ROW </p>
                                <button>View Package</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="promo">
                        <h4 className='save'>GET AN  ADDITIONAL 7%  OFF </h4>
                        <p className='timer'>12 HOURS LEFT </p>
                        <p className='offers'>VIEW ALL CURRENT OFFERS</p>
                    </div>
                    <form>
                        <div className="input-wrap">
                            <label htmlFor="Destination"></label>
                            <select>
                                <option value="1">Grande Antigue</option>
                                <option value="1">Granda</option>
                                <option value="1">Bora bora</option>
                                <option value="1">Key Wast</option>
                                <option value="1">Maldives</option>
                                <option value="1">Barbados</option>
                            </select>
                        </div>
                        <div className="date">
                            <div className="input-wrap">
                                <label>Check-In</label>
                                <input type="date" />
                            </div>
                            <div className="input-wrap">
                                <label>Check-Out</label>
                                <input type="date" />
                            </div>
                        </div>
                        <button>Rates & Availabilitieas</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Search