import React, { Component } from 'react';
import Header from './global/Header';
import Footer from './global/Footer';

class Buttons extends Component {
    render () {
        return (
            <div>
                <Header />
                <div className="wrapper">
                    <main>
                        <h1>Buttons</h1>
                        <section className="panel">
                            <button className="button button-action">Action</button>&nbsp;
                            <button className="button button-warning">Warning</button>&nbsp;
                            <button className="button button-danger">Danger</button>&nbsp;
                            <button className="button button-plain">Information</button>
                        </section>

                        <h4>HTML</h4>
                        <section className="panel code">

                        <pre>{`
<button className="button button-action">Submit</button>
<button className="button button-warning">Submit</button>
<button className="button button-danger">Submit</button>
<button className="button button-plain">Submit</button>
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

export default Buttons;

