
import { connect } from 'react-redux'
import { usersType } from '../../../redux/reducers/dialogs'
import { RootStateType } from '../../../redux/reduxStore'
import DialogsList from './DialogsList'

type MapStateType = {
  users: usersType
}
let mapStateToProps = (state:RootStateType):MapStateType => {
  return {
    users: state.dialogs.users
  }
}
const DialogsListContainer = connect<MapStateType, {}, {}, RootStateType>(mapStateToProps)(DialogsList)
export default DialogsListContainer