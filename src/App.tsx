import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavbarContainer from './components/Navbar/NavbarContainer';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News'
import Music from './components/Music/Music'
import Settings from './components/Settings'
import { BrowserRouter, Route } from 'react-router-dom'
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';


const App = () => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavbarContainer />
        <div className="content">
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={() => <Dialogs />} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
          <Route path="/users" render={() => <UsersContainer />} />
        </div>
      </div>
      ;
    </BrowserRouter>
  );
};

export default App;
