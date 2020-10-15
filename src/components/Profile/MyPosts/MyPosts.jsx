import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post';

const MyPosts = ({list}) => {


  const postList = list.map(({message, like}, i) => {
    return (
      
      <Post key={i}
        message={message}
        like={like}
      />

    
    )
  })
  return (
    <div className={classes.Posts}>
     <h2>My Posts</h2>
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <ul >
        {postList}
      </ul>
    </div>
  )

}

export default MyPosts;