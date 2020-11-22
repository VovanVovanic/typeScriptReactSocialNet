import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News'
import Music from './components/Music/Music'
import Settings from './components/Settings'
import { BrowserRouter, Route } from 'react-router-dom'
import {RootStateType, ActionsType} from './components/redux/state'



type AppTypes = {
state: RootStateType;
dispatch: (action: ActionsType)=>void
};

const App: React.FC<AppTypes> = ({
  state,
dispatch
}) => {
  const { profile, dialogs, sidebar } = state;
  const { users, messages, newDialogMessage } = dialogs;
  const { postList, newPostMessage } = profile;
  const { friendList, routeList } = sidebar;

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />

        <Navbar friendList={friendList} routeList={routeList} />

        <div className="content">
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs
                users={users}
                messages={messages}
                newDialogMessage={newDialogMessage}
                dispatch={dispatch}
              />
            )}
          />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
          <Route
            path="/"
            exact
            render={() => (
              <Profile
                list={postList}
                newPostMessage={newPostMessage}
                dispatch={dispatch}
              />
            )}
          />
        </div>
      </div>
      ;
    </BrowserRouter>
  );
};

export default App;
