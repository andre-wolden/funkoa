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
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import SettingsIcon from "@material-ui/icons/Settings";

const App = (): JSX.Element => {
    return (
        <Router>
            <div>
                <Header />
                <CornerBanner />
                <Burger
                    routes={[
                        { linkName: "Home", path: RouteConfig.HOME, icon: <HomeIcon /> },
                        { linkName: "About", path: RouteConfig.ABOUT, icon: <InfoIcon /> },
                        { linkName: "The Cluster Article", path: RouteConfig.ARTICLES, icon: <MenuBookIcon /> },
                        { linkName: "Admin", path: RouteConfig.ADMIN, icon: <SettingsIcon /> },
                    ]}
                />
                <div className="body-wrapper">
                    <div className="body-column">
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
