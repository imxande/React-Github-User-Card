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

//  // componentDidUpdate method
//  componentDidUpdate(prevProps, prevState){
//    if (prevState.users !== this.state.users){
//     axios.get('https://api.github.com/users/imxande/followers')
//     .then(response =>{
//       response.data.map(item =>{
//         this.setState({users: [...this.state.users, response.item.url ]})
//     console.log(this.state.users)
//       })
//     }// end of response 

//     )// end of then
//    }// end of if statement 
//  }// end of method

render(){
  return (
    <div>
      <UserCard user = {this.state.users} />
    </div>
  )
}// end of render

}// end of class App

export default App;


