import React, { Component } from 'react';
import './App.css';
// import axios from 'axios';
import Person from './Person';

class App extends Component {
  state = {
    persons: [
      {
        name: 'Bahroel',
        age: 21
      },
      {
        name: 'Najaa',
        age: 22
      },
      {
        name: 'Arsyad',
        age: 19
      }
    ]
  }

  switchNameHandler = (newNAme) => {
      // console.log('was clicked!');
      // this.state.persons[0].name = "Bahrul Amaruddin";
      this.setState(
         {
          persons: [
          {
            name: newNAme,
            age: 21
          },
          {
            name: 'Najaa',
            age: 22
          },
          {
            name: 'Arsyad',
            age: 19
          }
        ]
         }
        );
  }

  nameChanged = (event) =>{
   this.setState(
         {
          persons: [
          {
            name: 'Bahrul',
            age: 21
          },
          {
            name: 'Najaa',
            age: 22
          },
          {
            name: event.target.value,
            age: 19
          }
        ]
         }
        ); 
  }


  render() {
    return (
        <div className="App">
          <button onClick={() => this.switchNameHandler('Max')}>Switch Name</button>

          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>I am in Computer Science Major</Person>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, 'Bahrul Amaruddin')} />
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} changed={this.nameChanged} />
        </div>
      );

  }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     facts: []
  //   };
  }
  


    // this is jsx
    // return React.createElement('div', {className:"App"}, React.createElement('h3', null, 'Its me, Bahroel'));
    
    // this is manual component
    // return (
    //   <div className="App">
    //     <h5>My name is Bahroel</h5>
    //     <p>{this.state.facts.length > 0 ? this.state.facts[0].text : ''}</p>
    //   </div>
    // );  
  // componentDidMount(){
  //   axios.get("https://cat-fact.herokuapp.com/facts").then(response => {
  //     this.setState({
  //       facts: response.data.all
  //     });

  //     console.log(this.state.facts);
  //   });
  // }
// }

export default App;
