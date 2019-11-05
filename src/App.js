import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    persons: [
      {name: 'Bhavya', age: 24},
      {name: 'Aradhya', age: 27},
      {name: 'Shefali', age: 42}
    ],
    otherState: 'This is other state'
  }

  switchNameHandler = (newName) =>{
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
          onClick={() => this.switchNameHandler('Arun!!')}>Switch name</button>
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
      </div>
    );
  }
}

export default App;
