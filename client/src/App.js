import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { default as Navbar } from './compnent/navbar/navbar';
import { default as Header } from './compnent/header/Header';
import { default as Profile } from './compnent/profile/Profile';
import { default as Workout } from './compnent/workout/Workout'
function App() {
  return (
      <Router>
        <Navbar/>
          <Switch>
            <Route path="/Header" exact component={() => <Header />} />
            <Route path="/Profile" exact component={() => <Profile />} />
            <Route path="/Workout" exact component={() => <Workout />} />
          </Switch>
      </Router>

  )
};

export default App;
