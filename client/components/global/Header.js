import React, { Component } from 'react';

class Header extends Component {
    constructor() {
        super();

        this.state = {
            isVisible: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isVisible: !prevState.isVisible
        }));
    }

    render () {
        return (

            <header>
                <div className="logo">
                    <img src="client/src/images/corporate/logo.svg" alt="Logo" />
                </div>
                <nav>
                    <ul className={this.state.isVisible ? 'nav show' : 'nav hide'}>
                        <li><a href="/">Home</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="/form">Form</a></li>
                        <li><a href="/typography">Typography</a></li>
                    </ul>
                </nav>

                <a href="#" className="menu-button" onClick={this.handleClick}>Menu<span></span></a>
            </header>
        )
    }
}

export default Header;