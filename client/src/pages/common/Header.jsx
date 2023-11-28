import React from "react";
import logo from '../../images/logo.png';
import './Common.css';
import { NavLink } from "react-router-dom";
import Hero from "./Hero";

function Header() {
    return (
        <>
            <>
                {/* *********************NAVBAR START   "***********************/}
                <section className="container-fluid HeroSection">
                    <nav className="container navbar navbar-expand-lg ">
                        <div className="container-fluid nav_color">
                            <NavLink className="navbar-brand" >
                                <img src={logo} style={{ height: 80 }} />
                            </NavLink>
                            <button
                                className="navbar-toggler mb-5"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon" />
                                <div></div>
                                <div></div>
                                <div></div>
                            </button>
                            <div className="collapse navbar-collapse mb-3" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item">
                                        <NavLink
                                            className="nav-link active text-light"
                                            aria-current="page">

                                            Home
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link text-white ">
                                            Destination
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link text-white" >
                                            About Us
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link text-white" >
                                            Contact Us
                                        </NavLink>
                                    </li>


                                </ul>

                            </div>
                        </div>
                    </nav>




                    {/* ********************* MAIN SECTION START*************************** */}

                    <Hero />

                </section>
                {/* *********************NAVBAR END ***********************/}
            </>

        </>
    )
}

export default Header;