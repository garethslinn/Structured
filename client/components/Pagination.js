import React, { Component } from 'react';
import Header from './global/Header';
import Footer from './global/Footer';

class Pagination extends Component {
    render () {
        return (
            <div>
                <Header />
                <div className="wrapper">
                    <main>
                        <nav role="navigation">
                            <ul className="pagination no-space move-buttons">
                                <li className="button"><a href="#0">Prev</a></li>
                                <li><a href="#0">1</a></li>
                                <li><a href="#0">2</a></li>
                                <li><a className="current" href="#0">3</a></li>
                                <li><a href="#0">4</a></li>
                                <li><span>...</span></li>
                                <li><a href="#0">20</a></li>
                                <li className="button"><a href="#0">Next</a></li>
                            </ul>
                        </nav>
                    </main>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Pagination;
