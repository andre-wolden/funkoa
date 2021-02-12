import React, { useState } from "react";
import { OffCanvas, OffCanvasBody, OffCanvasMenu } from "react-offcanvas";

const OffCanvasExample = (): JSX.Element => {
    const [isOffCanvasMenuOpen, setIsOpen] = useState<boolean>(false);

    return (
        <OffCanvas
            width={300}
            transitionDuration={300}
            effect={"parallax"}
            isMenuOpened={isOffCanvasMenuOpen}
            position={"right"}>
            <OffCanvasBody style={{ fontSize: "30px" }}>
                <p>This is the main body container.</p>
                <p>
                    <button onClick={() => setIsOpen(!isOffCanvasMenuOpen)}>
                        Click here
                    </button>{" "}
                    to toggle the menu.
                </p>
            </OffCanvasBody>
            <OffCanvasMenu>
                <p>Placeholder content.</p>
                <ul>
                    <li>Link 1</li>
                    <li>Link 2</li>
                    <li>Link 3</li>
                    <li>Link 4</li>
                    <li>Link 5</li>
                    <li>
                        <button onClick={() => setIsOpen(!isOffCanvasMenuOpen)}>Toggle Menu</button>
                    </li>
                </ul>
            </OffCanvasMenu>
        </OffCanvas>
    );
};

export default OffCanvasExample;
