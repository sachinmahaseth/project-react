import React from "react";
import About from '../images/about.png';

function Experience() {
    return(
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 my-5 p-5">
                            <h6 style={{fontWeight:700}}>About TrippyBaba</h6>
                            <h1 style={{fontWeight:700}}>Providing the Best Travel Experiences, Always.</h1>
                            <p className="text-secondary">Trippy Baba is one of the best travel agencies so far in Delhi NCR. With a splendid experience of delivering the best travel experiences in most stunning holiday destinations ranging from Goa to Singapore and prominent honeymoon locations like Bali. In our journeys, we blend adventure and culture to provide unforgettable memories for our clients.For those with a spirit of exploration and adventure, We offer packages that will help them embark on a transforming journey.</p>
                        </div>
                        <div className="col-md-6 p-3">
                            <img className="w-100" src={About} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Experience;