import React, { Component } from 'react';
import Header from './global/Header';
import Footer from './global/Footer';

class Tabs extends Component {
    render () {
        return (
            <div>
                <Header />
                <div className="wrapper">
                    <main>
                        <article class="tabs">
                            <section id="tab1">
                                <h2><a href="#tab1">Option 1</a></h2>
                                <p>Lorem ipsum dolor sit amet, nec graece omittam necessitatibus cu, sed at modo delicatissimi. Eu quo dolorum repudiare.</p>
                            </section>

                            <section id="tab2">
                                <h2><a href="#tab2">Option 2</a></h2>
                                <p>Nec graece omittam necessitatibus cu, sed at modo delicatissimi. Eu quo dolorum repudiare.</p>
                            </section>

                            <section id="tab3">
                                <h2><a href="#tab3">Option 3</a></h2>
                                <p>Per mollis alterum no, per dictas veritus scaevola at. Quis iudicabit id cum, nemore iriure persius est ut, movet omnesque phaedrum ad est.</p>
                            </section>
                        </article>


                        <h4>HTML</h4>
                        <section className="panel code">

                        <pre>{`
<article class="tabs">
    <section id="tab1">
        <h2><a href="#tab1">Option 1</a></h2>
        <p>Lorem ipsum dolor sit amet, nec graece omittam necessitatibus cu, sed at modo delicatissimi. Eu quo dolorum repudiare.</p>
    </section>

    <section id="tab2">
        <h2><a href="#tab2">Option 2</a></h2>
        <p>Nec graece omittam necessitatibus cu, sed at modo delicatissimi. Eu quo dolorum repudiare.</p>
    </section>

    <section id="tab3">
        <h2><a href="#tab3">Option 3</a></h2>
        <p>Per mollis alterum no, per dictas veritus scaevola at. Quis iudicabit id cum, nemore iriure persius est ut, movet omnesque phaedrum ad est.</p>
    </section>
</article>
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

export default Tabs;

