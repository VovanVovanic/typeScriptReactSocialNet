import React, {Component,ComponentType,Suspense} from 'react';
import './App.css';
import "antd/dist/antd.css";
import NavbarContainer from './components/Navbar/NavbarContainer';
import {Route, withRouter } from 'react-router-dom'
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeUserData } from "./redux/actions/auth";
import { RootStateType } from './redux/reduxStore';
import Preloader from './components/Preloader/preloader';
import { Button } from 'antd';
const UsersContainer = React.lazy(()=> import('./components/Users/UsersContainer'))
const Dialogs = React.lazy(() => import("./components/Dialogs/Dialogs"));
const News = React.lazy(() => import('./components/News'));
const Music= React.lazy(() => import('./components/Music/Music'));
const Settings = React.lazy(() => import('./components/Settings'));



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
          <div style={{ fontSize: '22px' }}>Sorry but APP creation is still in progress</div>
          <Route exact path="/" render={() => <ProfileContainer />} />
          <Suspense fallback={<div>Loading...</div>}>
            <Route path="/dialogs" render={() => <Dialogs />} />
            <Route path="/news" component={() => <News />} />
            <Route path="/music" component={() => <Music />} />
            <Route path="/settings" component={() => <Settings />} />
            <Route path="/users" render={() => <UsersContainer />} />
          </Suspense>
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/login" component={Login} />
        </div>
      </div>
    );
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
