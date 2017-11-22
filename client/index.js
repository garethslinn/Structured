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
import Typography from './components/Typography';
import Pagination from './components/Pagination';
import Buttons from './components/Buttons';


const Root = () => {
    return (

        <Router>
            <div>
                <Switch>
                    <Route path='/' exact component={ Full } />
                    <Route path="/form" component={ Contactform } />
                    <Route path="/products" component={ Products } />
                    <Route path="/typography" component={ Typography } />
                    <Route path="/pagination" component={ Pagination } />
                    <Route path="/buttons" component={ Buttons } />
                </Switch>
            </div>
        </Router>

    )
};

ReactDOM.render(<Root />, document.querySelector('#root'));