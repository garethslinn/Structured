import React, { Component } from 'react';

class Full extends Component {
    render () {
        return (
            <div className="wrapper">
                <header>
                    <div className="logo"><img src="assets/logo.svg" alt="Logo" /></div>

                    <nav>
                        <ul className="main-nav">
                            <li><a href="#branding">Branding</a></li>
                            <li><a href="#colors">Colors</a></li>
                            <li><a href="#typography">Typography</a></li>
                            <li><a href="#buttons">Buttons</a></li>
                            <li><a href="#icons">icons</a></li>
                            <li><a href="#form">Form</a></li>
                        </ul>
                    </nav>

                    <a href="assets/assets-download-file.zip" className="download"><span>Download assets</span></a>
                    <a href="#0" className="nav-trigger">Menu<span></span></a>
                </header>
                <main>
                    <h1>Main page</h1>
                </main>
            </div>
        )
    }
}

export default Full;

