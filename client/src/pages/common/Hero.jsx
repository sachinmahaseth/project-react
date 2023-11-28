import React from "react";
import './Common.css';


function Hero() {
    return (
        <>
            <div className="container p-5 mb-5">
                <div className="row">
                    <div className="col-lg-7 text-white p-5" >
                        <div>
                            <p >ELEVATE YOUR TRAVEL JOURNEY</p>

                        </div>
                        <div>
                            <h1 style={{ fontSize: 45, fontWeight: 700 }}>Discover Your World With Trippy Baba</h1>
                        </div>
                        <div className="d-none d-md-block mt-4">
                            <p>
                                Trippy Baba is your gateway to unforgettable journeys. We're passionate about crafting unique travel experiences that immerse you in culture, adventure, and discovery. Join us in exploring the world's most captivating destinations, one trip at a time. Travel with Trippy Baba for unforgettable memories.
                            </p>
                        </div>
                    </div>


                    <div className="col-md-4 bg-white ms-auto p-5" style={{borderRadius:20}}>
                        <div className="row">
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
                                <button className="w-100 p-2 mt-3 rounded-pill btnbg text-white border-0 anime_btn" style={{fontWeight:500}}>
                                    SEND MESSAGE
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
export default Hero;