import React from "react";
import "./App.css";
import Burger from "./awesome-react-libs/burger/burger";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Admin from "./routes/Admin";

const App = (): JSX.Element => {
    return (
        <Router>
            <div>
                <div>
                    <Burger />
                </div>
                <div>
                    <div className="header-wrapper">
                        <div className="block-left">
                            <div className={"air-block"}>
                                <img alt={"funkoa logo"} src={"/favicon.ico"} />
                            </div>
                        </div>
                        <div className="block-center">
                            <div className={"air-block"}>
                                <img alt={"funkoa logo"} src={"/favicon.ico"} />
                            </div>
                        </div>
                        <div className="block-right">
                            <div className={"air-block"}>
                                <img alt={"funkoa logo"} src={"/favicon.ico"} />
                            </div>
                        </div>
                    </div>
                    <div className="body-wrapper">
                        <Switch>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/admin">
                                <Admin />
                            </Route>
                            <Route path="/">
                                <Home />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    );
};

export default App;
