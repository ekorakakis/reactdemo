import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  // state: only works in components (only when extends components)
  state = {
    persons: [
      { id: 'aawe', name: 'Max2', age: 28 },
      { id: 'asde', name: 'Manu', age: 29 },
      { id: 'werd', name: 'Stephanie', age: 26 }
    ],
    showPersons: false
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
    let persons = null;
    let btnClasses = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            // gets executed for every "person" in the array (the state array)
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );

      btnClasses = classes.Red;
    }

    // let classes = ['red', 'bold'].join(' ');
    const assignedClasses = [];

    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I am a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button className={btnClasses} onClick={this.togglePersonsHandler}>
          Toggle names
        </button>
        {persons}
      </div>
    );
  }
}

// export default Radium(App);
export default App;
