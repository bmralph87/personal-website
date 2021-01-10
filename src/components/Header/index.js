import React from 'react';
import headerImage from "../../assets/images/phillysky1.jpg";

function Header() {

    return (
        <section className="my-5" >
            <header id="header">MY PORTFOLIO</header>
            <img src={headerImage} className="my-2" style={{ width: "100%" }} alt="philly" />
            <div className="my-2">
                <p>
                </p>
            </div>
        </section>
    )
}

export default Header