import React from 'react';
import {state} from './components/redux/state'
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News'
import Music from './components/Music/Music'
import Settings from './components/Settings'
import {BrowserRouter, Route} from 'react-router-dom'

const App = () => {
  const { profile, dialogs, sidebar } = state
  const { users, messages } = dialogs
  const { postList } = profile
  const {friendList, routeList}=sidebar
  return <BrowserRouter>
      <div className="app-wrapper">
        <Header />
      <Navbar friendList={friendList} routeList={routeList}/>
        <div className="content">
        <Route path="/dialogs" render={() => <Dialogs users={users} messages={messages}/>} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        <Route path="/" exact render={()=><Profile list={postList}/>} />
        </div>
      </div>;
    </BrowserRouter>;
  
  
}

export default App;
