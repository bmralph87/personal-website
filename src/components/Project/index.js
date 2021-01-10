import React from 'react';
import heroBG from "../../assets/images/hero-bg.jpg";
import weatherImg from "../../assets/images/Screen Shot 2020-09-27 at 1.40.53 PM copy.jpg";
import petImg from "../../assets/images/PetPurrfect copy.jpg";
import watchImg from "../../assets/images/WATCH&SIP SCREENSHOT 1.jpg";

function Project() {

    return (
        <section className="my-5" >
            <h1 id="project">WORK</h1>
            <div className="my-2">
                <a href="https://bmralph87.github.io/bmralph87.github.io-run-buddy/">RUN BUDDY</a>
                <img src={heroBG} height="50" />
                 <a href="https://bmralph87.github.io/weatherapp/">WEATHER APP</a>
                <img src={weatherImg}  height="50" /> 
                <a href="https://bmralph87.github.io/cats/">PET PURRFECT</a>
                <img src={petImg} height="50" />
                <a href="https://quiet-ocean-97053.herokuapp.com/">WATCH & SIP</a>
                <img src={watchImg} height="50" />
            </div>
        </section>
    )
}

export default Project