import React from "react";
import "./header.css";

const Header = (): JSX.Element => {
    return (
        <div className="sticky-header">
            <div className="header-text-center">FunKoA</div>
            <div className="header-logo-right">
                <img className="header-koa-logo" alt={"funkoa logo"} src={"/logo.svg"} />
            </div>
        </div>
    );
};

export default Header;
