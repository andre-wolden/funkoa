import React from "react";
import "./corner-banner.css"

export interface CornerBannerProps {
    text: string;
}

const CornerBanner = (props: CornerBannerProps): JSX.Element => {
    return (
        <div className="corner-banner-wrapper">
            {props.text}
        </div>
    )
};

export default CornerBanner;
