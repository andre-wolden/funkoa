import React from "react";
import "./header.css";

const Header = (): JSX.Element => {
    return <div className="sticky-header">I am the Header. Insert logo and the rest.
        <img alt={"funkoa logo"} src={"/favicon.ico"} />

    </div>;
};

export default Header;
