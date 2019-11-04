import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {
        name: 'Max',
        age: 28
      },
      {
        name: 'Manu',
        age: 29
      }
    ],
    otherState: 'This is another state'
  }

  switchNameHandler = () =>{
    // console.log('Yes was clicked!');
    this.setState({
      persons: [{
          name: 'Bhavya',
          age: 24
        },
        {
          name: 'Aradhya',
          age: 27
        }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}><p>My Hobbies: Cooking</p></ Person>
      </div>
    );
  }
}

export default App;
