import React from 'react';
import glassesImage from "../../assets/images/glasses.jpg";
import educationImage from "../../assets/images/200wtemple.webp";

function About() {

  <link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  crossorigin="anonymous"
/>

  return (
    <section className="my-5" >
      <h1 id="about">ALL ABOUT ME</h1>
      <img src={glassesImage} className="my-2" style={{ height: "70px" }} alt="glasses" />
      <div className="my-2">
        <p>
          I was born and raised in West Philadelphia. I live with my fiancé and cat daughter
          in Center City, Philadelphia. I am a Libra ♎, animal lover and cinephile.
          I am a Zillow junkie, I love interior design, screenwriting and snacks.
        </p>
      </div>
      <h2 id="education">EDUCATION</h2>
      <img src={educationImage} height="100" />
      <p>University of Pennsylvania LPS/TES Coding Bootcamp '21</p>
      <p>Temple University, '12, B.A. FMA</p>
      <p>Delaware County Community College, '09, A.A. Liberal Arts</p>
    </section >
  )
}

export default About;