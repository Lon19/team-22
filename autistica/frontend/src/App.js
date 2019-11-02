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
        <Navbar />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/mentalHealth">
            <MentalHealth />
          </Route>
          <Route path="/adjustments">
            <Adjustments />
          </Route>
          <Route path="/organisation">
            <Organisation />
          </Route>
          <Route path="/workCulture">
            <WorkCulture />
          </Route>
          <Route path="/settings">
            <Settings />
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

      <div>
        <UserProfile name="Stephen" />
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <Link to="/mentalHealth" type="button" class="btn">Mental Health</Link>
          </div>
          <div class="col-12 text-center">
            <Link to="/adjustments" type="button" class="btn">Adjustments</Link>
          </div>
          <div class="col-12 text-center">
            <Link to="/organisation" type="button" class="btn">Organisation</Link>
          </div>
          <div class="col-12 text-center">
            <Link to="/workCulture" type="button" class="btn">Work Culture</Link>
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

function MentalHealth() {
  return <h2>MentalHealth</h2>;
}

function Adjustments() {
  return <h2>Adjustments</h2>;
}

function Organisation() {
  return <h2>Organisation</h2>;
}

function WorkCulture() {
  return <h2>WorkCulture</h2>;
}

function Settings() {
  return <h2>Settings</h2>;
}

function Navbar(){
  return (
    <nav class="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
      <button type="button" class="navbar-toggler text-cente" data-toggle="collapse" data-target="#collapse_target">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapse_target">
        <ul class="navbar-nav">
          <li class ="nav-item">
            <a class="nav-link" href="/">AUTISTICA</a>
          </li>
          <li class ="nav-item">
            <a class="nav-link" href="/settings">Settings</a>
          </li>
        </ul>
      </div>
    </nav>
  );

}

function Footer(){

}
