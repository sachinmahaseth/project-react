import React from "react";
import Review from '../images/newreviews.png';
import User1 from '../images/userPro1.jpg';
import User2 from '../images/userPro2.jpeg';
import User3 from '../images/userPro3.jpg';
import Mark from '../images/quotation-mark.jpg';

function FeedBack() {
    return (
        <>

            <section className="container-fluid p-5">
                <div className='row'>



                    <div className="col-md-6">
                        <p>Client Feedback</p>
                        <h1 style={{ fontWeight: 700 }}>Trippy Baba Through Their Eyes</h1>
                        <div
                            id="carouselExampleCaptions"
                            className="carousel slide"
                            data-bs-ride="carousel"
                        >
                            <div className="carousel-indicators" >
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleCaptions"
                                    data-bs-slide-to={0}
                                    className="active bg-dark mt-5 d-none d-md-block"
                                    aria-current="true"
                                    aria-label="Slide 1"
                                />
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleCaptions"
                                    data-bs-slide-to={1}
                                    aria-label="Slide 2"
                                    className="bg-dark mt-5 d-none d-md-block"
                                />
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleCaptions"
                                    data-bs-slide-to={2}
                                    aria-label="Slide 3"
                                    className="bg-dark mt-5 d-none d-md-block"
                                />
                            </div>
                            {/* SLIDES */}
                            <div className="carousel-inner">
                                <div className="container carousel-item active">
                                    <div className="row">
                                        <div className="col-md-12 mt-5">
                                            <i className="fa-solid fa-star fa-sm" style={{ color: "#ffdd00" }} />
                                            <i className="fa-solid fa-star fa-sm ms-2" style={{ color: "#ffdd00" }} />
                                            <i className="fa-solid fa-star fa-sm ms-2" style={{ color: "#ffdd00" }} />
                                            <i className="fa-solid fa-star fa-sm ms-2" style={{ color: "#ffdd00" }} />
                                            <i className="fa-solid fa-star fa-sm ms-2" style={{ color: "#ffdd00" }} />

                                            <p className="text-dark mt-3">Trippy Baba surpassed my expectations in every way! From the minute I made my reservation, their staff was wonderfully helpful and attentive. The events were absolutely life-changing, and the program was well-planned. I'm eagerly anticipating my upcoming trip with Trippy Baba!</p>

                                        </div>

                                        <div className="col-2">
                                            <img src={User1} className="d-block rounded-circle w-75 m-auto" alt="image" style={{ height: 60 }} />
                                        </div>
                                        <div className="col-6">
                                            <h6 className="mt-2"> Suraj Kumar  </h6> <span className="text-secondary ">Haryana, India</span>
                                        </div>
                                        <div className="col-4">
                                            <img className="w-25 float-end" src={Mark}  alt="image" />
                                        </div>
                                    </div>



                                </div>
                                {/* SLIDES */}
                                <div className="container carousel-item ">
                                    <div className="row">
                                        <div className="col-md-12 mt-5">
                                            <i className="fa-solid fa-star fa-sm" style={{ color: "#ffdd00" }} />
                                            <i className="fa-solid fa-star fa-sm ms-2" style={{ color: "#ffdd00" }} />
                                            <i className="fa-solid fa-star fa-sm ms-2" style={{ color: "#ffdd00" }} />
                                            <i className="fa-solid fa-star fa-sm ms-2" style={{ color: "#ffdd00" }} />
                                            <i className="fa-solid fa-star fa-sm ms-2" style={{ color: "#ffdd00" }} />

                                            <p className="text-dark mt-2">Although I've traveled with several different companies, Trippy Baba stands out. They set the bar for meticulousness and commitment to offering unique cultural experiences. With the native guides, I had a wonderful day of exploration and truly felt like I was with friends. Trippy Baba will always be a favorite of mine!</p>

                                        </div>

                                        <div className="col-2 mt-2">
                                            <img src={User2} className="d-block rounded-circle w-75 m-auto" alt="image" style={{ height: 60 }} />
                                        </div>
                                        <div className="col-6">
                                            <h6 className="mt-2"> Akshay Thakur  </h6> <span className="text-secondary">Gujrat, India</span>
                                        </div>
                                        <div className="col-4">
                                            <img className="w-25 float-end" src={Mark} alt="image" />
                                        </div>
                                    </div>



                                </div>
                                {/* SLIDES */}
                                <div className="container carousel-item">
                                    <div className="row">
                                        <div className="col-md-12 mt-5">
                                            <i className="fa-solid fa-star fa-sm" style={{ color: "#ffdd00" }} />
                                            <i className="fa-solid fa-star fa-sm ms-2" style={{ color: "#ffdd00" }} />
                                            <i className="fa-solid fa-star fa-sm ms-2" style={{ color: "#ffdd00" }} />
                                            <i className="fa-solid fa-star fa-sm ms-2" style={{ color: "#ffdd00" }} />
                                            <i className="fa-solid fa-star fa-sm ms-2" style={{ color: "#ffdd00" }} />

                                            <p className="text-dark mt-2">I have been on many trips with this agency, and my experience with them has been phenomenal each and every time. They know the specialities and hidden gems of every location. I have also made many friends on the trip, I would really recommend everyone to book your next trip with Trippy Baba</p>

                                        </div>

                                        <div className="col-2">
                                            <img src={User3} className="d-block rounded-circle w-75 m-auto" alt="image" style={{ height: 60 }} />
                                        </div>
                                        <div className="col-6">
                                            <h6 className="mt-2"> Arun Rawat  </h6> <span className="text-secondary">Delhi, India</span>
                                        </div>
                                        <div className="col-4">
                                            <img className="w-25 float-end" src={Mark} alt="image" />
                                        </div>
                                    </div>



                                </div>
                            </div>
                            <button
                                className="carousel-control-prev d-lg-none d-lg-block"
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide="prev"
                            >
                                <span className="carousel-control-prev-icon bg-secondary"  aria-hidden="true" />
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button
                                className="carousel-control-next d-lg-none d-lg-block"
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide="next"
                            >
                                <span className="carousel-control-next-icon bg-secondary"  aria-hidden="true" />
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>

                    </div>

                    <div className="col-md-6">
                        <img className="w-75 d-block m-auto" src={Review} />
                    </div>
                </div>
            </section>
        </>
    )
}
export default FeedBack;