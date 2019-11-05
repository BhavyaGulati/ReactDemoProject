import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Bhavya', age: 24},
      {name: 'Aradhya', age: 27},
      {name: 'Shefali', age: 42}
    ],
    otherState: 'This is other state',
    showPersons: false
  }

  deletePersonHandler = (index) => {
    const persons = this.state.persons.slice();
    persons.splice(index, 1);
    this.setState({persons: persons})
  }

  changeNameHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Bhavya', age: 24},
        {name: event.target.value, age: 27},
        {name: 'Shefali', age: 42}
      ]
    });
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
                click={() => this.deletePersonHandler(index)}
                change={() => this.changeNameHandler()}
                name={person.name} 
                age={person.age}/>
            })}
        </div>
        )
      }

    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <button 
          style = {style}
          onClick={() => this.togglePersonHandler()}>Switch name</button>
          {person}
      </div>
    );
  }
}

export default App;
