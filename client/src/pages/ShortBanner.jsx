import React from "react";
import './Pages.css';
import { NavLink } from "react-router-dom";

function ShortBanner() {
    return(
        <>
            <section className="shortbanner mt-5">
                <div className="container ">
                    <div className="row">
                    <div className="col-md-7"></div>
                        <div className="col-md-5 ps-5">
                            <h1 style={{fontWeight:700}} className="text-white mt-5">Thousand Explorers, One Beloved Travel Agency</h1>
                            <p className="text-white text-secondary mt-4">Many of our clients have praised us for providing the best travel experiences to their preferred locations, like Thailand, Goa, Jammu & Kashmir, and the Andaman Islands.</p>
                            <NavLink>
                                <button style={{fontWeight:700}}  className="btn btn-primary text-white rounded-pill w-75 p-2 mt-4 anime_btn">CHECK OUR PACKAGES!</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ShortBanner;