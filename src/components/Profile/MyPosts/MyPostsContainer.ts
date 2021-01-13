import { RootStateType } from '../../../redux/reduxStore';
import { connect } from 'react-redux'
import MyPosts from './MyPosts'
import { postsActions} from "../../../redux/actions/myPosts";
import {  postListType } from '../../../redux/reducers/profile';

const { onPostAddedAction} = postsActions

type MapStateType = {
  list: postListType
  
  
}
type MapDispatchType = {
  onPostAddedAction: (value:string) => void
  
}
let mapStateToProps = (state:RootStateType):MapStateType => {
  return {
    list: state.profile.postList,

    
  };
}

const MyPostsContainer = connect<MapStateType, MapDispatchType, {}, RootStateType>(mapStateToProps, {onPostAddedAction})(MyPosts)
export default  MyPostsContainer