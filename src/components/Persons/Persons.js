import React from 'react';
import Person from './Person/Person';

// functional component (for UI/rendering)
const persons = (props) => (
    props.persons.map((person, index) => {
        // gets executed for every "person" in the array (the state array)
        return <Person
          click={() => props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => props.changed(event, person.id)} />
      })
);

export default persons;
