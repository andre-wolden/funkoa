import React from "react";
import LoremIpsum from "../../components/LoremIpsum";
import "./about.css";

const About = (): JSX.Element => {
    return (
        <div className="example-body-wrapper">
            <div className="example-body">
                <h2>About</h2>
                <LoremIpsum />
                <LoremIpsum />
                <LoremIpsum />
            </div>
        </div>
    );
};

export default About;
