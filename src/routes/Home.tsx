import React from "react";
import "./home.css";

const Home = (): JSX.Element => {
    return (
        <div>
            <h1 className="h1-welcome">Welcome!</h1>
            <div className="home-introtext-wrapper">
                <div className="home-paragraph-1">
                    FunKoA is a place for KoA to have fun, experiment and practice stuff
                </div>
                <p className="home-paragraph-2">
                    KoA - Karsten og André (which in english will be Karsten and André
                </p>
                <p>It runs on our private kubernetes cluster. So far it consists of three Raspberry Pi 4&apos;s.</p>
            </div>
        </div>
    );
};

export default Home;
