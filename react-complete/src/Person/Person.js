import React from 'react';
import './Person.css'

const person = (props) => {
    return (
        <div className="Person">
            <p>I'm {props.name}...! I am still {props.age} years old..</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}></input>
            <button onClick={props.deleteHandler}>Delete</button>
        </div>
    )
}

export default person;