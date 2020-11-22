import React, { ChangeEvent } from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { ActionsType, addPostMessageAC, changePostMessageAC, PostMessageType} from '../../redux/state';

export type PropsPostType = {
  list: Array<PostMessageType>;
  newPostMessage: string;
  dispatch: (action: ActionsType) => void;
};

const MyPosts: React.FC<PropsPostType> = ({ list, newPostMessage, dispatch }) => {


  const postList = list.map(({ message, like }, i) => {
    return <Post key={i} message={message} like={like} />;
  });

  const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.currentTarget.value) {
      dispatch(changePostMessageAC(e.currentTarget.value));
   };
  };

  const onAddMessage = () => {
    dispatch(addPostMessageAC());
  };

  return (
    <div className={classes.Posts}>
      <h2>My Posts</h2>
      <div>
        <textarea
          value={newPostMessage}
          onChange={onChangeMessage}
        ></textarea>
        <button onClick={onAddMessage}>Add post</button>
      </div>
      <ul>{postList}</ul>
    </div>
  );
};

export default MyPosts;