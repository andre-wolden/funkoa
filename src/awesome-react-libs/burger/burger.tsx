import React, {useState} from "react";
import {elastic as Menu} from "react-burger-menu";
import "./burger.css";
import {Route, Routes} from "../../types/Routes";
import {Link} from "react-router-dom";

export interface BurgerProps {
    routes: Routes;
}

const Burger = (props: BurgerProps): JSX.Element => {
    const { routes } = props;

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Menu
            disableAutoFocus
            isOpen={isMenuOpen}
            onOpen={() => setIsMenuOpen(true)}
            onClose={() => setIsMenuOpen(false)}>
            <div className="menu-content-wrapper">
                {routes.map((route: Route) => (
                    <div key={route.path} id="home" className="menu-item-wrapper">
                        <div className="menu-item-line">
                            <div className="menu-item-icon-wrapper">
                                { route.icon }
                            </div>
                            <Link
                                className="menu-item-link"
                                to={route.path}
                                onClick={() => {
                                    setIsMenuOpen(false);
                                }}>
                                {route.linkName}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </Menu>
    );
};

export default Burger;
