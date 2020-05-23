import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import Auxiliary from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

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
    // Introduced the constructor to make use of the React.createRef(); "modern" way of creating refs.
    // References are a way to get hold of DOM components in case there is an action you need to perform
    // like here where we need to focus on the last input element rendered.
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    // For class based components (like this) set the contextType static property in order to work with the context.
    static contextType = AuthContext;

    componentDidMount() {
        //this.inputElement.focus();
        this.inputElementRef.current.focus();
        // with contextType you have access to your context here as well:
        console.log(this.context.authenticated);
    }

    render() {
        console.log('[Person.js] rendering ...');
        return (
            <Auxiliary>
                {
                    // this only brings the context in the return
                    // <AuthContext.Consumer>
                    // {(context) => context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}
                    // </AuthContext.Consumer>

                    // use the code below when using contextType instead:
                }
                
                {this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}

                <p key="i1" onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p key="i2">{this.props.children}</p>
                <input 
                    key="i3"
                    // modern approach for refs
                    ref={this.inputElementRef}
                    // older ref approach (function form)
                    // ref={(inputEl) => {this.inputElement = inputEl}}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name} />
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
