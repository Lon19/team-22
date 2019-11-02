//import './App.css';

import React from "react";
import "./App.css";
import LineChartComponent from "./LineChart";
import BarChart from "./BarChart";
import AreaChart from "./AreaChart";
import LogIn from "./LogIn"
import 'bootstrap/dist/css/bootstrap.css' ;
//import smileyOne from "smileyFace.png";
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
        <div className="space"></div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/mentalHealthAnxiety">
            <MentalHealthAnxiety />
          </Route>
          <Route path="/mentalHealthDepression">
            <MentalHealthDepression />
          </Route>
          <Route path="/mentalHealthStress">
            <MentalHealthStress />
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
          <Route path="/login">
            <LogIn />
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
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <Link to="/mentalHealthDepression" type="button" className="btn">Mental Health</Link>
          </div>
          <div className="col-12 text-center">
            <Link to="/adjustments" type="button" className="btn">Adjustments</Link>
          </div>
          <div className="col-12 text-center">
            <Link to="/organisation" type="button" className="btn">Organisation</Link>
          </div>
          <div className="col-12 text-center">
            <Link to="/workCulture" type="button" className="btn">Work Culture</Link>
          </div>
        </div>
      </div>
    </div>
    //something to take up all empty space
  );
}

function ExampleGraph(){

}

function UserProfile(props){
  return(
    <div className="container">
      <h2 className="text-center">Welcome Back {props.name} !</h2>
    </div>
  );
}

function MentalHealthDepression(){
  return(
    <div className="container">
      <h2 className="text-center">Mental Health (Depression)</h2>
      <center>
          <LineChartComponent />
      </center>
      <div className="row">
        <div className="col text-center">
          <Link to="/mentalHealthAnxiety" type="button" className="btn">Anxiety</Link>
        </div>
        <div className="col text-center">
          <Link to="/mentalHealthStress" type="button" className="btn">Stress</Link>
        </div>
      </div>
    </div>
  );
}

function MentalHealthAnxiety() {
  return (
    <div className="container">
      <h2 className="text-center">Mental Health (Anxiety)</h2>
      <center>
          <BarChart />
      </center>
      <div className="row">
        <div className="col text-center">
          <Link to="/mentalHealthDepression" type="button" className="btn">Depression</Link>
        </div>
        <div className="col text-center">
          <Link to="/mentalHealthStress" type="button" className="btn">Stress</Link>
        </div>
      </div>
    </div>
  );
}

function MentalHealthStress() {
  return (
    <div className="container">
      <h2 className="text-center">Mental Health (Stress)</h2>
      <center>
          <AreaChart /> 
      </center>
      <div className="row">
        <div className="col text-center">
          <Link to="/mentalHealthDepression" type="button" className="btn">Depression</Link>
        </div>
        <div className="col text-center">
          <Link to="/mentalHealthAnxiety" type="button" className="btn">Anxiety</Link>
        </div>
      </div>
    </div>
  );
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
  return (
    <div className="container">
    <h1>Mental Health Graph Color Options</h1>
    <div className="row">
      <div className="col">
        Blue
      </div>
      <div className="col">
        <input type="checkbox" name="graph-color" value="BarChartColor"/>
      </div>
    </div>
      <div className="row">
        <div className="col">
          Red
        </div>
        <div className="col">
          <input type="checkbox" name="graph-color" value="BarChartColor"/>
        </div>
      </div>
    </div>
  );
}

function Login(){
  return(
    <div>
      <LogIn />
    </div>
  );

}

function Navbar(){
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
      <button type="button" className="navbar-toggler text-cente" data-toggle="collapse" data-target="#collapse_target">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapse_target">
        <ul className="navbar-nav">
          <li className ="nav-item">
            <a className="nav-link" href="/">AUTISTICA</a>
          </li>
          <li className ="nav-item">
            <a className="nav-link" href="/settings">Settings</a>
          </li>
        </ul>
      </div>
    </nav>
  );

}

function Footer(){

}
