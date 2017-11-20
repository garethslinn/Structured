import React, { Component } from 'react';

class Header extends Component {
    render () {
        return (

            <header>
                <div className="logo">
                    <img src="client/src/images/corporate/logo.svg" alt="Logo" />
                </div>
                <nav>
                    <ul className="nav">
                        <li><a href="/">Home</a></li>
                        <li><a href="/monster">Monster</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="/form">Form</a></li>
                    </ul>
                </nav>

                <a href="#" className="menu-button">Menu<span></span></a>
            </header>
        )
    }
}

export default Header;