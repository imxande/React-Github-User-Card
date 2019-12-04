import React from 'react';

function UserCard(props){
    console.log(props);
    return (
        <div >
            {props.followers.map(item => (
                <div className = 'card' key = {item.id} >
                    {/* <img> {item.avatar_url} </img> */}
                    <div className= 'card-info'>
                        <h3 className> {item.name} </h3>
                        <p className= 'username'> {item.login} </p>
                        <p> Location: {item.location} </p>
                        <p>Profile:  
                            <a href={item.html_url}>{item.html_url}</a>
                        </p>
                        <p>Followers: {item.followers}</p>
                        <p>Following: {item.following}</p>
                        <p>Bio: {item.bio}</p>
                    </div>
                </div>
               
            ))}
        </div>
    )
}
export default UserCard;

