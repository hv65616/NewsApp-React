import "./App.css";
import React, { Component } from "react";
import NavBar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar></NavBar>
          <Switch>
            <Route exact path="/">
              <News key="general" pageSize={8} category="general"></News>
            </Route>
            <Route exact path="/general">
              <News key="general" pageSize={8} category="general"></News>
            </Route>
            <Route exact path="/business">
              <News key="business" pageSize={8} category="business"></News>
            </Route>
            <Route exact path="/entertainment">
              <News
                key="entertainment"
                pageSize={8}
                category="entertainment"
              ></News>
            </Route>
            <Route exact path="/health">
              <News key="health" pageSize={8} category="health"></News>
            </Route>
            <Route exact path="/science">
              <News key="science" pageSize={8} category="science"></News>
            </Route>
            <Route exact path="/sports">
              <News key="sports" pageSize={8} category="sports"></News>
            </Route>
            <Route exact path="/technology">
              <News key="technology" pageSize={8} category="technology"></News>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
