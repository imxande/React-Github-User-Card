import React from 'react';

function UserCard(props){
    // console.log(props);
    return (
        <div >
            {props.user.map(item => (
                <div className = 'card' key = {item.id} >
                    <img src= {item.avatar_url}/>
                    <div className= 'card-info'>
                        <h3> {item.name} </h3>
                        <p className= 'username'> {item.login} </p>
    
                        <p>Profile:  
                            <a href={item.html_url}>{item.html_url}</a>
                        </p>
                        
                    </div>
                </div>
               
            ))}
        </div>
    )
}
export default UserCard;

