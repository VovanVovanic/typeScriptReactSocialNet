
import { connect } from "react-redux";
import{getUserData, logoff} from '../../redux/actions/auth'
import { RootStateType } from "../../redux/reduxStore";
import HeaderRequest from "./HeaderRequest";

export type AuthMapStateTypes = {
  login: null | string
  isFetching:  boolean
  isLogged: boolean
};
export type AuthDispatchType = {
  getUserData: () => void
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
>(mapStateToProps, { getUserData, logoff })(HeaderRequest);
 export default HeaderContainer