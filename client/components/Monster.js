import React, { Component } from 'react';
import Header from './global/Header';
import Footer from './global/Footer';

class Monster extends Component {
    render () {
        return (

            <div>
                <Header />
                <div className="wrapper">
                    <main>
                        <div className="monster-character">
                            <section className="character-container">
                                <figure className="character">
                                    <span className="eye"></span>
                                    <span className="mouth"></span>
                                </figure>
                            </section>
                        </div>
                    </main>
                </div>
                <Footer />
            </div>


        )
    }
}

export default Monster;