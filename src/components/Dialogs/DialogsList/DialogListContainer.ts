
import { ComponentType } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { usersType } from '../../../redux/reducers/dialogs'
import { RootStateType } from '../../../redux/reduxStore'
import { withAuthRedirect } from '../../hoc/authRedirect'
import DialogsList from './DialogsList'

type MapStateType = {
  users: usersType
}
let mapStateToProps = (state:RootStateType):MapStateType => {
  return {
    users: state.dialogs.users
  }
}


const DialogsListContainer = compose<ComponentType>(
  connect<MapStateType, {}, {}, RootStateType>(mapStateToProps),
  withAuthRedirect
)(DialogsList)
export default DialogsListContainer