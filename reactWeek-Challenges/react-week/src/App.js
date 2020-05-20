import React, {Component} from 'react';
import './App.css';
import Persons from './Persons/Persons';



class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      person:[
        {Name: 'Max', Phone: '111-111-2222', DOB: '03/08/20'},
        {Name: 'Manu', Phone: '222-222-2222', DOB: '01/02/20'},
        {Name: 'Steph', Phone: '333-333-2223', DOB: '04/05/20'}
      ]
    };
  }
  render() {
    return (
      <Persons person={this.state.person} />
        
    )
  }
}

export default App;
