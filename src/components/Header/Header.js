import React, { Component } from 'react';
import ProductBar from './ProductBar';
import NavBar from './NavBar';

class Header extends Component {

    menuToggle = event => {
        const sidebar = document.querySelector('[data-sidebar]');
        sidebar.classList.toggle('gds-persist-nav__sidebar--toggle');
    };

    render() {
        return (
            <header className="gds-page-header">
                <ProductBar />
                <NavBar menuToggle={this.menuToggle} />
            </header>
        );
    }
}

export default Header;