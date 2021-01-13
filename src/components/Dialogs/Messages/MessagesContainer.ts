
import { onMessageFormSubmit} from "../../../redux/actions/messages";
import { connect } from 'react-redux'
import Messages from './Messages'
import { RootStateType } from "../../../redux/reduxStore";
import { messagesType} from "../../../redux/reducers/dialogs";

type MapStateType = {
  messages: messagesType
}
type MapDispatchType = {
  onMessageFormSubmit: (value:string) => void
}

let mapStateToProps = (state:RootStateType):MapStateType => {
  return {
    messages: state.dialogs.messages,

  }
}
const MessagesContainer = connect<MapStateType, MapDispatchType, {}, RootStateType>(mapStateToProps, {onMessageFormSubmit} )(Messages);
export default MessagesContainer 