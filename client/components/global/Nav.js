import React, { Component } from 'react';

class Nav extends Component {

    render () {
        return (
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/form">Form</a></li>
                <li><a href="/typography">Typography</a></li>
                <li><a href="/pagination">Pagination</a></li>
                <li><a href="/buttons">Buttons</a></li>
                <li><a href="/tabs">Tabs</a></li>
            </ul>
        )
    }
}

export default Nav;