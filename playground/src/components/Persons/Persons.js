import React, { PureComponent } from 'react';
import Person from './Person/Person';

// functional component (for UI/rendering)
// const persons = (props) => {

// PureComponent basically implements a shoudComponentUpdate with full checks on all props.
class Persons extends PureComponent {

    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    // componentWillReceiveProps(props) {
    //     console.log('[Persons.js] componentWillReceiveProps', props);
    // }

    /*
        With Component
        shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');
        // compare the pointer of the array (not the actually array)!
        return (nextProps.persons !== this.props.persons || 
                nextProps.changed !== this.props.changed ||
                nextProps.clicked !== this.props.clicked);
    }*/

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'Snapshot!' };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }

    render() {
        console.log('[Persons.js] rendering ...');
        return this.props.persons.map((person, index) => {
            // gets executed for every "person" in the array (the state array)
            return (
                <Person
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={(event) => this.props.changed(event, person.id)}
                    
                    // this is not really used here - it's a forwarding ...
                    // isAuth={this.props.isAuthenticated}
                />
            );
        });
    }

};

export default Persons;
