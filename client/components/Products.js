import React, { Component } from 'react';
import Header from './global/Header';
import Footer from './global/Footer';

class Products extends Component {
    render () {
        return (
            <div>
                <Header />
                <div className="wrapper">
                    <main className="content">
                        <h1>CSS grid template</h1>

                        <h2 className="theme-title">Product panel</h2>
                        <div id="theme" className="theme theme-1">
                            <section className="grid panel">
                                <article className="product">
                                    <img src="client/src/images/products/image1.jpg" />
                                    <h3 className="title">My Family</h3>
                                    <p className="details">Lorem ipsum dolor sit amet, nec graece omittam necessitatibus cu,
                                        sed at modo delicatissimi. Eu quo dolorum repudiare.</p>
                                </article>
                                <article className="product">
                                    <img src="client/src/images/products/image2.jpg" />
                                    <h3 className="title">The Good Guys</h3>
                                    <p className="details">Nec graece omittam necessitatibus cu,
                                        sed at modo delicatissimi. Eu quo dolorum repudiare.</p>
                                </article>
                                <article className="product">
                                    <img src="client/src/images/products/image3.jpg" />
                                    <h3 className="title">Cat Crew</h3>
                                    <p className="details">Eos te agam discere probatus, ne everti utroque voluptatibus vix.</p>
                                </article>
                                <article className="product">
                                    <img src="client/src/images/products/image4.jpg" />
                                    <h3 className="title">Happy</h3>
                                    <p className="details">Per mollis alterum no, per dictas veritus scaevola at. Quis iudicabit id cum,
                                        nemore iriure persius est ut, movet omnesque phaedrum ad est.</p>
                                </article>
                                <article className="product">
                                    <img src="client/src/images/products/image5.jpg" />
                                    <h3 className="title">Great Day</h3>
                                    <p className="details">Per mollis alterum no, per dictas veritus scaevola at. Quis iudicabit id cum,
                                        nemore iriure persius est ut, movet omnesque phaedrum ad est.</p>
                                </article>
                                <article className="product">
                                    <img src="client/src/images/products/image6.jpg" />
                                    <h3 className="title">Seriously?</h3>
                                    <p className="details">Vim in idque nulla persequeris. Facer insolens no pri. Noster docendi vis ut. Ad pri nullam dictas.</p>
                                </article>
                                <article className="product">
                                    <img src="client/src/images/products/image7.jpg" />
                                    <h3 className="title">Top Cat</h3>
                                    <p className="details">Duo in interesset neglegentur reprehendunt.</p>
                                </article>
                                <article className="product">
                                    <img src="client/src/images/products/image8.jpg" />
                                    <h3 className="title">Amazing Days</h3>
                                    <p className="details">Nec graece omittam necessitatibus cu,
                                        sed at modo delicatissimi. Eu quo dolorum repudiare.</p>
                                </article>
                                <article className="product">
                                    <img src="client/src/images/products/image9.jpg" />
                                    <h3 className="title">Brainy Bunch</h3>
                                    <p className="details">In a professional context it often happens that private or corporate clients corder a publication to be
                                        made and presented with the actual content still not being ready</p>
                                </article>
                                <article className="product">
                                    <img src="client/src/images/products/image10.jpg" />
                                    <h3 className="title">Snug</h3>
                                    <p className="details">Cicero famously orated against his political opponent Lucius Sergius Catilina.</p>
                                </article>
                                <article className="product">
                                    <img src="client/src/images/products/image11.jpg" />
                                    <h3 className="title">Looking Good</h3>
                                    <p className="details">Per mollis alterum no, per dictas veritus scaevola at. Quis iudicabit id cum,
                                        nemore iriure persius est ut, movet omnesque phaedrum ad est.</p>
                                </article>
                                <article className="product">
                                    <img src="client/src/images/products/image12.jpg" />
                                    <h3 className="title">Interesting</h3>
                                    <p className="details">Nec graece omittam necessitatibus cu,
                                        sed at modo delicatissimi. Eu quo dolorum repudiare.</p>
                                </article>
                            </section>
                        </div>
                    </main>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Products;

