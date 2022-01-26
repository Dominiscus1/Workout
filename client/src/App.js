import "./App.css";
import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { default as Navbar } from './compnent/navbar/navbar';
import { default as Header } from './compnent/header/Header';
import { default as Profile } from './compnent/profile/Profile';
import { default as Workout} from './compnent/workout/Workout.js';
import { default as Register} from './pages/Register';

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [exercises, setExercises] = useState([]);
  
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Header} />
          <Route path="/Profile" exact component={() => <Profile exercises={exercises} />} />
          <Route path="/Workout" exact component={() => <Workout setExercises={setExercises} exercises={exercises}/>} />
          <Route path="/Register" exact component={() => <Register />} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
