import React from 'react';
import s from './Post.module.css';


type SinglePostType = {
    message: string
    like: number
}
const Post: React.FC<SinglePostType> = ({message, like}) => {

  return (
    <li className={s.item}>
      <img src='https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg' />
        {message }
        <div>
        <span>like {like}</span>
      </div>
    </li>
  )
}

export default Post;