import { RootStateType } from '../../../redux/reduxStore';
import { connect } from 'react-redux'
import MyPosts from './MyPosts'
import { postsActions} from "../../../redux/actions/myPosts";
import { newPostTextType, postListType } from '../../../redux/reducers/profile';

const { onInputValueAction, onPostAddedAction} = postsActions

type MapStateType = {
  list: postListType
  msgText: newPostTextType
  
}
type MapDispatchType = {
  onPostAddedAction: () => void
  onInputValueAction: (value:string) => void
}
let mapStateToProps = (state:RootStateType):MapStateType => {
  return {
    list: state.profile.postList,
    msgText: state.profile.newPostText,
    
  };
}

const MyPostsContainer = connect<MapStateType, MapDispatchType, {}, RootStateType>(mapStateToProps, {onPostAddedAction, onInputValueAction})(MyPosts)
export default  MyPostsContainer