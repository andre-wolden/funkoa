import React from "react";
import LoremIpsum from "../../components/LoremIpsum";
import "./about.css";
import UiPaper from "../../components/paper/UiPaper";
import StyleHeaderOne, { StyledHeaderSize } from "../../components/stylish-h1/StyleHeaderOne";
import IntroCard from "./IntroCard";

const About = (): JSX.Element => {
    return (
        <div className="about-wrapper">
            <StyleHeaderOne size={StyledHeaderSize.MEDIUM}>ABOUT</StyleHeaderOne>
            <div className="about-cards-wrapper">
                <IntroCard />
                <IntroCard />
            </div>
            <UiPaper>
                <LoremIpsum />
            </UiPaper>
            <UiPaper>
                <LoremIpsum />
            </UiPaper>
            <UiPaper>
                <LoremIpsum />
            </UiPaper>
        </div>
    );
};

export default About;
