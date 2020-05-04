import React from 'react';
import classes from './Person.css';

// ES6 function syntax (arrow)
const person = (props) => {
    const rnd = Math.random();

        /*
            // random error generator (to demonstrate the ErrorBoundary component)
            if (rnd > 0.7) {
                throw new Error('Something went wrong');
            }
        */

    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
};

export default person;