import React from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './components/UserCard';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      users: []
    };// end of state
  }// end of constructor

 // componentDidMount method
 componentDidMount(){
  axios.get('https://api.github.com/users/imxande')
  .then(response =>{
    this.setState({users: [...this.state.users, response.data ]})
    console.log(this.state.users)
  })
}// end of componentDidMount method

render(){
  return (
    <div>
      <UserCard followers = {this.state.users} />
    </div>
  )
}// end of render

}// end of class App

export default App;
