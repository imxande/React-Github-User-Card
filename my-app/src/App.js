import React from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './components/UserCard';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      users: [],
      followers:[]
    };// end of state
  }// end of constructor

 // componentDidMount method
 componentDidMount(){
  axios.get('https://api.github.com/users/imxande')
  .then(response =>{
    console.log(response, "Lalaland")
    this.setState({users: [...this.state.users, response.data ]})
    // console.log(this.state.users)
  })
  axios.get('https://api.github.com/users/imxande/followers')
  .then(response =>{
    // console.log(response);
    this.setState({followers: response.data})
    console.log(this.state.followers)
  })
}// end of componentDidMount method

// this.setState({users: [...this.state.users, user.login ]

render(){
  return (
    <div>
      <UserCard user = {this.state.users} />
      {this.state.followers.map(item =>{
        return (
          <div className = 'card' key = {item.id} >
                    <img src= {item.avatar_url}/>
                    <div className= 'card-info'>
                        <h3> {item.name} </h3>
                        <p className= 'username'> {item.login} </p>
                        <p> Location: {item.location} </p>
                        <p>Profile:  
                            <a href={item.html_url}>{item.html_url}</a>
                        </p>
                    </div>
                </div>
        )
      })}
    </div>
  )
}// end of render

}// end of class App

export default App;


