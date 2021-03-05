import React, { Component, ComponentType, Suspense } from 'react';
import { Col, Layout, Menu, Row} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Button } from "antd";
import './App.css';
import "antd/dist/antd.css";
import {Route, withRouter } from 'react-router-dom'
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeUserData } from "./redux/actions/auth";
import { RootStateType } from './redux/reduxStore';
import Preloader from './components/Preloader/preloader';
import styles from './app.module.scss'
import Navbar from './components/Navbar/Navbar';
import HeaderLogo from './components/Header/Header';
const UsersContainer = React.lazy(()=> import('./components/Users/UsersContainer'))
const Dialogs = React.lazy(() => import("./components/Dialogs/Dialogs"));
const News = React.lazy(() => import('./components/News'));
const Music= React.lazy(() => import('./components/Music/Music'));
const Settings = React.lazy(() => import('./components/Settings'));
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

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
      <Layout className={styles.layout}>
        <Header className="header">
          <Row>
            <Col span={18}> <Navbar /></Col>
            <Col span={6}><HeaderLogo /></Col>
          </Row>

        </Header>
        <Layout>
          <Sider width={300} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub3"
                icon={<NotificationOutlined />}
                title="subnav 3"
              >
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
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
