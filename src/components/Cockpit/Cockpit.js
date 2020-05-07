// REACT hooks: useState, useEffect
import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    // useEffect: Pass a function and it gets called in every REACT render cycle (including the first one).
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Http request ...
        // const timer = setTimeout(() => {
        setTimeout(() => {
            alert('Saved data to the cloud!');
        }, 1000);
        
        // the componentWillUnmount effect in a functional component using the useEffect hook
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
            // clearTimeout(timer);
        };

    // componentDidMount effect:
    }, []);

    // dependency on a field effect use:
    // }, [props.persons]);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        };
    // no second argument = runs in every render cycle
    });

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
