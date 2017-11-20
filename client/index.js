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
import Products from './components/Products';


const Root = () => {
    return (

        <Router>
            <div>
                <Switch>
                    <Route path='/' exact component={ Full } />
                    <Route path="/monster" component={ Monster } />
                    <Route path="/form" component={ Contactform } />
                    <Route path="/products" component={ Products } />
                </Switch>
            </div>
        </Router>

    )
};

ReactDOM.render(<Root />, document.querySelector('#root'));