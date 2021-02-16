import React from "react";
import "./App.css";
import Burger from "./awesome-react-libs/burger/burger";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RouteConfig } from "./configurations/routeConfig";
import Home from "./routes/home/Home";
import About from "./routes/about/About";
import Admin from "./routes/admin/Admin";
import ArticlesRoute from "./routes/articles/ArticlesRoute";
import NotFoundRoute from "./routes/not-found-route/NotFoundRoute";
import CornerBanner from "./components/corner-banner/CornerBanner";
import Header from "./components/header/Header";

const App = (): JSX.Element => {
    return (
        <Router>
            <div>
                <Header />
                <CornerBanner />
                <Burger
                    routes={[
                        { linkName: "Home", path: RouteConfig.HOME },
                        { linkName: "About", path: RouteConfig.ABOUT },
                        { linkName: "The Cluster Article", path: RouteConfig.ARTICLES },
                        { linkName: "Admin", path: RouteConfig.ADMIN },
                    ]}
                />
                <div>
                    <div className="body-wrapper">
                        <Switch>
                            <Route path="/" exact>
                                <Home />
                            </Route>
                            <Route path="/about" exact>
                                <About />
                            </Route>
                            <Route path="/admin" exact>
                                <Admin />
                            </Route>
                            <Route path="/articles" exact>
                                <ArticlesRoute />
                            </Route>
                            <Route>
                                <NotFoundRoute />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    );
};

export default App;
