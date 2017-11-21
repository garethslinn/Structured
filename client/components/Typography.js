import React, { Component } from 'react';
import Header from './global/Header';
import Footer from './global/Footer';

class Typography extends Component {
    render () {
        return (
            <div>
                <Header />
                <div className="wrapper">
                    <main>
                        <h1>Typography</h1>
                        <section className="panel">
                            <h1>Heading H1</h1>
                            <h2>Heading H2</h2>
                            <h3>Heading H3</h3>
                            <h4>Heading H4</h4>
                            <h5>Heading H5</h5>
                        </section>

                        <h4>HTML</h4>
                        <section className="panel code">

                        <pre>{`
<h1>Heading H1</h1>
<h2>Heading H2</h2>
<h3>Heading H3</h3>
<h4>Heading H4</h4>
<h5>Heading H5</h5>
                        `}
                        </pre>
                        </section>

                        <section className="panel">
                            <p>Paragraph text.</p>
                        </section>

                        <h4>HTML</h4>
                        <section className="panel code">

                        <pre>{`
<p>Paragraph text.</p>
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

export default Typography;

