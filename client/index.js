import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Monster from './components/Monster';
import Contactform from './components/Contactform';

class App extends Component {
    render() {
        return (

            <div>
                <Contactform />
            </div>

        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));