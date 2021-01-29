import React, {Component, ComponentType} from 'react';
import './App.css';
import NavbarContainer from './components/Navbar/NavbarContainer';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News'
import Music from './components/Music/Music'
import Settings from './components/Settings'
import {Route, withRouter } from 'react-router-dom'
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeUserData } from "./redux/actions/auth";
import { RootStateType } from './redux/reduxStore';
import Preloader from './components/Preloader/preloader';


type MapDispatchType = {
  initializeUserData: () => void;
};
type MapStateType = {
  initialized: boolean
}
class App  extends Component<MapDispatchType & MapStateType> {
  componentDidMount() {
    this.props.initializeUserData();
  }
  render() {

    if (!this.props.initialized) {
      return<Preloader />
    }
    
    return (
        <div className="app-wrapper">
          <HeaderContainer />
          <NavbarContainer />
          <div className="content">
            <Route
              path="/profile/:userId?"
              render={() => <ProfileContainer />}
            />
            <Route path="/dialogs" render={() => <Dialogs />} />
            <Route path="/news" component={News} />
            <Route path="/music" component={Music} />
            <Route path="/login" component={Login} />
            <Route path="/settings" component={Settings} />
            <Route path="/users" render={() => <UsersContainer />} />
          </div>
        </div>
    )
  }
};
const mapStateToProps = (state: RootStateType) => {
  return {
    initialized: state.auth.initialized
  }
}
const AppContainer = compose<ComponentType>(
  withRouter,
  connect<MapStateType, MapDispatchType, {}, RootStateType>(mapStateToProps, { initializeUserData })
)(App);

export default AppContainer;
