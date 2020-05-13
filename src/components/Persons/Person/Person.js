import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import Auxiliary from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';

// ES6 function syntax (arrow)
// const person = (props) => {
    /*
        const rnd = Math.random();

            // random error generator (to demonstrate the ErrorBoundary component)
            if (rnd > 0.7) {
                throw new Error('Something went wrong');
            }

            Instead of using the div wrapper:
            <div className={classes.Person}>
            
            Use an auxiliary component that returns its children:
            <Auxiliary>

            Or the build-in React one (React.Fragment):
            <React.Fragment>
        */
class Person extends Component {
    render() {
        console.log('[Person.js] rendering ...');
        return (
            <Auxiliary>
                <p key="i1" onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p key="i2">{this.props.children}</p>
                <input key="i3" type="text" onChange={this.props.changed} value={this.props.name} />            
            </Auxiliary>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);
