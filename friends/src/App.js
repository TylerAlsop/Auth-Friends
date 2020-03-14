import React from 'react';
import { Route, Link, Switch } from "react-router-dom";
import LoginForm from './components/LoginForm';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
            <Link id="link" to="/api/login">Login</Link>
            <Link id="link" to="/api/friends">List of Friends</Link>
      </header>
      <Switch>
        <PrivateRoute exact path="/api/friends" component={FriendsList} />
        <Route path="/api/login" component={LoginForm} />
      </Switch>
    </div>
  );
}

export default App;
