import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = () => {
  const [personState, setPerson] = useState(
    {
        persons: [{
            name: 'Max',
            age: 28
          },
          {
            name: 'Manu',
            age: 29
          }
        ]
      }
  );

  const [otherState, setOtherState] = useState('This is another state')

  const switchNameHandler = (newName) => {
        setPerson({
          persons: [{
              name: 'Bhavya',
              age: 24
            },
            {
              name: newName,
              age: 27
            }
          ]
        });
      };

  return(
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <button onClick={switchNameHandler.bind(this, 'Arun!')}>Switch name</button>
        <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
        <Person name={personState.persons[1].name} age={personState.persons[1].age}><p>My Hobbies: Cooking</p></ Person>
      </div>
    );
};

export default App;
