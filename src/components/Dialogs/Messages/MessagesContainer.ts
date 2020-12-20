
import { onMessageFormSubmit, onMessageFormSubmitType, onMessageTextChangeAction, onMessageTextChangeActionType } from "../../redux/actions/messages";
import { connect } from 'react-redux'
import Messages from './Messages'
import { RootStateType } from "../../redux/reduxStore";
import { messagesType, newMessageTextType } from "../../redux/reducers/dialogs";

type MapStateType = {
  messages: messagesType
  newMessageText: newMessageTextType
}
type MapDispatchType = {
  onMessageFormSubmit: () => onMessageFormSubmitType
  onMessageTextChangeAction: (text:string) => onMessageTextChangeActionType
}

let mapStateToProps = (state:RootStateType):MapStateType => {
  return {
    messages: state.dialogs.messages,
    newMessageText: state.dialogs.newMessageText
  }
}
const MessagesContainer = connect<MapStateType, MapDispatchType, {}, RootStateType>(mapStateToProps, {onMessageFormSubmit, onMessageTextChangeAction} )(Messages);
export default MessagesContainer 