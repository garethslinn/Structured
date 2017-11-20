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
                        <h1>Main page</h1>
                    </main>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Full;

