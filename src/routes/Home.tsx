import React from "react";
import "./home.css";

const Home = (): JSX.Element => {
    return (
        <div>
            <h1 className="h1-welcome">Welcome!</h1>
            <p>
                FunKoA is a place for KoA to have fun, experiment and practice stuff.
            </p>
            <p className="mango-petit">
                KoA: Karsten og André (which in english will be Karsten and André. Put all this in small cool text,
                maybe itallic shit.)
            </p>
            <p>
                It runs on our private kubernetes
                cluster. So far it consists of three Raspberry Pi 4&apos;s.
            </p>
        </div>
    );
};

export default Home;
