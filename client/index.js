import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import Monster from './components/Monster';
import Contactform from './components/Contactform';


const Root = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path='/' exact component={ Contactform } />
                    <Route path="/monster" component={ Monster } />
                </Switch>
            </div>
        </Router>
    )
};

ReactDOM.render(<Root />, document.querySelector('#root'));