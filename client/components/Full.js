import React, { Component } from 'react';
import Header from './global/Header';
import Footer from './global/Footer';

class Full extends Component {
    render () {
        return (
            <div>
                <Header />
                <div className="wrapper">
                    <main>
                        <h1>What is Structured?</h1>
                        <p>This project is in development... </p>
                        <p>It is currently an experimental project therefore objectives are currently unclear.</p>
                    </main>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Full;

