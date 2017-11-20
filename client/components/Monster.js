import React, { Component } from 'react';

class Monster extends Component {
    render () {
        return (

            <div className="monster-character">
                <section className="character-container">
                    <figure className="character">
                        <span className="eye"></span>
                        <span className="mouth"></span>
                    </figure>
                </section>
            </div>

        )
    }
}

export default Monster;