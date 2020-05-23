// REACT hooks: useState, useEffect
import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {

    // References with React.createRef(); are not possible in functional components like this one. For
    // this reason we are importing the useRef hook which will help us do the same within this functional
    // component. References are a way for getting access to the DOM elements in case there is an action
    // you need to perform. In this case we want to click the button as soon as we render the page. Just
    // make sure that you attempt to access the reference object after the JSX code has ran - so after it
    // has been initialised and to do that we use the useEffect method which only runs after REACT has
    // rendered everything.
    const toggleBtnRef = useRef(null);
    
    // Similarly we can use the useContext hook in order to get access to our context inside a functional
    // component like this.
    const authContext = useContext(AuthContext);
    console.log(authContext.authenticated);

    // useEffect: Pass a function and it gets called in every REACT render cycle (including the first one).
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Http request ...
        // const timer = setTimeout(() => {
        // setTimeout(() => {
        //    alert('Saved data to the cloud!');
        //}, 1000);
        toggleBtnRef.current.click();
        
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

    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red); // classes = ['red']
    }

    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
                ref={toggleBtnRef}
                className={btnClasses}
                onClick={props.clicked}>
                    Toggle names
            </button>
            {
                // The standard way of dealing with AuthContext inside functional components.
                // <AuthContext.Consumer>
                // {(context) => <button onClick={context.login}>Log in</button>}
                // </AuthContext.Consumer>

                // Alternatively we can use the useContext hook:
                <button onClick={authContext.login}>Log in</button>
            }
        </div>
    );
};

export default React.memo(cockpit);
