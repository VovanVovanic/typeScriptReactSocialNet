import React from 'react';
import { postListType } from '../../../redux/reducers/profile';
import classes from './MyPosts.module.css';
import MyPostsForm, { PostsDataType } from './MyPostsForm';
import Post from './Post/Post';

export type PropsPostType = {
  list: postListType;
  onPostAddedAction: (value: string) => void;
};

const MyPosts: React.FC<PropsPostType> = ({
  list,
  onPostAddedAction,

}) => {
  const postList = list.map(({ post, like }, i) => {
    return <Post key={i} message={post} like={like} />;
  });



  const onPostsFormHandler = (values: PostsDataType) => {
    onPostAddedAction(values.PostFormText);
  };

  return (
    <div className={classes.Posts}>
      <h2>My Posts</h2>
      <MyPostsForm onSubmit={onPostsFormHandler}/>
      <ul>{postList}</ul>
    </div>
  );
};

export default MyPosts;