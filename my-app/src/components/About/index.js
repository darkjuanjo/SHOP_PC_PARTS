import React from "react";
import coverImage from "../../assets/cover/cover2.jpg";

function About() {
    return(
        <section className="cover">
            
            <img src={coverImage} className="img" style={{ width: "100%" }} alt="coverImg" />
        </section>
    );
}
export default About;