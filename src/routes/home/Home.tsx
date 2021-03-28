import React from "react";
import "./home.css";
import UiPaper from "../../components/paper/UiPaper";
import StyleHeaderOne from "../../components/stylish-h1/StyleHeaderOne";

const Home = (): JSX.Element => {
    return (
        <div className="home-wrapper">
            <StyleHeaderOne>Welcome!</StyleHeaderOne>
            <UiPaper>
                <div className="home-paragraph-1">FunKoA is a place for KoA to practice stuff, and have fun</div>
                <p className="home-paragraph-2">KoA - Karsten og André (which in english will be Karsten and André)</p>
                <p>It runs on our private kubernetes cluster. So far it consists of three Raspberry Pi 4&apos;s. \0/</p>
            </UiPaper>
        </div>
    );
};

export default Home;
