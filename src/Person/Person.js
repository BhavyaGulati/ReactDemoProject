import React from 'react';
import Person from './Person.css'

const person = (props) => {
    return (
        <div className='Person'>
            <p onClick={props.click}>Hi, I am {props.name} and am {props.age} years old</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default person;