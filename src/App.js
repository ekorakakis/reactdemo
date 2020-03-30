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
    ]
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

  render() {
    const style={
      backgroundColour: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really working!</p>
        <button style={style}
              onClick={()=> this.switchNameHandler('Kitsos')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name}
          age={this.state.persons[1].age} 
          click={this.switchNameHandler.bind(this, 'Manousos')}
          changed={this.nameChangedHandler}>My hobbies</Person>
        <Person 
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
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
