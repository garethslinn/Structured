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
                        <h1>Pagination</h1>
                        <nav role="navigation">
                            <ul className="pagination">
                                <li><a className="button" href="#">
                                    <i className="fa fa-angle-double-left" aria-hidden="true">&nbsp;</i>
                                    Prev</a>
                                </li>
                                <li><a className="button button-pagination selected" href="#">1</a></li>
                                <li><a className="button button-pagination" href="#">2</a></li>
                                <li><a className="button button-pagination" href="#">3</a></li>
                                <li><a className="button button-pagination" href="#">4</a></li>
                                <li><span>...</span></li>
                                <li><a className="button button-pagination" href="#">20</a></li>
                                <li className="button"><a href="#">Next&nbsp;
                                    <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                                </a></li>
                            </ul>
                        </nav>

                        <h4>HTML</h4>
                        <section className="panel code">
                        <pre>
                        {`
<nav role="navigation">
    <ul className="pagination">
        <li><a className="button" href="#">
            <i className="fa fa-angle-double-left" aria-hidden="true">&nbsp;</i>
            Prev</a>
        </li>
        <li>
            <a className="button button-pagination selected" href="#">1</a>
        </li>
        <li>
            <a className="button button-pagination" href="#">2</a>
        </li>
        <li>
            <a className="button button-pagination" href="#">3</a>
        </li>
        <li>
            <a className="button button-pagination" href="#">4</a>
        </li>
        <li><span>...</span></li>
        <li>
            <a className="button button-pagination" href="#">20</a>
        </li>
        <li className="button"><a href="#">Next&nbsp;
            <i className="fa fa-angle-double-right" aria-hidden="true"></i>
        </a></li>
    </ul>
</nav>

                        `}
                        </pre>
                        </section>
                    </main>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Pagination;

