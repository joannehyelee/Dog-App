import React from "react";

const NavBar = props => (
    <div className="gds-page-header__nav-bar">
        <div className="gds-page-header__primary-nav" data-menu>
            <button className="gds-page-header__menu" onClick={props.menuToggle}>
                <span className="gds-page-header__menu-line"></span>
                <span className="gds-page-header__menu-line"></span>
                <span className="gds-page-header__menu-line"></span>
                <span className="gds-page-header__menu-line"></span>
            </button>
        </div>
        <div className="-clear-both"></div>
    </div>
);

export default NavBar;