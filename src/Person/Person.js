import React from 'react';
import './Person.css';

//function person(){
//return <h2></h2>
//}
//or
//var person = function() {
//return ...
//}

// ES6 function syntax (arrow)
const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default person;
