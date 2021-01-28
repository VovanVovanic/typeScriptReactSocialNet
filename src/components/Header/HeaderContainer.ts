
import { connect } from "react-redux";
import{logoff} from '../../redux/actions/auth'
import { RootStateType } from "../../redux/reduxStore";
import HeaderRequest from "./HeaderRequest";

export type AuthMapStateTypes = {
  login: null | string
  isFetching:  boolean
  isLogged: boolean
};
export type AuthDispatchType = {
  logoff: ()=>void
}
const mapStateToProps = (state:RootStateType):AuthMapStateTypes => {
  return {
    login: state.auth.login,
    isFetching: state.auth.isFetching,
    isLogged: state.auth.isLogged
  }
}

const HeaderContainer = connect<
  AuthMapStateTypes,
  AuthDispatchType,
  {},
  RootStateType
>(mapStateToProps, {logoff })(HeaderRequest);
 export default HeaderContainer