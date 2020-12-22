import React, { ChangeEvent } from 'react';
import { newPostTextType, postListType } from '../../redux/reducers/profile';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

export type PropsPostType = {
  list: postListType;
  msgText: newPostTextType;
  onPostAddedAction: () => void
  onInputValueAction: (value: string) => void
};

const MyPosts: React.FC<PropsPostType> = ({
  list,
  msgText,
  onPostAddedAction,
  onInputValueAction,
}) => {
  const postList = list.map(({ post, like }, i) => {
    return <Post key={i} message={post} like={like} />;
  });

  const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.currentTarget.value) {
      onInputValueAction(e.currentTarget.value);
    }
  };

  const onAddMessage = () => {
    onPostAddedAction();
  };

  return (
    <div className={classes.Posts}>
      <h2>My Posts</h2>
      <div>
        <textarea value={msgText} onChange={onChangeMessage}></textarea>
        <button onClick={onAddMessage}>Add post</button>
      </div>
      <ul>{postList}</ul>
    </div>
  );
};

export default MyPosts;