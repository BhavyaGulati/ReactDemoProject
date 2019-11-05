import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {id: 1, name: 'Bhavya', age: 24},
      {id: 2, name: 'Aradhya', age: 27},
      {id: 3, name: 'Shefali', age: 42}
    ],
    otherState: 'This is other state',
    showPersons: false
  }

  deletePersonHandler = (index) => {
    const persons = this.state.persons.slice();
    persons.splice(index, 1);
    this.setState({persons: persons})
  }

  changeNameHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;


    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let person = null;

    if (this.state.showPersons) {
        person = (
        <div>
            {this.state.persons.map((person,index) => {
              return <Person 
                index={index}
                click={this.deletePersonHandler}
                change={(event)=>this.changeNameHandler(event, person.id)}
                name={person.name} 
                age={person.age}
                key={person.id}/>
            })}
        </div>
        )
      }

    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <button 
          style = {style}
          onClick={this.togglePersonHandler}>Switch name</button>
          {person}
      </div>
    );
  }
}

export default App;
