import React, { Component } from 'react';
import Nav from './Nav';

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
                <nav className={this.state.isVisible ? 'nav show' : 'nav hide'}>
                    <Nav />
                </nav>

                <a href="#" className="menu-button" onClick={this.handleClick}>Menu<span></span></a>
            </header>
        )
    }
}

export default Header;