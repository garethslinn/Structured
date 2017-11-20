import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import Monster from './components/Monster';
import Contactform from './components/Contactform';
import Full from './components/Full';


const Root = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path='/' exact component={ Full } />
                    <Route path="/monster" component={ Monster } />
                </Switch>
            </div>
        </Router>
    )
};

ReactDOM.render(<Root />, document.querySelector('#root'));