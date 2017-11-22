import React, { Component } from 'react';
import Header from './global/Header';
import Footer from './global/Footer';

class Form extends Component {
    render () {
        return (

            <div>
                <Header />
                <div className="wrapper">
                    <main>
                        <form className="form">
                            <fieldset>
                                <legend>Your details</legend>

                                <label className="label" htmlFor="name">Name</label>
                                <input className="user" type="text" name="name" id="name" required />

                            </fieldset>

                            <fieldset>
                                <legend>About you</legend>

                                <div>
                                    <h4>Membership type</h4>

                                    <p className="dropdown">
                                        <i className="fa fa-angle-up fa-small" aria-hidden="true"></i>
                                        <select>
                                            <option value="0">Select option</option>
                                            <option value="1">Gold</option>
                                            <option value="2">Silver</option>
                                            <option value="3">Bronze</option>
                                        </select>
                                    </p>
                                </div>

                                <div>
                                    <h4>Gym use</h4>

                                    <h4>Eat out?</h4>

                                    <ul className="form-list">
                                        <li>
                                            <input type="checkbox" id="op-1" />
                                            <label htmlFor="op-1">All the time</label>
                                        </li>
                                    </ul>


                                    <ul className="form-list">
                                        <li>
                                            <input type="radio" name="radio-button" id="radio-1" defaultChecked />
                                            <label htmlFor="radio-1">Never</label>
                                        </li>
                                        <li>
                                            <input type="radio" name="radio-button" id="radio-2" />
                                            <label htmlFor="radio-2">Sometimes</label>
                                        </li>
                                        <li>
                                            <input type="radio" name="radio-button" id="radio-3" />
                                            <label htmlFor="radio-3">Obessed</label>
                                        </li>
                                    </ul>
                                </div>

                                <div className="icon">
                                    <label className="label" htmlFor="textarea">Description</label>
                                    <textarea className="message" name="textarea" id="textarea" required></textarea>
                                </div>

                                <div>
                                    <button className="button button-action fr">Submit</button>
                                </div>
                            </fieldset>
                        </form>
                    </main>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Form;