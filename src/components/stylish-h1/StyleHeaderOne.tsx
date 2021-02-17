import React, { PropsWithChildren } from "react";
import "./style-header-one.css";

export enum StyledHeaderSize {
    SMALL = "s",
    MEDIUM = "m",
    LARGE = "l",
    HUGE = "xl",
}

interface StyleHeaderOneProps {
    size?: StyledHeaderSize;
}

const StyleHeaderOne = (props: PropsWithChildren<StyleHeaderOneProps>): JSX.Element => {
    const className = `h1-welcome h1-welcome-size--${props.size || StyledHeaderSize.HUGE}`;

    return <h1 className={className}>{props.children}</h1>;
};

export default StyleHeaderOne;
