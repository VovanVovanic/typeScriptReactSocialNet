import React, { ComponentType, Suspense, useEffect } from 'react';
import {Layout } from 'antd';
import './App.css';
import "antd/dist/antd.css";
import { Route, useLocation, withRouter } from 'react-router-dom'
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/login';
import {  useDispatch, useSelector } from 'react-redux';
import { compose } from 'redux';
import { initializeUserData } from "./redux/actions/auth";
import { RootStateType } from './redux/reduxStore';
import Preloader from './components/Preloader/preloader';
import styles from './app.module.scss'
import HeaderContent from './components/HeaderContent/HeaderContent';
import SidebarContent from './components/SidebarContent/SidebarContent';
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'))
const Dialogs = React.lazy(() => import("./components/Dialogs/Dialogs"));
const News = React.lazy(() => import('./components/News'));
const Music = React.lazy(() => import('./components/Music/Music'));
const Settings = React.lazy(() => import('./components/Settings'));
const { Content, Sider } = Layout;


const App = ()=> {
  const dispatch = useDispatch()
  const isInit = useSelector<RootStateType, boolean>((state)=>state.auth.initialized)
  useEffect(() => {
  dispatch(initializeUserData());
  }, [])
  const loc = useLocation().pathname.slice(1)
  if (!isInit) {
    return<Preloader />
  }
    return (
      <Layout className={styles.layout}>
        <HeaderContent location={loc}/>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <SidebarContent location={loc}/>
          </Sider>
          <Layout >
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Route exact path="/" render={() => <ProfileContainer />} />
              <Suspense fallback={<div>Loading...</div>}>
                <Route path="/dialogs" render={() => <Dialogs />} />
                <Route path="/news" component={() => <News />} />
                <Route path="/music" component={() => <Music />} />
                <Route path="/settings" component={() => <Settings />} />
                <Route path="/users" render={() => <UsersContainer />} />
              </Suspense>
              <Route
                path="/profile/:userId?"
                render={() => <ProfileContainer />}
              />
              <Route path="/login" component={Login} />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }

const AppContainer = compose<ComponentType>(
  withRouter,
)(App);

export default AppContainer;

