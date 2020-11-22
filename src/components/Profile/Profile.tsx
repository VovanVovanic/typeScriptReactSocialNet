import React from 'react';
import s from './Profile.module.css';
import { ActionsType, PostMessageType } from '../redux/state';
import MyPosts from './MyPosts/MyPosts';

export type PropsPostType = {
  list: Array<PostMessageType>;
  newPostMessage: string
  dispatch: (action: ActionsType) => void;
};

const Profile: React.FC<PropsPostType> = ({ list, newPostMessage, dispatch }) => {
  return (
    <div className={s.content}>
      <div>
        <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' />
      </div>
      <div>
        ava + description
      </div>
      <MyPosts
        list={list}
        newPostMessage={newPostMessage}
        dispatch={dispatch}
        
      />
    </div>
  )
}

export default Profile;