import React from "react";
import FeedBack from "./FeedBack";
import ShortBanner from "./ShortBanner";
import Experience from "./Experience";
import Packages from "./Packages";

function Home() {
    return(
        <>
                <Experience />
                <Packages />

                <ShortBanner />
                <FeedBack  />
            
        </>
    )
}
export default Home;