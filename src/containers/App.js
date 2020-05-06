// class-based component (for state management)

import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  // optional unless you want to do something at construction
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  // state: only works in components (only when extends components)
  state = {
    persons: [
      { id: 'aawe', name: 'Max2', age: 28 },
      { id: 'asde', name: 'Manu', age: 29 },
      { id: 'werd', name: 'Stephanie', age: 26 }
    ],
    showPersons: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDervicedStateFromProps', props);
    return state;
  }

  deletePersonHandler = (personIndex) => {
    // reference copy
    // const persons = this.state.persons;

    // complete copy
    // const persons = this.state.persons.slice();

    // or by using the spreads operator in a new array
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // spread operator
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    // this syntax means that "this" means this class
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    console.log('[App.js] render');
    let persons = null;
    
    if (this.state.showPersons) {
      persons = <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />;
    }

    return (
      <div className={classes.App}>
        <Cockpit 
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons} 
          clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  }
}

// export default Radium(App);
export default App;
