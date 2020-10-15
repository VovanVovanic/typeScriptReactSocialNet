import React from 'react';
import classes from './friends.module.css'

const Friends = ({friendList}) => {

 const myFriends = friendList.map(({label}, i) => {
        return (
            <li key={i}>{label}</li>
        )    
        })
    
    console.log(myFriends)
    return (
        <div className={classes.Friends}>
            <h2>Friends</h2>
            <ul>{myFriends}</ul>
        </div>
    )
}
export default Friends