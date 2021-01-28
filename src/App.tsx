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
import { getUserData } from './redux/actions/auth';
import { RootStateType } from './redux/reduxStore';

type MapDispatchType = {
  getUserData: ()=>void
}
class App  extends Component<MapDispatchType> {
  componentDidMount() {
    this.props.getUserData()
  }
  render() {
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

const AppContainer = compose<ComponentType>(
 withRouter,
  connect<{}, MapDispatchType, {}, RootStateType>(null, { getUserData }),
 
)(App);

export default AppContainer;
