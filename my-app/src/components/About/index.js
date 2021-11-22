import React from "react";
import coverImage from "../../assets/cover/cover2.jpg";

function About() {
    return(
        <section className="cover">
            <a href="./"><h1 id="about">SHOP PC PARTS!</h1></a>
            <img src={coverImage} className="img" style={{ width: "100%" }} alt="coverImg" />
        </section>
    );
}
export default About;