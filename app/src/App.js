//import './App.css';

import React from "react";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.css' ;
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/mentalHealth">MentalHealth</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/mentalHealth">
            <MentalHealth />
          </Route>
          <Route path="/adjustments">
            <MentalHealth />
          </Route>
          <Route path="/organisation">
            <MentalHealth />
          </Route>
          <Route path="/settings">
            <MentalHealth />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {

  return (
    //navbar should be at top -> dillon and klaudia
    <div>
      <UserProfile name="Stephen" />

    <div class="container">
      <div class="row">
        <div class="col-md-3 col-sm-6 text-center">
          <Link to="/mentalHealth" type="button" class="btn">Mental Health</Link>
        </div>
        <div class="col-md-3 col-sm-6 text-center">
          <Link to="/mentalHealth" type="button" class="btn">Adjustments</Link>
        </div>
        <div class="col-md-3 col-sm-6 text-center">
          <Link to="/mentalHealth" type="button" class="btn">Organisation</Link>
        </div>
        <div class="col-md-3 col-sm-6 text-center">
          <Link to="/mentalHealth" type="button" class="btn">Work Culture</Link>
        </div>
      </div>
    </div>
  </div>
    //something to take up all empty space
  );
}

function UserProfile(props){
  return(
    <div class="container">
      <h2 class="text-center">Welcome Back {props.name} !</h2>
    </div>
  );
}

function Settings() {
  return <h2>Settings</h2>;
}
function MentalHealth() {
  return <h2>MentalHealth</h2>;
}
