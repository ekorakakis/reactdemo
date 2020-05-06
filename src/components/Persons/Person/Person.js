import React, { Component } from 'react';
import classes from './Person.css';

// ES6 function syntax (arrow)
// const person = (props) => {
    /*
        const rnd = Math.random();

            // random error generator (to demonstrate the ErrorBoundary component)
            if (rnd > 0.7) {
                throw new Error('Something went wrong');
            }
        */
class Person extends Component {
    render() {
        console.log('[Person.js] rendering ...');
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
    );

    }
};

export default Person;
