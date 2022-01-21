import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { default as Navbar } from './compnent/navbar/navbar';
import { default as Header } from './compnent/header/Header';
import { default as Profile } from './compnent/profile/Profile';
import { default as Login} from './compnent/login/login';
function App() {
  return (
      <Router>
        <Navbar/>
          <Switch>
            <Route path="/" exact component={() => <Header />} />
            <Route path="/Profile" exact component={() => <Profile />} />
            <Route path="/Register" exact component={() => <Login />} />
          </Switch>
      </Router>

  )
};

export default App;
