import React from "react";
import logo from '../../images/logo.png';
import { NavLink } from "react-router-dom";
import './Common.css';

function Footer() {
    return (
        <>
            <section className="footer p-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5 p-4">
                            <img src={logo} style={{ height: 80 }} />
                            <p className=" mt-3">Trippy Baba is one of the best travel agencies so far in Delhi NCR. With a splendid experience of delivering the best travel experiences in most stunning holiday destinations ranging from Goa to Singapore and prominent honeymoon locations like Bali.</p>
                        </div>
                        <div className="col-md-2">

                            <ul>
                                <h4 className="text-white mt-5">About</h4>
                                <li>
                                    <NavLink> - About</NavLink>
                                </li>
                                <li>
                                    <NavLink>- Destination</NavLink>
                                </li>
                                <li>
                                    <NavLink> - testimonial</NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-2">

                            <ul>
                                <h4 className="text-white mt-5">Links</h4>
                                <li>
                                    <NavLink> - Home</NavLink>
                                </li>
                                <li>
                                    <NavLink> - About Us</NavLink>
                                </li>
                                <li>
                                    <NavLink> - contact Us</NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-3">

                            <ul>
                                <h4 className="text-white mt-5">Contact Us</h4>
                                <li>
                                    <i className="fa-solid fa-phone fa-sm" style={{ color: "#787878" }} />
                                    <NavLink>  8178550422 / 7827423788</NavLink>
                                </li>
                                <li>
                                    <i className="fa-solid fa-envelope fa-sm" style={{ color: "#707070" }} />
                                    <NavLink> enquiry@trippybabatours.com</NavLink>
                                </li>
                                <li>
                                    <NavLink>Social Links:</NavLink> <NavLink> <i className="fa-brands fa-whatsapp fa-lg ms-2" style={{ color: "#ffffff" }} /> </NavLink>
                                    <NavLink><i className="fa-brands fa-facebook fa-lg ms-1" style={{ color: "#ffffff" }} />
                                    </NavLink>
                                    <NavLink> <i className="fa-brands fa-instagram fa-lg ms-2" style={{ color: "#ffffff" }} /></NavLink>


                                </li>
                            </ul>
                        </div>

                       
                    </div>
                    <div className="container border-top border-white p-3">
                            <div className="row">
                                <span className="text-center text-white">All Right reserved by ©: trippybabatours.com</span>
                            </div>
                        </div>
                </div>
            </section>
        </>
    )
}

export default Footer;