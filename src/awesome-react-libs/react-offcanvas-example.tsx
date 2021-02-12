import React from 'react';
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from 'react-offcanvas';
import MyPlanet from './react-planet-example';

const ReactOffCanvasExample = (): JSX.Element => (
    <OffCanvas width={300} transitionDuration={300} isMenuOpened={true} position={'left'} effect={'overlay'}>
        <OffCanvasBody className={'my-body-class'} style={{ fontSize: '18px' }}>
            This is the canvas body.
            <MyPlanet />
        </OffCanvasBody>
        <OffCanvasMenu className={'my-menu-class'} style={{ fontWeight: 'bold' }}>
            This is the canvas menu.
        </OffCanvasMenu>
    </OffCanvas>
);

export default ReactOffCanvasExample;
