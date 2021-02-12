import React from "react";
import "./App.css";
import ReactOffCanvasExample from "./awesome-react-libs/react-offcanvas-example";

const App = (): JSX.Element => (
    <div className="App">
        <div className="header-wrapper">
            <div>Burger Menu if narrow, or just the content of the menu</div>
            <div>LOGO</div>
        </div>
        <div className="body-wrapper">
            <h1>Welcome to Funkoa!</h1>
            <p>
                Funkoa runs on my private kubernetes raspberry-pi cluster. Here we deploy stuff to have fun and practice
                full stack coding.
            </p>
            <img alt="digs-pina-colada" className={"pina"} src={"/images/pexels-héctor-de-la-torre-4701132.jpg"}></img>

            <p>gg ^^</p>

            <ReactOffCanvasExample />
        </div>
    </div>
);

export default App;
