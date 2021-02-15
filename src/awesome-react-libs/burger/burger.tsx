import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./burger.css";
import { Link } from "react-router-dom";
import { Route, Routes } from "../../types/Routes";

export interface BurgerProps {
    routes: Routes;
}

const Burger = (props: BurgerProps): JSX.Element => {
    const { routes } = props;
    return (
        <Menu>
            {routes.map((route: Route) => (
                <div key={route.path} id="home" className="menu-item-wrapper">
                    <Link className="menu-item-link" to={route.path}>
                        {route.linkName}
                    </Link>
                </div>
            ))}
        </Menu>
    );
};

export default Burger;
