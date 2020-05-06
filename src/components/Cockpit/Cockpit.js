import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    // let classes = ['red', 'bold'].join(' ');
    const assignedClasses = [];
    let btnClasses = '';

    if (props.showPersons) {
        btnClasses = classes.Red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red); // classes = ['red']
    }

    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
                className={btnClasses}
                onClick={props.clicked}>
                    Toggle names
            </button>
        </div>
    );
};

export default cockpit;