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

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: 'Bhavya', age: 24},
        {name: newName, age: 27},
        {name: 'Shefali', age: 42}
      ]
    });
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

    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <button 
          style = {style}
          onClick={this.togglePersonHandler}>Switch name</button>
        {
          this.state.showPersons===true ? 
            <div>
              <Person 
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age}/>
              <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age}
                changed={this.changeNameHandler}><p>My Hobbies: Cooking</p></ Person>
              <Person 
                name={this.state.persons[2].name} 
                age={this.state.persons[2].age} 
                click={this.switchNameHandler.bind(this,'Aradhya!!')}/>
              </div> : null 
        }
      </div>
    );
  }
}

export default App;
