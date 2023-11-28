import React from "react";
import './Pages.css';
import img1 from '../images/thailand1.jpg';
import img2 from '../images/thailand2.jpg';
import img3 from '../images/thailand3.jpg';
import { NavLink } from "react-router-dom";
import icon1 from '../images/iconsHouse.png';
import icon2 from '../images/iconsCutlery.png';
import Modal from '../images/model1.jpg';
import Dubai from '../images/dubai1.jpg';
import Dubai2 from '../images/dubai2.jpg';


function Packages() {
    return (
        <>
            <section className="package_section">
                <div className="container">
                    <p>Our Thailand Packages Packages</p>
                    <h1 style={{ fontWeight: 700 }}>Check Our Latest Thailand Packages</h1>
                    <div className="row mt-3">

                        <div className="col-md-4">
                            <div className="card w-100 border-0" >
                                <img src={img1} className="card-img-top w-100" alt="image" />
                                <div className="card_price">
                                    <p>14,800/-</p>
                                </div>
                                <div className="card_item">
                                    <img src={icon1} />
                                    <img src={icon2} />
                                    <img src={icon1} />
                                    <img src={icon2} />
                                </div>
                                <div className="card-body shadow-lg">
                                    <p className="card-text d-inlline">
                                        4 NIGHT 5 DAYS TOUR
                                        <span>
                                            <NavLink className='d-inline float-end' data-bs-toggle="modal"
                                                data-bs-target="#BookNow">
                                                Book Now
                                            </NavLink>
                                        </span>

                                        <br />
                                        <h6 className="d-inline" style={{ fontWeight: 700 }}>BANGKOK PATTAYA</h6>
                                    </p>

                                </div>
                            </div>

                        </div>

                        {/* 2ND */}
                        <div className="col-md-4">
                            <div className="card w-100 border-0" >
                                <img src={img2} className="card-img-top w-100" alt="image" />
                                <div className="card_price">
                                    <p>15,200/-</p>
                                </div>
                                <div className="card_item">
                                    <img src={icon1} />
                                    <img src={icon2} />
                                    <img src={icon1} />
                                    <img src={icon2} />
                                </div>
                                <div className="card-body shadow-lg">
                                    <p className="card-text d-inlline">
                                        4 NIGHT 5 DAYS TOUR
                                        <span>
                                            <NavLink className='d-inline float-end' data-bs-toggle="modal"
                                                data-bs-target="#BookNow">
                                                Book Now
                                            </NavLink>
                                        </span>

                                        <br />
                                        <h6 className="d-inline" style={{ fontWeight: 700 }}>PHUKET KRABI</h6>
                                    </p>

                                </div>
                            </div>

                        </div>

                        {/* 3RD */}
                        <div className="col-md-4 mb-5">
                            <div className="card w-100 border-0" >
                                <img src={img3} className="card-img-top w-100" alt="image" />
                                <div className="card_price">
                                    <p>17,000/-</p>
                                </div>
                                <div className="card_item">
                                    <img src={icon1} />
                                    <img src={icon2} />
                                    <img src={icon1} />
                                    <img src={icon2} />
                                </div>
                                <div className="card-body shadow-lg">
                                    <p className="card-text d-inlline">
                                        5 NIGHT 6 DAYS TOUR
                                        <span>
                                            <NavLink className='d-inline float-end' data-bs-toggle="modal"
                                                data-bs-target="#BookNow">
                                                Book Now
                                            </NavLink>
                                        </span>

                                        <br />
                                        <h6 className="d-inline" style={{ fontWeight: 700 }}>PATTAYA BANGKOK</h6>
                                    </p>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>


                {/* LATEST PACKAGES */}
                <div className="container mt-5">
                    <p>Our Dubai Packages</p>
                    <h1 style={{ fontWeight: 700 }}>Check Our Latest Dubai Packages</h1>
                    <div className="row mt-3">
                        <div className="col-md-4">
                            <div className="card w-100 border-0" >
                                <img src={Dubai} className="card-img-top w-100" alt="image" />
                                <div className="card_price">
                                    <p>21,000/-</p>
                                </div>
                                <div className="card_item">
                                    <img src={icon1} />
                                    <img src={icon2} />
                                    <img src={icon1} />
                                    <img src={icon2} />
                                </div>
                                <div className="card-body shadow-lg">
                                    <p className="card-text d-inlline">
                                        5 NIGHT 6 DAYS TOUR
                                        <span>
                                            <NavLink className='d-inline float-end' data-bs-toggle="modal"
                                                data-bs-target="#BookNow">
                                                Book Now
                                            </NavLink>
                                        </span>

                                        <br />
                                        <h6 className="d-inline" style={{ fontWeight: 700 }}>Unbeatable Dubai Trip</h6>
                                    </p>

                                </div>
                            </div>
                        </div>
                        {/* 2nd   */}
                        <div className="col-md-4">
                            <div className="card w-100 border-0" >
                                <img src={Dubai2} className="card-img-top w-100" alt="image" />
                                <div className="card_price">
                                    <p>17,250/-</p>
                                </div>
                                <div className="card_item">
                                    <img src={icon1} />
                                    <img src={icon2} />
                                    <img src={icon1} />
                                    <img src={icon2} />
                                </div>
                                <div className="card-body shadow-lg">
                                    <p className="card-text d-inlline">
                                        5 NIGHT 6 DAYS TOUR
                                        <span>
                                            <NavLink className='d-inline float-end' data-bs-toggle="modal"
                                                data-bs-target="#BookNow">
                                                Book Now
                                            </NavLink>
                                        </span>

                                        <br />
                                        <h6 className="d-inline" style={{ fontWeight: 700 }}>Incredible Dubai Trip</h6>
                                    </p>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>





            {/* Modal */}
            <div
                className="modal fade"
                id="BookNow"
                tabIndex={-1}
                aria-labelledby="BookNow"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">

                        <div className="container-fluid modal-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <button
                                        type="button"
                                        className="btn-close float-end d-lg-none d-lg-block"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    />
                                    <img className="w-100 h" src={Modal} alt='image' />
                                </div>
                                <div className="col-md-6">
                                    <div className="row">
                                        <button
                                            type="button"
                                            className="btn-close ms-auto d-none d-md-block"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                        />
                                        <form method="post" />
                                        <h4>Contact Us</h4>
                                        <div className="col-md-12 mt-3">
                                            <label className="d-block">Full Name:</label>
                                            <input className="w-100 p-2 border-0 border-bottom" type="text" name="name" required />
                                        </div>
                                        <div className="col-md-6 mt-3">
                                            <label >Mobile:</label>
                                            <input className="w-100 p-2 border-0 border-bottom" type="number" name="phone" required />
                                        </div>
                                        <div className="col-md-6 mt-3">
                                            <label>No of People:</label>
                                            <input className="w-100 p-2 border-0 border-bottom" type="number" name="people" required />
                                        </div>

                                        <div className="col-md-6 mt-3 ms-auto">
                                            <label>Destination:</label>
                                            <select className="w-100 p-2 border-0 border-bottom " name="destination" >
                                                <option value="Dubai">Dubai</option>
                                                <option value="Thailand">Thailand</option>
                                                <option value="Bali">Bali</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6 mt-3">
                                            <label>Travel date:</label>
                                            <input className="w-100 p-2 border-0 border-bottom " type="date" name="people" required />
                                        </div>
                                        <div className="col-md-12">
                                            <button className="w-100 p-3 mt-3 rounded-pill btnbg text-white border-0 anime_btn" style={{ fontWeight: 500 }}>
                                                SEND MESSAGE
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>



        </>
    )
}
export default Packages;