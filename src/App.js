import React, { Component } from 'react';
// import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  // state: only works in components (only when extends components)
  state = {
    persons: [
      { name: 'Max2', age: 28 }, 
      { name: 'Manu', age: 29 }, 
      { name: 'Stephanie', age: 26 }
    ],
    showPersons: false
  }

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

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 }, 
        { name: event.target.value, age: 29 }, 
        { name: 'Stephanie', age: 26 }
      ]
    })
  }

  togglePersonsHandler = () => {
    // this syntax means that "this" means this class
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});

    // {this.state.showPersons ? : null}
  }

  render() {
    const style={
      backgroundColour: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            // gets executed for every "person" in the array (the state array)
            return <Person 
              name={person.name}
              age={person.age} />
          })}
        </div> 
      );
    }

    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really working!</p>
        <button style={style}
          onClick={this.togglePersonsHandler}>Toggle names</button>
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

  
export default App;
// export default app;
