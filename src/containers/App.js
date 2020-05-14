// class-based component (for state management)

import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import AuthContext from '../context/auth-context';

// for functional component usage:
// import WithClass from '../hoc/WithClass';

// for normal function usage:
import withClass from '../hoc/withClass';

import Auxiliary from '../hoc/Auxiliary';

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
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
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

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
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

    // this is not really a synchronous call - it is getting scheduled to be executed ...
    // this.setState({ persons: persons, changeCounter: this.state.changeCounter + 1 });

    // when depending to the previous state this is the way to do it:
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      };
    });
  }

  togglePersonsHandler = () => {
    // this syntax means that "this" means this class
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  loginHandler = () => {
    this.setState({authenticated:true});
  }

  render() {
    console.log('[App.js] render');
    let persons = null;
    
    if (this.state.showPersons) {
      persons = <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} 
          isAuthenticated={this.state.authenticated} />;
    }

    return (
      /* If you are using the functional HOC then wrap the whole thing with it like this:
      <WithClass classes={classes.App}>*/
      <Auxiliary>
        <button 
          onClick={() => {
            this.setState({showCockpit:false})
          }}
          >
            Remove Cockpit
          </button>
          {
            // AuthContext wraps everything that needs to know about that authentication context
          }
          <AuthContext.Provider value={{authenticated: this.state.authenticated, login: this.loginHandler}}>
            {this.state.showCockpit ?
              <Cockpit 
                title={this.props.appTitle}
                showPersons={this.state.showPersons}
                personsLength={this.state.persons.length} 
                clicked={this.togglePersonsHandler} />
            : null}
            {persons}
        </AuthContext.Provider>
      </Auxiliary>
    );
  }
}

// css management:
// export default Radium(App);

// using the default way of exporting:
// export default App;

// using the function style HOC:
export default withClass(App, classes.App);
