import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./burger.css";
import { Link } from "react-router-dom";

const Burger = (): JSX.Element => {
    return (
        <Menu>
            <div id="home" className="menu-item-wrapper">
                <Link className="menu-item-link" to="/">Home</Link>
            </div>
            <div id="about" className="menu-item-wrapper">
                <Link className="menu-item-link" to="/about">About</Link>
            </div>
            <div id="admin" className="menu-item-wrapper">
                <Link className="menu-item-link" to="/admin">Admin</Link>
            </div>
        </Menu>
    );
};

export default Burger;
