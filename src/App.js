import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// Different approaches to styling:
// import Radium, { StyleRoot } from 'radium'
// import styled from 'styled-components';

/* const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  }
`; */

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

  /*
  switchNameHandler = (newName) => {
    console.log('was clicked');
    // DON'T DO THIS: this.state.persons[0].name='Jonathan';
    this.setState({
      persons: [
        { name: newName, age: 28 }, 
        { name: 'Manus', age: 29 },   
        { name: 'Stephanie', age: 26 }
      ]
    })
  }
  */

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;
    // reference copy

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

    // const person = this.state.persons[personIndex]; - reference or
    // const person = Object.assign({}, this.state.persons[personIndex]);

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

    // {this.state.showPersons ? : null}
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

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

      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

    // let classes = ['red', 'bold'].join(' ');
    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red'); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); // classes = ['red', 'bold']
    }

    // StyleRoot required for media queries (a radium thing)
    // for wrapping around the entire application
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button alt={this.state.showPersons} onClick={this.togglePersonsHandler}>
          Toggle names
        </button>
        {persons}
      </div>
    );

    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Does this work now?'));
  }

  /*const app = props => {
    const [ personsState, setPersonsState] = useState({
      persons: [
        { name: 'Max24', age: 28 }, 
        { name: 'Manus', age: 29 }, 
        { name: 'Stephanie', age: 26 }
      ]
    });
  
    console.log(personsState);
  
    const switchNameHandler = () => {
      console.log('was clicked');
      // DON'T DO THIS: this.state.persons[0].name='Jonathan';
      setPersonsState({
        persons: [
          { name: 'Max24asas', age: 28 }, 
          { name: 'Manus', age: 29 }, 
          { name: 'Stephanie', age: 26 }
        ]
      });
    };
  
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really working!</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
      </div>
    );*/
}

// export default Radium(App);
export default App;
