
import { connect } from "react-redux";
import { dataType } from "../../redux/reducers/auth";
import { setUserData } from "../../redux/actions/auth";
import { RootStateType } from "../../redux/reduxStore";
import HeaderRequest from "./HeaderRequest";

export type AuthMapStateTypes = {
  login: null | string
  isFetching:  boolean
  isLogged: boolean
};
export type AuthDispatchType = {
  setUserData: (data:dataType)=> void
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
>(mapStateToProps, { setUserData })(HeaderRequest);
 export default HeaderContainer