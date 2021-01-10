import React from 'react';
import heroBG from "../../assets/images/hero-bg.jpg";

function Project() {

    return (
        <section className="my-5" >
            <h1 id="project">PROJECTS</h1>
            <div className="my-2">
                <a href="https://bmralph87.github.io/bmralph87.github.io-run-buddy/">RUN BUDDY</a>
                <img src={heroBG} height="100" />
                {/* <a href="https://bmralph87.github.io/weatherapp/">WEATHER APP</a>
                <img src="assets/images/Screen Shot 2020-09-27 at 1.40.53 PM copy.jpg" width="70" height="70" />
                <a href="https://bmralph87.github.io/cats/">PET PURRFECT</a>
                <img src="assets/images/PetPurrfect copy.jpg" width="70" height="70" />
                <a href="https://quiet-ocean-97053.herokuapp.com/">WATCH & SIP</a>
                <img src="assets/images/WATCH&SIP SCREENSHOT 1.jpg" width="70" height="70" /> */}
            </div>
        </section>
    )
}

export default Project