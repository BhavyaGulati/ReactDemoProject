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
    otherState: 'This is other state',
    userName: [
      {name: 'One Name'},
      {name: 'Two Name'},
      {name: 'Three Name'}
    ]
  }

  switchNameHandler = (newName) =>{
    console.log(this.state);
    // console.log('Yes was clicked!');
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

  changeUserNameHandler = (event) => {
    this.setState({
      userName: [
        {name: event.target.value},
        {name: 'Two Name'},
        {name: 'Three Name'}
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

        <br/>
        <UserInput usrName={this.state.userName[0].name} change={this.changeUserNameHandler}/>
        <UserOutput usrName={this.state.userName[0].name} />
        <UserOutput usrName={this.state.userName[1].name}/>
        <UserOutput usrName={this.state.userName[2].name}/>
      </div>
    );
  }
}

export default App;
